function search() {
    var query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = "/search?query=" + encodeURIComponent(query);
    } else {
        alert("Please enter a search term.");
    }
}
