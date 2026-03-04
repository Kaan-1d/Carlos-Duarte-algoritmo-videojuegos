const videojuegos = [
    { nombre: "The Witcher 3", score: 0 },
    { nombre: "Elden Ring", score: 0 },
    { nombre: "Fortnite", score: 0 },
    { nombre: "Minecraft", score: 0 },
    { nombre: "Call of Duty", score: 0 },
    { nombre: "GTA V", score: 0 },
    { nombre: "Zelda: Breath of the Wild", score: 0 },
    { nombre: "FIFA 24", score: 0 },
    { nombre: "League of Legends", score: 0 },
    { nombre: "Red Dead Redemption 2", score: 0 }
];

let opcionA, opcionB;

function seleccionarOpciones() {
    const indexA = Math.floor(Math.random() * videojuegos.length);
    let indexB = Math.floor(Math.random() * videojuegos.length);

    while (indexA === indexB) {
        indexB = Math.floor(Math.random() * videojuegos.length);
    }

    opcionA = videojuegos[indexA];
    opcionB = videojuegos[indexB];

    document.getElementById("optionA").innerText = opcionA.nombre;
    document.getElementById("optionB").innerText = opcionB.nombre;
}

function votar(opcion) {
    opcion.score += 1;
    actualizarRanking();
    seleccionarOpciones();
}

function actualizarRanking() {
    const ranking = document.getElementById("ranking");
    ranking.innerHTML = "";

    const ordenados = [...videojuegos].sort((a, b) => b.score - a.score);

    ordenados.forEach(juego => {
        const li = document.createElement("li");
        li.textContent = `${juego.nombre} - ${juego.score} puntos`;
        ranking.appendChild(li);
    });
}

document.getElementById("optionA").addEventListener("click", () => votar(opcionA));
document.getElementById("optionB").addEventListener("click", () => votar(opcionB));

seleccionarOpciones();
actualizarRanking();
