import './style.css'
import { navbar } from "./components/nav/nav.js";
import { fetchPhotos, renderPhotos, flipPage } from './data/data.js';
import { nextPage } from './components/footer/footer.js';

const header = document.querySelector("header");
header.innerHTML = navbar();

const footer = document.querySelector("footer");
footer.innerHTML = nextPage();

fetchPhotos()
renderPhotos()
flipPage()

const homeButton = document.querySelector(".home")
homeButton.addEventListener("click", () => fetchPhotos("cats"));  
