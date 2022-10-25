alert("THIS IS CUSTOM1")
let plausibleCode = document.createElement("script");
plausibleCodesetAttribute("defer");
plausibleCode.setAttribute("data-domain","ockedapi.local");
plausibleCode.setAttribute("src", "http://localhost:8000/js/plausible.js");
document.body.appendChild(plausibleCode);
alert("ok")