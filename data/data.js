import { navbar, inputEventListener } from "../components/nav/nav.js"
import { galleryGrid } from "../components/gallery/gallery.js";

const header = document.querySelector("header");
header.innerHTML = navbar();

const gallery = document.querySelector("#image-grid");

//const searchForm = document.querySelector("#search-form");
//const input = document.querySelector("#search");

    export const fetchPhotos = async (userInput) => {
        const accessKey = 'PExlSM_mtUUZj1H9nmIaD5tFsHTiRfJkEYR8EO8rr4Y';

        try {

            const res = await fetch(`https://api.unsplash.com/search/photos?query=${userInput}&client_id=${accessKey}`);
            const allPhotos = await res.json();
            console.log(allPhotos);
            const photosArray = allPhotos.results;

            gallery.innerHTML = '';

            photosArray.forEach(photo => {
                const photoHTML = galleryGrid(photo);
                gallery.insertAdjacentHTML('beforeend', photoHTML);
            });
         } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    fetchPhotos("trees")
    inputEventListener()

    /* searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userInput = submit.value;
        console.log(userInput);
        if (userInput) {
            fetchPhotos(userInput);
        } else {
            console.log("Please enter a search term.");
        }
    }); */
   /* 
     input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const userInput = submit.value;
            console.log(userInput);
            if (userInput) {
                fetchPhotos(userInput);
            } else {
                console.log("Please enter a search term.");
            }
        }
    });  */ 

    
