import './nav.css'

export const navbar = () => 
    `<nav id="navbar">
          <ul>
            <li>
              <img src="./icons/pinterest-logo.png" class="logo" alt="pinterest logo">
            </li>
            <li>
              <button type="button" class="select-button home" value="#">Inicio</button>
            </li>
            <li>
              <button type="button" class="select-button" value="#">Crear</button>
            </li>  
            <li>
              <button type="button" class="search-button" value="#">
                <img src="./icons/search-icon.png" class="button-icon" alt="search icon">
              </button>
            </li>
            <li>
              <form id="search-form">
                <input type="text" id="search" placeholder="Search..." />
              </form>  
            </li>  
              <div class="icons">
                <li>
                  <button type="button" value="#">
                    <img src="./icons/notification-icon.png" class="button-icon" alt="notification icon">
                  </button>
                </li> 
                <li>
                  <button type="button" value="#">
                    <img src="./icons/dm-icon.png" class="button-icon" alt="direct messages icon">
                  </button>
                </li>  
                <li>
                  <button type="button" value="#">
                    <img src="./icons/profile-icon.png" class="button-icon" alt="profile icon">
                  </button>
                </li>  
              </div>
          </ul>
        </nav>`;


 