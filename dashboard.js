// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value;

    // Make an API request to search
    fetch(`/api/search?query=${encodeURIComponent(searchTerm)}`)
        .then(response => response.json())
        .then(data => {
            const resultsContainer = document.getElementById('searchResults');
            resultsContainer.innerHTML = '';

            // Display search results
            data.results.forEach(result => {
                const item = document.createElement('div');
                item.className = 'search-result-item';
                item.textContent = result.name; // Adjust this to match your data structure
                resultsContainer.appendChild(item);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

const express = require('express');
const app = express();

const sampleData = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Cherry' },
    { name: 'Date' },
    { name: 'Elderberry' }
];

app.get('/api/search', (req, res) => {
    const query = req.query.query.toLowerCase();
    const results = sampleData.filter(item => item.name.toLowerCase().includes(query));
    res.json({ results });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


