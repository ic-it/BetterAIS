const defaultThemes = {
  "Nord": { type: "url", value: `chrome-extension://${chrome.runtime.id}/min/nord.min.css` },
  "Neon": { type: "url", value: `chrome-extension://${chrome.runtime.id}/min/neon.min.css` },
  "Dark": { type: "url", value: `chrome-extension://${chrome.runtime.id}/min/dark.min.css` },
  "Incognito": { type: "url", value: `chrome-extension://${chrome.runtime.id}/min/incognito.min.css` },
  "AIS Default": { type: "text", value: "" }
}

chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === "install") {
    const themes = await Promise.all(
      Object.entries(defaultThemes).map(async ([themeName, {type, value}]) => {
        let themeContent = value;
        if (type === "url") {
          const resp = await fetch(value);
          themeContent = await resp.text();
        }
        return [themeName, themeContent];
      })
    ).then(entries => Object.fromEntries(entries));

    chrome.storage.local.set({ "themes": themes, "selected": "Nord" });
  }
});
