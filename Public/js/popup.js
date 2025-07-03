function togglePopup(){
  document.getElementById("drop-menu").classList.toggle("show");

}
  window.addEventListener("click", function(e){
    if (!e.target.matches('.popbtn')){
      let popups = document.getElementById("popup-window");
     
        if (popups.classList.contains("show")){
          popups.classList.remove('show');        
        }
    
    }
  });  