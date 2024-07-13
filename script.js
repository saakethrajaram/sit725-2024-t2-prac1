// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Select the button and the paragraph
    const changeTextBtn = document.getElementById("changeTextBtn");
    const dynamicText = document.getElementById("dynamicText");

    // Add an event listener to the button
    changeTextBtn.addEventListener("click", function() {
        // Change the text content of the paragraph
        dynamicText.textContent = "The text has been changed! JavaScript is awesome!";
    });
});
