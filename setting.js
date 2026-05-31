
document.getElementById('changePasswordButton').addEventListener('click', function() {
    const newPassword = document.getElementById('changePassword').value;

    // Validate the password
    if (newPassword.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    // Make an API request to change the password
    fetch('/api/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Password changed successfully!');
        } else {
            alert('Error changing password: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while changing the password.');
    });
});

