chrome.storage.local.get(null, function(storage) {
    var node = document.createElement("style");
    node.id = "BetterAIS";
    node.innerHTML = storage.themes[storage.selected];
    document.head.appendChild(node);
});


chrome.storage.onChanged.addListener(function(changes, namespace) {
    chrome.storage.local.get(null, function(storage) {
        var node = document.getElementById("BetterAIS");
        node.innerHTML = storage.themes[storage.selected];
    });
});