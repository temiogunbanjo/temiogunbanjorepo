export const availableThemes = [
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-5",
  // "theme-4",
];

export const getRandomItem = (array) => {
  const itemIndex = Math.floor(Math.random() * array.length);
  return array[itemIndex];
};

export const getSavedMode = () => {
  return window.sessionStorage.getItem("dark_mode");
};

export const setDarkMode = (isDarkMode = true) => {
  if (typeof isDarkMode === "string") {
    isDarkMode = JSON.parse(isDarkMode);
  }

  let toggleModeButtonIcon = document.querySelector(
    "header .left-elements i.mode-btn"
  );
  if (toggleModeButtonIcon.classList.contains("icofont-sun") === true) {
    toggleModeButtonIcon.classList.replace("icofont-sun", "icofont-moon");
  } else {
    toggleModeButtonIcon.classList.replace("icofont-moon", "icofont-sun");
  }

  document.body.classList.toggle("dark-mode", isDarkMode);
};

export const setTheme = (themeName = availableThemes[0]) => {
  if (!availableThemes.includes(themeName)) {
    themeName = availableThemes[0];
  }
  console.log("setting to " + themeName);
  const isInDarkMode = document.body.classList.contains("dark-mode");
  document.body.className = isInDarkMode
    ? `${themeName} dark-mode`
    : `${themeName}`;
  localStorage.setItem("theme", themeName);
};

export const loadLocalFile = (filePath) => {
  let data = null;

  try {
    data = filePath;
    return data;
  } catch (error) {
    console.error({ error });
    return "";
  }
};
