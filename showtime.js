
function openPopup(event) {
    event.preventDefault(); 
    document.getElementById("thankYouPopup").style.display = "flex";
}

function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
}
