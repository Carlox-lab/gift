// Elements
const envelope = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const secondLetterContainer = document.getElementById("second-letter-container");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const nextBtn = document.querySelector(".next-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const amochisImg = document.getElementById("amochis-img");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const nextButtonContainer = document.getElementById("next-button-container");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letterContainer.style.display = "flex";

    setTimeout(() => {
        letterContainer.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn grow
let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "¿Viste? soy tuyo para siempre";
    catImg.src = "cat_dance.gif";

    // Añadir clase final a la ventana de la carta
    letterContainer.querySelector(".letter-window").classList.add("final");

    // Ocultar los botones de Sí/No
    buttons.style.display = "none";

    // Mostrar el texto de amor y el contenedor del botón Next
    finalText.style.display = "block";
    nextButtonContainer.style.display = "flex";
});

// NEXT button is clicked (Aparece la segunda pantalla)
nextBtn.addEventListener("click", () => {
    // Ocultar la primera pantalla
    letterContainer.style.display = "none";
    amochisImg.src = "amochis.gif";
    // Mostrar la segunda pantalla de la carta
    secondLetterContainer.style.display = "flex";

    setTimeout(() => {
        secondLetterContainer.querySelector(".letter-window").classList.add("open");
    }, 50);
});