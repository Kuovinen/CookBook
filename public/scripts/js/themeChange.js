var dark = false;
export default function () {
  if (!dark) {
    document.querySelector(".themeIcon").src = "images/sun.svg";
    document.querySelector(".themeIcon").style.filter =
      "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)";
    document.documentElement.style.setProperty(
      "--light-color",
      "rgb(160,129,108)"
    );
    document.documentElement.style.setProperty(
      "--dark-color",
      "rgb(232, 222, 209)"
    );
    document.documentElement.style.setProperty(
      "--light-colora",
      "rgb(160,129,108,0.60)"
    );
    document.documentElement.style.setProperty(
      "--dark-colora",
      "rgb(232, 222, 209,0.60)"
    );
    dark = true;
  } else {
    document.querySelector(".themeIcon").src = "images/moon.svg";
    document.querySelector(".themeIcon").style.filter =
      "invert(0%) sepia(85%) saturate(7439%) hue-rotate(294deg) brightness(85%) contrast(113%)";
    document.documentElement.style.setProperty(
      "--light-color",
      "rgb(232, 222, 209)"
    );
    document.documentElement.style.setProperty(
      "--dark-color",
      "rgb(160,129,108)"
    );
    document.documentElement.style.setProperty(
      "--light-colora",
      "rgb(232, 222, 209,0.60)"
    );
    document.documentElement.style.setProperty(
      "--dark-colora",
      "rgb(160,129,108,0.60)"
    );
    dark = false;
  }
}
