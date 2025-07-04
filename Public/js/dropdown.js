function toggleResumeDropdown() {
  document.getElementById("resume-menu").classList.toggle("show");
}

function toggleStartMenu() {
  document.getElementById("start-menu").classList.toggle("show");
}


// Close the drop-menu if the user clicks outside of it
window.addEventListener('click',  function(event) {
  console.log(event.target.value)
  //Resume dropdown
  if (!event.target.closest('#resume-btn')) {
    let resumeDrop = document.getElementById("resume-menu");
    if (resumeDrop && resumeDrop.classList.contains('show')) {
        resumeDrop.classList.remove('show');
    }
  }

  //Start dropup
  if (!event.target.closest('#start-btn')) {
    let startMenu = document.getElementById("start-menu");
    if (startMenu && startMenu.classList.contains("show")) {
      startMenu.classList.remove("show");
    }
  }
});