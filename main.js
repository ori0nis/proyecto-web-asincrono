import './style.css'
import { navbar } from "./components/nav/nav.js";
import { fetchPhotos } from './data/data.js';

const header = document.querySelector("header");
header.innerHTML = navbar();

fetchPhotos()




// https://unsplash.com/oauth/applications/657640
// https://unsplash.com/documentation#search-photos
// https://unsplash.com/documentation#get-a-random-photo