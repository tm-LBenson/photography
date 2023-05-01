// Get all favorite icons
let favoriteIcons = document.querySelectorAll('.favorite-icon');

// Initialize icons based on localStorage
favoriteIcons.forEach(function (icon) {
  // Get the image id from the icon's data attribute
  let imgId = icon.getAttribute('data-img-id');

  if (localStorage.getItem(imgId)) {
    // If this image id is in localStorage, set it to liked
    icon.setAttribute('data-icon', 'mdi:cards-heart');
  } else {
    // If this image id is not in localStorage, set it to not liked
    icon.setAttribute('data-icon', 'mdi:cards-heart-outline');
  }

  // Reload Iconify icons
  Iconify.scan();
});

// Get all image containers
let imgContainers = document.querySelectorAll('.img-container');

// Add event listener to each container
imgContainers.forEach(function (container) {
  container.addEventListener('click', function (e) {
    // Check if the clicked element is an icon
    let targetElement = e.target;

    let icon = targetElement.closest('.favorite-icon');
    if (icon) {
      // Get the image id from the icon's data attribute
      let imgId = icon.getAttribute('data-img-id');

      // Update the localStorage
      if (localStorage.getItem(imgId)) {
        // If this image id is already in localStorage, remove it
        localStorage.removeItem(imgId);

        // Update icon
        icon.setAttribute('data-icon', 'mdi:cards-heart-outline');
      } else {
        // If this image id is not in localStorage, add it
        localStorage.setItem(imgId, true);

        // Update icon
        icon.setAttribute('data-icon', 'mdi:cards-heart');
      }

      // Reload Iconify icons
      Iconify.scan();
    }
  });
});
