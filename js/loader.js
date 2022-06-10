chrome.storage.local.get(null, function(storage) {
    var styleNode = document.createElement("style");
    styleNode.id = "BetterAIS";
    styleNode.innerHTML = storage.themes[storage.selected];
    document.head.appendChild(styleNode);


    // var scriptNode = document.createElement("script");
    // scriptNode.setAttribute("src", `chrome-extension://${chrome.runtime.id}/js/script.js`);
    // document.body.appendChild(scriptNode);
});


chrome.storage.onChanged.addListener(function(changes, namespace) {
    chrome.storage.local.get(null, function(storage) {
        var node = document.getElementById("BetterAIS");
        node.innerHTML = storage.themes[storage.selected];
    });
});
