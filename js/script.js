var unName = document.getElementById("univerzita");
unName.innerText = "Akademický Multi Operačný Globálny Univerzitaky System";


let imgs = document.getElementsByTagName("img");
for (let i = 0; i < imgs.length; i++) {
    let e = imgs[i];
    let sysid = e.getAttribute("sysid");
    let src = e.getAttribute("src");
    // console.log(e.getAttribute("sysid"));

    const replaces = {
        "dekorace-crit": `chrome-extension://${chrome.runtime.id}/icons/dekorace_crit.png`,
    };

    e.setAttribute("src", replaces[sysid] || src);
    e.setAttribute("style", "max-width: 64px");
}
