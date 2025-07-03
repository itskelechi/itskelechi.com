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

  if (!event.target.matches('.dropUpbtn')) {
    let dropUp = document.getElementById("dropUp-window");
    if (dropUp.classList.contains("show")) {
      dropUp.classList.remove("show");
    }
  }
});