function togglePopup(){
  document.getElementById("popup-menu").classList.toggle("show");

}
  window.addEventListener("click", function(e){
    if (!e.target.matches('.pop-btn')){
      let popups = document.getElementById("popup-window");
     
        if (popups.classList.contains("show")){
          popups.classList.remove('show');        
        }
    
    }
  });  