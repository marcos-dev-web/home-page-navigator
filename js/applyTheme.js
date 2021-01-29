var THEMENAME = localStorage.getItem("theme")  // IF CASE NOT FOUND THE KEY "theme" in locasStorage, The THEME DEFAULT IS "dark"
  ? localStorage.getItem("theme")
  : "dark";



functions.changeTheme(); // CALL FUNCTION TO RUN CODE FOR THE FIRST TIME
