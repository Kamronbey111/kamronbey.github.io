// script.js

document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.querySelector(".subscribe .btn");
    const emailInput = document.querySelector(".email-input");
    
    subscribeButton.addEventListener("click", function () {
        if (emailInput.value === "") {
            alert("Please enter your email");
        } else {
            alert("Thank you for subscribing!");
            emailInput.value = "";
        }
    });
});