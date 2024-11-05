document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Prepare the login data
    const loginData = {
        username: username,
        password: password,
    };

    try {
        // Send a POST request to the AaPI
        const response = await fetch("http://neverdies.nont123.nl/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.json();

        if (response.ok) {
            // Successful login, redirect to a blank page or another page
            // You can replace with another URL as needed
            window.location.href = "blank-page.html"; // Replace with the desired page after login
        } else {
            // Handle failed login
            alert("Login failed: " + data.message);
        }
    } catch (error) {
        // Handle network errors
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});
