export { addRevealButton };
const addBookModal = document.getElementById("addBookModal");
function addRevealButton(revealButton) {
    revealButton.addEventListener("click", () => {
        console.log("working");
        addBookModal.classList.toggle("show");
    });
}
