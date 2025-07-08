const sliderContainer = document.querySelector("section:nth-of-type(2)");
const div = document.createElement("div");
div.style.display = 'flex';
div.style.overflowX = 'auto';
div.style.gap = '10px';
for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/300/200?random=${i}`;
    img.style.borderRadius = "10px";
    div.appendChild(img);
}
sliderContainer.appendChild(div);