
// Load all themes to select
chrome.storage.sync.get(null, function(storage) {
    // Selected first
    var node = document.createElement("option");
    node.value = storage.selected;
    node.innerHTML = storage.selected;
    document.getElementById("select").appendChild(node);
    delete storage.themes[storage.selected];
    // 
    for (let theme of Object.keys(storage.themes))
    {
        var node = document.createElement("option");
        node.value = theme;
        node.innerHTML = theme;
        document.getElementById("select").appendChild(node);
    }
});



// Set selected data
document.getElementById("apply").onclick = function(){ chrome.storage.sync.set({"selected": document.getElementById("select").value}) };


document.getElementById("defaultStyles").onclick = function(){ 

    var defaultThemes = {
        "Neon": ["url", "chrome-extension://ohjopohbgabgilbajjjlgnpkbcgnjflb/css/neon.css"],
        "AIS Default": ["text", ""]
    }

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
            chrome.storage.sync.set({"themes": themes, "selected": "Neon"});
            clearInterval(checkerInterval);
        }
    }, 1);
};
