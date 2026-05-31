document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById('chatBox');
    const messageInput = document.getElementById('messageInput');

    // Function to send a message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        
        if (messageText !== '') {
            // Create a new div element for the message
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', 'user'); // Add appropriate classes
            messageDiv.textContent = messageText; // Set the text content to the input message
            
            // Append the message to the chat box
            chatBox.appendChild(messageDiv);
            
            // Scroll the chat box to the bottom
            chatBox.scrollTop = chatBox.scrollHeight;
            
            // Clear the input field
            messageInput.value = '';
        }
    }

    // Attach the sendMessage function to the button click event
    document.querySelector('button').addEventListener('click', sendMessage);
    
    // Optionally, send a message when pressing Enter key
    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
