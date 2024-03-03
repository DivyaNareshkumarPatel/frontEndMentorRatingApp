const ratingElements = document.querySelectorAll('.select');
const button = document.getElementById("button");
let selectedRating = null;
ratingElements.forEach(element => {
    element.addEventListener('click', () => {
        ratingElements.forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
        selectedRating = parseInt(element.textContent);
        console.log('Selected rating:', selectedRating);
        button.classList.remove("block");
        button.classList.add("pointer");
        console.log(element)
    });
});
if (selectedRating == null) {
    button.classList.add("block");
}
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const num = document.getElementById("num");
function clickIt() {
    if (selectedRating != null) {
        num.innerHTML = selectedRating
        c1.style.display = "none";
        c2.style.display = "flex";
    }
}