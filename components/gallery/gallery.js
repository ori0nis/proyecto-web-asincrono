import './gallery.css'


export const galleryGrid = (photo) => `
 <div class="photo">
    <img src="${photo.urls.small}" alt="${photo.alt_description || 'Photo'}">
    <div class="like-icon">
      <img src="./icons/like-icon.png">
    </div>  
  </div>
`

