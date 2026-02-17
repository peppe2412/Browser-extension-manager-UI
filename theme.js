const buttonTheme = document.querySelector("#button-theme");
const sunIcon = document.querySelector("#sun-icon");
const moonIcon = document.querySelector("#moon-icon");
let isClicked = true;

// local storage
let storage = localStorage.getItem("theme");

if(storage === "light"){
    setPropertyLightTheme()
    viewMoon()
}

if(storage === "dark"){
    setPropertyDarkTheme()
    viewSun()
}

buttonTheme.addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  if (isClicked) {
    setPropertyLightTheme();
    viewMoon();
  } else {
    localStorage.setItem("theme", "dark");
    setPropertyDarkTheme();
    viewSun();
  }

  isClicked = !isClicked;
});

function setPropertyLightTheme() {
  localStorage.setItem("theme", "light");
  document.documentElement.style.setProperty("--color-main", "rgb(7, 47, 120)");
  document.documentElement.style.setProperty("--bg-main", "hsl(240, 5%, 91%)");
  document.documentElement.style.setProperty(
    "--background",
    "hsl(231, 64%, 90%)",
  );
  document.documentElement.style.setProperty(
    "--buttons-colors",
    "hsl(240, 5%, 91%)",
  );
  document.documentElement.style.setProperty(
    "--hover-color",
    "hsla(230, 12%, 62%, 0.11)",
  );
  document.documentElement.style.setProperty("--color-scrollbar", "rgb(248, 105, 44)")
}

function setPropertyDarkTheme() {
  localStorage.setItem("theme", "dark");
  document.documentElement.style.setProperty(
    "--color-main",
    "rgb(232, 232, 232)",
  );
  document.documentElement.style.setProperty("--bg-main", "hsl(229, 58%, 26%)");
  document.documentElement.style.setProperty(
    "--background",
    `linear-gradient(
    to bottom,
    hsl(223, 93%, 11%),
    hsl(228, 95%, 16%)
  )`,
  );
  document.documentElement.style.setProperty(
    "--buttons-colors",
    "hsl(229, 52%, 38%)",
  );
  document.documentElement.style.setProperty(
    "--hover-color",
    "hsl(228, 27%, 46%)",
  );
  document.documentElement.style.setProperty("--color-scrollbar", "rgb(119, 151, 232)")
}

function viewMoon() {
  sunIcon.classList.add("display-none");
  moonIcon.classList.remove("display-none");
}

function viewSun() {
  sunIcon.classList.remove("display-none");
  moonIcon.classList.add("display-none");
}
