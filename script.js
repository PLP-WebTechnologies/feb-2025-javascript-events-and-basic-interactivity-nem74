// Button click event
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    button.textContent = "You clicked me!";
    button.style.backgroundColor = "green";
});

// Hover effect
const hoverElement = document.getElementById("hoverElement");
hoverElement.addEventListener("mouseover", function() {
    hoverElement.style.backgroundColor = "orange";
});
hoverElement.addEventListener("mouseout", function() {
    hoverElement.style.backgroundColor = "lightblue";
});

// Image gallery (auto change image every 2 seconds)
let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-img");

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = (i === index) ? "block" : "none";
    });
}

setInterval(function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}, 2000);

// Tabs functionality
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        const targetContent = document.querySelector(this.dataset.target);
        document.querySelectorAll(".tab-content").forEach(content => content.style.display = "none");
        targetContent.style.display = "block";
    });
});

// Form validation
const form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // Check if all required fields are filled
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("All fields are required!");
        event.preventDefault();
    }

    // Email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    // Password length check
    if (passwordInput.value.length < 8) {
        alert("Password must be at least 8 characters long.");
        event.preventDefault();
    }
});

// Real-time feedback for password strength
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", function() {
    const feedback = document.getElementById("passwordFeedback");
    if (this.value.length < 8) {
        feedback.textContent = "Password is too short.";
    } else {
        feedback.textContent = "Password is strong.";
    }
});
