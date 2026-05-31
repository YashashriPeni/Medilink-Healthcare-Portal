const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.getElementById('create-account-button').addEventListener('click', function() {
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform form validation
    if (name === '') {
        alert('Please enter your name');
        return;
    }
    if (email === '') {
        alert('Please enter your email');
        return;
    }
    if (password === '') {
        alert('Please enter your password');
        return;
    }

    // You can add more detailed form validation here if needed

    // Simulate form submission (you would typically send this data to a server here)
    alert('Account created successfully!\nName: ' + name + '\nEmail: ' + email);

    // Redirect to another page
    window.location.href = 'index.html'; // Change 'index.html' to your desired page
});
