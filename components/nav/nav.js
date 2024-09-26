import './nav.css'

export const navbar = () => 
    `<nav id="navbar">
          <ul>
            <li>
              <img src="./icons/pinterest-logo.png" class="logo" alt="pinterest logo">
            </li>
            <li>
              <button type="button" class="select-button" value="#">Inicio</button>
            </li>
            <li>
              <button type="button" class="select-button" value="#">Crear</button>
            </li>  
            <li>
              <form id="search-form">
                <input type="search" id="search" placeholder="Search..." />
              </form>  
            </li>  
            <li>
              <button type="button" value="#">
                <img src="./icons/notification-icon.png" class="button-logo" alt="notification icon">
              </button>
            </li> 
            <li>
              <button type="button" value="#">
                <img src="./icons/dm-icon.png" class="button-logo" alt="direct messages icon">
              </button>
            </li>  
            <li>
              <button type="button" value="#">
                <img src="./icons/profile-icon.png" class="button-logo" alt="profile icon">
              </button>
            </li>    
          </ul>
        </nav>`;

export const inputEventListener = () => {
      
  const input = document.querySelector("#search");

    if (input) {
      input.addEventListener("input", () => {
          const userInput = input.value;
          console.log(userInput);
      });
    } else {
      console.error("Search input not found");
    };
}
        

/* const selectButtons = document.querySelectorAll(".select-button");

const clickEffect = () => {
    selectButtons.forEach(button => {
      button.addEventListener("click", () => {
          button.classList.toggle("clicked");
      });
  });
}
        
clickEffect(); */


 