function togglePopup(){
  document.getElementById("popup-window").classList.toggle("show");
}
  window.onclick = function(e){
    if (!e.target.matches("popbtn")){
      var popups = document.getElementById("popup-window");
      for (let i = 0; i < popups.length; i++){
        let openPopup = popups[i];
        if (openPopup.classList.contains("show")){
          openPopups.classList.remove('show');        
        }
      }
    }
  }  