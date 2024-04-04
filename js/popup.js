/**
 * Loads all available themes from storage and populates the select dropdown.
 */
function loadThemes() {
  chrome.storage.local.get(null, (storage) => {
    const themeSelect = document.getElementById("select");
    Object.keys(storage.themes).forEach((theme) => {
      const option = document.createElement("option");
      option.value = theme;
      option.innerText = theme;
      themeSelect.appendChild(option);
    });
  });
}

/**
 * Sets the user-selected theme in storage.
 */
function setSelectedTheme() {
  const selectedTheme = document.getElementById("select").value;
  chrome.storage.local.set({ "selected": selectedTheme });
}

/**
 * Resets the theme to a default value.
 * @param {string} defaultTheme - The default theme to reset to.
 */
function resetToDefaultTheme(defaultTheme = "Dark") {
  chrome.storage.local.set({ "selected": defaultTheme });
  document.getElementById("select").value = defaultTheme;
}

document.addEventListener("DOMContentLoaded", loadThemes);
document.getElementById("apply").addEventListener("click", setSelectedTheme);
document.getElementById("defaultStyles").addEventListener("click", () => resetToDefaultTheme());
