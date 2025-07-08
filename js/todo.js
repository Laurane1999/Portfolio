const todoSection = document.querySelector("section:nth-of-type(5)");
const input = document.createElement("input");
const btn = document.createElement("button");
const ul = document.createElement("ul");
btn.textContent = "Ajouter";
todoSection.appendChild(input);
todoSection.appendChild(btn);
todoSection.appendChild(ul);
btn.onclick = () => {
    if (input.value.trim() === "") return;
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => { li.remove(); sauvegarder(); };
    ul.appendChild(li);
    input.value = "";
    sauvegarder();
};
function sauvegarder() {
    const taches = [];
    ul.querySelectorAll("li").forEach(li => taches.push(li.textContent));
    localStorage.setItem("todo", JSON.stringify(taches));
}
function charger() {
    const taches = JSON.parse(localStorage.getItem("todo") || "[]");
    taches.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        li.onclick = () => { li.remove(); sauvegarder(); };
        ul.appendChild(li);
    });
}
charger();