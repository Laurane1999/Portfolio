const citationSection = document.querySelector("section:nth-of-type(4)");
const bouton = document.createElement("button");
const citationTexte = document.createElement("p");
citationSection.appendChild(bouton);
citationSection.appendChild(citationTexte);
bouton.textContent = "Nouvelle citation";
bouton.onclick = async () => {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    citationTexte.textContent = `"${data.quote}" — ${data.author}`;
};
bouton.click();