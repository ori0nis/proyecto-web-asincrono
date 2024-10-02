import './modal.css'

const suggestedSearchWords = [
    "nature",
    "landscape",
    "animals",
    "travel",
    "food",
    "people",
    "city",
    "sunset",
    "ocean",
    "mountains",
    "flowers",
    "art",
    "vintage",
    "abstract",
    "portrait",
    "beach",
    "forest",
    "sky",
    "love",
    "fitness",
    "fashion",
    "architecture",
    "texture",
    "water",
    "black and white",
    "autumn",
    "winter",
    "summer",
    "spring",
    "night",
    "sunrise",
    "children",
    "pets",
    "wildlife",
    "cars",
    "technology",
    "music",
    "party",
    "vintage",
    "nightlife",
    "events",
    "wedding",
    "minimalist",
    "urban",
    "rural",
    "sports",
    "celebration",
    "landmarks",
    "culture",
    "history",
    "home",
    "business"
];

const firstSuggestedWord = Math.floor(Math.random() * suggestedSearchWords.length);
const secondSuggestedWord = Math.floor(Math.random() * suggestedSearchWords.length);
const thirdSuggestedWord = Math.floor(Math.random() * suggestedSearchWords.length);

export const modal = () => {
    return `<div id="modal">
        <h2>Did you mean...?</h1>
            <button type="button" class="suggested-button">${suggestedSearchWords[firstSuggestedWord]}</button>
            <button type="button" class="suggested-button">${suggestedSearchWords[secondSuggestedWord]}</button>
            <button type="button" class="suggested-button">${suggestedSearchWords[thirdSuggestedWord]}</button>
    </div>`
}


