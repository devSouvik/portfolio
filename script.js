function darkTheme(x) {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var y = document.getElementById("dark-name");
  if (y.innerHTML === "Light Theme") {
    y.innerHTML = "Dark Theme";
  } else {
    y.innerHTML = "Light Theme";
  }
  //   x.classList.toggle("location-light");
}
