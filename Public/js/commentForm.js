let comments = [];

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("comment-submit");
    const commentList = document.getElementById("comment-list");

    button.addEventListener("click", async function(e) {
        e.preventDefault();
        const form = document.getElementById("comment-form");
        const status = document.getElementById("comment-form-status");

        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch("/submit-comment", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const res = await response.json();
                status.innerHTML = `<p>Awe, thanks ${data.name}! </p>`;             
            } else {
                status.innerHTML = `<p>Mailing Systems are backed up. Try again in 3-5 business minutes. </p>`; 
            }
        }catch (err) {
            console.error(err);
            status.innerHTML = `<p>Our Messenger pigeons are on strike. Please try again later. </p>`; 
        }
        comments.push(data);
        return comments;
    });

    async function loadComments() {
        try{
            const res = await fetch("/comments");
            comments = await res.json();

            console.log("Comments: ", comments);
            commentList.innerHTML = ""; // Clear before loading

            if (comments.length === 0) {
                commentList.innerHTML = `<p class="comment">Leave a note, find a note.</p>`;
            } else {

                commentList.innerHTML = comments.map(comment => `
                    <h3 class="comment">
                        ${comment.message}
                        </h3>
                        <br>
                        <p class="signed"> 
                        - ${comment.name}
                        </p>
                        <hr>
                `).join('');
            }
        } catch (err) {
            commentList.innerHTML = `<p>My enemies have won! They have stolen all my notes. </p>`
        }
    };

    loadComments();
    document.getElementById('comment-XCls').onclick = () => {
        document.getElementById("comment-form").reset();
    };
});