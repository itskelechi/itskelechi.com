function toggleDropdown() {
  document.getElementById("drop-menu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click',  function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementById("dropdown-menu");
    if (dropdowns.classList.contains('show')) {
        dropdowns.classList.remove('show');
    }
  }

  if (!event.target.matches('.popbtn')) {
    let popup = document.getElementById("popup-window");
    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
    }
  }
});