let button = document.getElementById("submitBtn");
button.addEventListener("mouseenter", function () {
    button.style.backgroundColor = "#E67700";
    button.style.color = "#0083B3";
})
button.addEventListener("mouseleave", function () {
    button.style.backgroundColor = "#FF8401";
    button.style.color = "#043238"
})



function getConfPass() {
    const confPass = document.getElementById("conf_pass").value;
    const pass = document.getElementById("pass").value;
    const passInputs = document.getElementsByClassName("passwordInput");
    if (pass == confPass) {
        passInputs[0].setCustomValidity("");
        passInputs[1].setCustomValidity("");
    }
    else if (pass !== confPass) {
        passInputs[0].setCustomValidity("Invalid field.");
        passInputs[1].setCustomValidity("Invalid field.")
    }
}



