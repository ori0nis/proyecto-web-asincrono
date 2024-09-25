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
              <input type="search" id="search" placeholder="Search...">
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

        const selectButtons = document.querySelectorAll(".select-button");

const clickEffect = () => {
    selectButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("clicked");
        });
    });
};

    clickEffect()