function validateForm() {
    var firstname = document.forms["signup"]["firstname"].value;
    if (firstname == "") {
        alert("Name must be filled out");
        return false;
    }
}