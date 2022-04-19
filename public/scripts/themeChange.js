var dark = false;
export default function () {
  if (!dark) {
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
