var defaultThemes = {
    "Nord": ["url", `chrome-extension://${chrome.runtime.id}/css/nord.css`],
    "Neon": ["url", `chrome-extension://${chrome.runtime.id}/css/neon.css`],
    "Dark": ["url", `chrome-extension://${chrome.runtime.id}/css/dark.css`],
    "Incognito": ["url", `chrome-extension://${chrome.runtime.id}/css/incognito.css`],
    "AIS Default": ["text", ""]
}

chrome.runtime.onInstalled.addListener(function(details)
{
	if (details.reason == "install")
    {
        var themes = {};
        for (let themeName of Object.keys(defaultThemes))
        {
            if (defaultThemes[themeName][0] == "url")
            {
                fetch(defaultThemes[themeName][1])
                .then((resp) => {
                        return resp.text()
                    })
                .then((data) => {
                    themes[themeName] = data;
                })
            }
            if (defaultThemes[themeName][0] == "text")
            {
                themes[themeName] = defaultThemes[themeName][1];
            }
        }

        var checkerInterval = setInterval(() => {
            if (Object.keys(themes).length == Object.keys(defaultThemes).length)
            {
                chrome.storage.sync.set({"themes": themes, "selected": "Nord"});
                clearInterval(checkerInterval);
            }
        }, 1);
	}
});
