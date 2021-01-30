const urls = ["https://", "http://", "www.", ".com"];

const verifySearch = (value) => {
  document.querySelector("#input").value = "";
  let command = functions.getCommand(value);

  let condition = value.indexOf("!") != -1 && value.indexOf('"') != -1;
  let url = functions.findUrl(value, urls);
  if (condition && !url) {
    functions.execCommand(command, value);
  } else if (url) {
    if (value.indexOf("https://") != -1 || value.indexOf("http://") != -1) {
      window.open(value, "_self");
    } else {
      window.open('https://'+value, '_self')
    }
    return false;
  } else {
    return true;
  }
};

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); //PREVENT THE ACTION ENTER IN INPUT
    let searchValue = element.value;
    if (verifySearch(searchValue)) {
      if (searchValue.length >= 1) {
        window.location.href = `https://www.google.com/search?source=hp&ei=7cQVYO-II-TB5OUPm_GM8Ac&q=${searchValue}&oq=${searchValue}`; //SEARCH IN GOOLGE WITH THIS URL
      }
    }
  }
});
