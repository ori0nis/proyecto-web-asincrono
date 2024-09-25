import './style.css'
import { navbar } from "./components/nav/nav.js";

const header = document.querySelector("header");
header.innerHTML = navbar();

const selectButtons = document.querySelectorAll(".select-button");

selectButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.toggle("clicked");
    });
});


// https://unsplash.com/oauth/applications/657640
// https://unsplash.com/documentation#search-photos
// https://unsplash.com/documentation#get-a-random-photo