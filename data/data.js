import { navbar } from "../components/nav/nav.js"

    const header = document.querySelector("header");
    header.innerHTML = navbar();

    const submit = document.querySelector("input[type='search']");

    export const fetchPhotos = async (userInput) => {
        const accessKey = 'PExlSM_mtUUZj1H9nmIaD5tFsHTiRfJkEYR8EO8rr4Y';

        try {
            const res = await fetch(`https://api.unsplash.com/search/photos?query=${userInput}&client_id=${accessKey}`);
            const allPhotos = await res.json();
            console.log(allPhotos);
            const photosArray = allPhotos.results;

                for (const photo of photosArray) {
                    const imageGrid = document.querySelector("#image-grid");
                    imageGrid.innerHTML = ''; 
                    const img = document.createElement('img');
                    img.src = photo.urls.small;
                    img.alt = photo.alt_description || "Photo";
                    imageGrid.appendChild(img);
                }
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };
   
    submit.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const userInput = submit.value;
            if (userInput) {
                fetchPhotos(userInput);
            } else {
                console.log("Please enter a search term.");
            }
        }
    });