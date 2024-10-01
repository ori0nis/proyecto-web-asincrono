import './style.css'
import { navbar } from "./components/nav/nav.js";
import { fetchPhotos, renderPhotos } from './data/data.js';

const header = document.querySelector("header");
header.innerHTML = navbar();

fetchPhotos()
renderPhotos()

/* const attachEventListeners = () => {
    const homeButton = document.querySelector(".home");
    if (homeButton) {
        // Use a function reference for the click event
        homeButton.addEventListener("click", () => fetchPhotos("cats"));
    }
};

// Call the function to attach event listeners
attachEventListeners(); */

const homeButton = document.querySelector(".home")
homeButton.addEventListener("click", () => fetchPhotos("cats"));  
