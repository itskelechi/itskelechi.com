const form = document.getElementById("my-form");
const reply = document.getElementById("my-form-status");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const FormData = new FormData(form);
    const urlEncodedData = new URLSearchParams();
    FormData.forEach((value, key) => {
        urlEncodedData.append(key, value);
    });
    fetch(form.action, {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: urlEncodedData
    }).then(response =>{
        if (response.status === 200){
            form.reset();
            reply.style.display = "block";
        } else{
            alert("Oops! There was a problem submitting your form. Please try again")
        }
    }).catch(err =>{
        console.err('Error: ', err);
        alert("Thanks for your message! We'll talk soon. xoxo K")
    });
    
});
  