
//Toogle
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const menu = document.querySelector('.menu');

  hamburgerMenu.addEventListener('click', () => {
      menu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
      menu.classList.remove('active');
  });

  document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target) && !closeMenu.contains(event.target)) {
          menu.classList.remove('active');
      }
  });
  const menuItems = document.querySelectorAll('.menu a');

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

});

//Map
document.getElementById("map-button").addEventListener("click", function() {
  window.open("https://earth.google.com/earth/d/1n_9knlUo07DWlakLTz57ABIjivat18L9?usp=sharing","_blank");
});

