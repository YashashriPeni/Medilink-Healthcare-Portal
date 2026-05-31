
document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value;
    if (query) {
        // Assuming you want to redirect to a search results page
        window.location.href = `/search?query=${encodeURIComponent(query)}`;
    } else {
        alert('Please enter a search term.');
    }
});

