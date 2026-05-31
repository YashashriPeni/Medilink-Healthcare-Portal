document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('newCaseForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);

        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const description = formData.get('description');

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Description:', description);

        // Perform form submission actions here, e.g., sending data to a server

        alert('Your case has been submitted!');
        
        form.reset(); // Clear the form after submission
    });
});
