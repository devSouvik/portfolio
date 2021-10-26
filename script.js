function darkTheme(x) {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var y = document.getElementById("dark-name");
  if (y.innerHTML === "Dark Theme") {
    y.innerHTML = "Light Theme";
  } else {
    y.innerHTML = "Dark Theme";
  }
}
