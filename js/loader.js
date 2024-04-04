chrome.storage.local.get(null, (storage) => {
    const styleNode = document.createElement("style");
    styleNode.id = "BetterAIS";
    styleNode.innerHTML = storage.themes[storage.selected];
    document.head.appendChild(styleNode);
});


chrome.storage.onChanged.addListener(() => {
    chrome.storage.local.get(null, (storage) => {
        const node = document.getElementById("BetterAIS");
        node.innerHTML = storage.themes[storage.selected];
    });
});
