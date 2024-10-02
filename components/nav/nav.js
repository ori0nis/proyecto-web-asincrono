import './nav.css'

export const navbar = () => 
    `<nav id="navbar">
          <ul>
            <li>
              <img src="./icons/pinterest-logo.png" class="logo" alt="pinterest logo">
            </li>
            <li>
              <button type="button" class="select-button home">Home</button>
            </li>
            <li>
              <button type="button" class="select-button create">Create</button>
            </li>  
            <li>
              <form id="search-form">
                <input type="text" id="search" placeholder="Search..." />
              </form>  
            </li>  
              <div class="icons">
                <li>
                  <button type="button">
                    <img src="./icons/notification-icon.png" class="button-icon" alt="notification icon">
                  </button>
                </li> 
                <li>
                  <button type="button">
                    <img src="./icons/dm-icon.png" class="button-icon" alt="direct messages icon">
                  </button>
                </li>  
                <li>
                  <button type="button">
                    <img src="./icons/profile-icon.png" class="button-icon" alt="profile icon">
                  </button>
                </li>  
              </div>
          </ul>
        </nav>`;


 