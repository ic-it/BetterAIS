chrome.storage.sync.get(null, function(storage) {
    console.log(storage);
    var node = document.createElement("style");
    node.innerHTML = storage.themes[storage.selected];
    document.head.appendChild(node);
});
