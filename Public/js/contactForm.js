document.addEventListener("DOMContentLoaded", function(){
    const reply = document.getElementById("contact-form-status");
    const required = document.getElementById("required");
    const button = document.getElementById("contact-submit")

    button.addEventListener("click", async function(e) {
        
        e.preventDefault();
        const form = document.getElementById("contact-form");

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

        if(!data){
            required.innerText = "All fields are required"
        }

        try{
            const res = await fetch("/projects/contact/send-message", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data),
            });

            const result = await res.json();
            if(res.ok){
                reply.innerHTML= `<p>💌Message delivered💌,</p> <p>${data.name}!</p>  </p><p> ~ xoxo K.</p>`;
            } else {
                reply.innerHTML = `<p>There is a problem with our pigeon courier: </p> <p> ${result.error} </p`;
            }
        } catch (e){
            reply.innerText= "Uh Oh. Bad gateways and crowded internet highways afoot. Please try again later.";
            console.error(e)
        }        
    });

    document.getElementById('XCls').onclick = () => {
        document.getElementById('contact-form').reset();
    };

});