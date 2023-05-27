export const getRandomItem = (array) => {
  const itemIndex = Math.floor(Math.random() * array.length);
  return array[itemIndex];
};

export const setDarkMode = (isDarkMode = true) => {
  if (typeof isDarkMode === 'string') {
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