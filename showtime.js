function openPopup(event) {
    event.preventDefault();

    var form = document.getElementById("booknow-form");

    if (form.checkValidity()) {
        document.getElementById("thankYouPopup").style.display = "flex";
        form.reset();
    } else {
        form.reportValidity();
    }
}

function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
}