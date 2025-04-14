// Create a button and show it in the body
let button = document.createElement("button");
button.textContent = 'Generate Number';
document.body.appendChild(button);

// Track the last used color
let lastColor = null;

button.addEventListener("click", () => {
    let div = document.createElement("div");

    // Generate a random number between 0 and 9
    let randomNumber = Math.floor(Math.random() * 10);
    div.innerHTML = randomNumber;

    // Style the div
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.width = "100px";
    div.style.height = "50px";
    div.style.marginTop = "10px"; // spacing between divs

    // Function to generate a new color different from the last one
    function generateNewColor() {
        let newColor;
        do {
            newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        } while (newColor === lastColor);
        return newColor;
    }

    let newColor = generateNewColor();
    div.style.backgroundColor = newColor;

    // Save this color for next comparison
    lastColor = newColor;

    // Optional: store in localStorage and sessionStorage
    localStorage.setItem("color", newColor);
    sessionStorage.setItem("color", newColor);

    document.body.appendChild(div);
});
