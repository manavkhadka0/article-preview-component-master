const button = document.querySelector(".share");
const second = document.querySelector(".second");
const shareIcon = document.querySelector(".share-icon");

// Add click event listener on share-icon
button.addEventListener("click", (event) => {
    // Swap between main and second div showing
    second.classList.toggle("hidden");
    shareIcon.classList.toggle("share-icon-active");
    button.classList.toggle("share-active");
});