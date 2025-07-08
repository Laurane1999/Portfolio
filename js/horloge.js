const horlogeContainer = document.querySelector("section:nth-of-type(3)");
const h = document.createElement("div");
h.style.fontSize = "2em";
h.style.margin = "20px";
horlogeContainer.appendChild(h);
function tick() {
    h.textContent = new Date().toLocaleTimeString();
}
tick();
setInterval(tick, 1000);