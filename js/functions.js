const functions = {
  getCommand(value) {
    return value.slice(0, value.indexOf("!")); //GET THE COMMAND NAME
  },

  getThemeName(value) {
    return value.slice(value.indexOf('"') + 1, -1); //GET THEME NAME OF INPUT
  },

  setTheme(name) {
    THEMENAME = name; //THENAME IS A VARIABLE GLOBAL WHICH WAS DECLARED IN /js/applyTheme.js
    functions.changeTheme(); //THE FUNCTION WHICH DECLARED IN /js/applyTheme.js
  },

  Help() {
    window.location.href = "./src/pages/help.html"; //redirec user
  },
  changeTheme() {
    const T = new Themes(THEMENAME); // INSTACIED THE CLASS THAT CONTAINS ALL THEMES PASSING THE THEME NAME
    const theme = T.getTheme(); // GET THEME SELECTED

    theme.map((value) => {
      // THIS .map() change the colors
      let key = Object.keys(value); // GETTING THE VALUE KEY OF OBJECT
      let elements = document.querySelectorAll(key); //GET ELEMENTS IF CONTAINS IN key VAR
      for (let element of elements) {
        //FOR BY ELEMENTS CAPTURED
        for (style of value[key]) {
          // THIS FOR IS WHO WILL WORK TO APPLY THE COLORS AND BACKGROUNDS
          let keyElement = Object.keys(style); //GET KEY THE OBJECT OF STYLE
          element.style[keyElement] = style[keyElement[0]]; // SET THE STYLE IN ELEMENT
        }
      }
    });

    localStorage.clear(); //CLEAR THE LOCALSTORAGE FOR ADD KEY "theme" WITH KEY THEMENAME
    localStorage.setItem("theme", THEMENAME); //SAVE VALUE: THEMENAME in KEY: "theme"
    //for show details:
    //open de DevTools and write: localStorage
    //press enter
  },

  execCommand(command, value) {
    switch (command) {
      case "help":
        this.Help();
        return false;
      case "theme":
        let themes = new Themes("").totalThemes(); //GET ARRAY THEMES
        let myTheme = functions.getThemeName(value); //GET THEME NAME OF INPUT
        for (let theme of themes) {
          if (myTheme == theme) {
            functions.setTheme(myTheme); //IF CASE THE THEME FOUND APPLY THIS THEME
            return false;
          }
        }
        alert(`THE THEME: ${myTheme} NOT FOUND`);
        return false;
    }
  },
  findUrl(str, list) {
    for (let value of list) {
      if (str.indexOf(value) != -1) {
        return true;
      }
    }
    return false;
  },
};
