// I think this block is not needed anymore

/*
const unName = document.getElementById("univerzita");
unName.innerText = "Akademický Multi Operačný Globálny Univerzitaky System";
*/

const images = document.getElementsByTagName("img");

Array.from(images).forEach((img) => {
    const sysid = img.getAttribute("sysid");
    const src = img.getAttribute("src");

    const replaces = {
        "dekorace-crit": `chrome-extension://${chrome.runtime.id}/icons/dekorace_crit.png`,
        "base-home": `chrome-extension://${chrome.runtime.id}/icons/home.svg`
    };

    img.setAttribute("src", replaces[sysid] || src);
    img.setAttribute("style", "max-width: 64px");
});

