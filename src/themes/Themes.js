class Themes {
  constructor(themeName) {
    this.theme = themeName;
    /*
    THE ARRAY this.themeList contains the themes that can be applieds
    */
    this.themeList = [
      ///
      {
        dark: [
          //name of theme; it must be a array
          {
            body: [
              //name of element for get later
              //this element must be a array! this is important
              //inside of this array must have a object for each style
              //the object style: your key must be the name of propiety of style
              //and your value must be the style
              {
                background: "linear-gradient(-90deg, #080e0d, #0d1a17)",
              },
              {color: "rgb(0, 228, 0)"},
            ],
          },

          {
            ".header-top h1": [{color: "lightblue"}],
          },

          {
            ".input-search": [
              {color: "rgb(0, 255, 234)"},
              {background: "transparent"},
            ],
          },

          {
            ".pipe": [{color: "lightgray"}],
          },

          {
            a: [{color: "lightslategrey"}],
          },
        ],
      },

      {
        light: [
          {
            body: [
              {
                background: "linear-gradient(-70deg, #5c4e96, #4085a5)",
              },
              {color: "rgb(0, 228, 0)"},
            ],
          },

          {
            ".header-top h1": [{color: "lightblue"}],
          },

          {
            ".input-search": [
              {color: "rgb(200, 255, 234)"},
              {background: "transparent"},
            ],
          },

          {
            ".pipe": [{color: "violet"}],
          },

          {
            a: [{color: "white"}],
          },
        ],
      },
    ];
  }
  getTheme() {
    for (let theme of this.themeList) {
      if (theme[this.theme]) {
        return theme[this.theme];
      } else {
        continue;
      }
    }
  }
  totalThemes() {
    return ["dark", "light"];
  }
}
