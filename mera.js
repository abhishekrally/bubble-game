// Select DOM elements
var bubblesContainer = document.querySelector("#bottom"); // Container for bubbles
var scoreDisplay = document.querySelector("#scoreint"); // Score display
var targetNumberDisplay = document.querySelector("#hitint"); // Target number display
var timerDisplay = document.querySelector("#timer"); // Timer display

var countdown = 60; // Starting time in seconds
var score = 0; // Initial score

// Generate bubbles with random numbers
for (let index = 0; index < 119; index++) {
    let num = Math.floor(Math.random() * 10); // Generate an integer between 0 and 9
    bubblesContainer.innerHTML += `<button id ="bubble">${num}</button>`;
}

// Generate a random target number
targetNumberDisplay.textContent = Math.floor(Math.random() * 10);

// Add event listeners to dynamically created buttons
var buttons = document.querySelectorAll(".bubble");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.textContent === targetNumberDisplay.textContent) {
            score += 10; // Increment score by 10
            scoreDisplay.textContent = score; // Update score display

            // Generate a new target number
            targetNumberDisplay.textContent = Math.floor(Math.random() * 10);
        }
    });
});

// Set the initial timer value
timerDisplay.textContent = countdown;

// Create a countdown timer
var interval = setInterval(function () {
    countdown--; // Decrement the timer
    timerDisplay.textContent = countdown; // Update the displayed value

    if (countdown <= 0) {
        clearInterval(interval); // Stop the timer when it reaches 0
        timerDisplay.textContent = "Time's up!";
        
        // Disable all bubbles
        buttons.forEach(button => button.disabled = true);
    }
}, 1000); // Run every 1000ms (1 second)
