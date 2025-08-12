let isValid = false
document.addEventListener("DOMContentLoaded", function(){
    const reply = document.getElementById("contact-form-status");
    const required = document.getElementById("required");
    const button = document.getElementById("contact-submit");
    const nameReq = document.getElementById("name-required");
    const emailReq = document.getElementById("email-required");
    const subjectReq = document.getElementById("subject-required");
    const messReq = document.getElementById("message-required");


    button.addEventListener("click", async function(e) {
        
        e.preventDefault();
        const form = document.getElementById("contact-form");

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

        console.log(data);

        const {name, email, subject, message, honey} = data;

        if(honey && honey.trim().length > 0){
            reply.innerText = "Yikes! NO Robots allowed!";
            return;
        }

        const isNameValid = validateName(name);
        const isEmailValid = validateEmail(email);
        const isSubjectValid = validateSubject(subject);
        const isMessageValid = validateMessage(message);

        const validForm = isNameValid && isEmailValid && isSubjectValid && isMessageValid;

        
        console.log("Is Form Valid? ", validForm);

        //VALIDATION
        if(!validForm){
            required.innerText = "All fields are required to send an email."
            
        } else {     

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
        }
    });

    document.getElementById('contact-XCls').onclick = () => {
        document.getElementById('contact-form').reset();

        const responses = [reply, nameReq, emailReq, subjectReq, messReq];
        responses.forEach(response => response.innerText = '');
    };

    function validateName (name){
        const nameRegex = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/;
        isValid = nameRegex.test(name)

        nameReq.innerText = name ? (isValid? '' : "That\'s not your name.") : "What's your name again?";

        return isValid;
    };

    function validateEmail (email){
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        isValid = emailRegex.test(email)

        emailReq.innerText = email ? (isValid? '' : "No Mail for you") : "How does one send an email without a valid email address?";

        return isValid;
    }

      function validateSubject(subject) {
        const isValid = subject && subject.trim().length > 0;

        subjectReq.innerText = isValid ? "" : "How ominous of you to send a message with no title.";

        return isValid;
    }

    function validateMessage(message) {
        const isValid = message && message.trim().length > 0;

        messReq.innerText = isValid ? "" : "This isn't Gmail. We can’t send an empty message.";

        return isValid;
    }

});