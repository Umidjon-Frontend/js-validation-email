window.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.querySelector(".input"),
        iconBox = document.querySelector(".input-box img"),
        validText = document.querySelector(".valid-text p");
    var re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    inputBox.addEventListener("input", () => {
        if (inputBox.value !== "") {
            iconBox.classList.add("show");
            iconBox.setAttribute("src", "img/invalid.png");
            validText.classList.add("invalid");
            validText.innerHTML = "Please Enter Valid Email Address";
            validText.classList.remove("valid");
        }
        if (inputBox.value === "") {
            iconBox.classList.remove("show");
            validText.classList.remove("invalid");
        }
        if (inputBox.value.match(re)) {
            validText.classList.add("valid");
            validText.innerHTML = "Your Email Address is Valid";
            iconBox.classList.add("show");
            iconBox.setAttribute("src", "img/valid.png");
        } else {
            validText.innerHTML = "Please Enter Valid Email Address";
        }
    });
});
