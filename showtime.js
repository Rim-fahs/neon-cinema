
function openPopup(event) {
    event.preventDefault(); 
    document.getElementById("thankYouPopup").style.display = "flex";

    // Reset the form inputs
    document.getElementById("booknow-form").reset();
}

function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
}
