import './style.css'
import { navbar } from "./components/nav/nav.js";
import { fetchPhotos, renderPhotos } from './data/data.js';

const header = document.querySelector("header");
header.innerHTML = navbar();

fetchPhotos()
renderPhotos()

const homeButton = document.querySelector(".home")
homeButton.addEventListener("click", () => fetchPhotos("cats"));  
