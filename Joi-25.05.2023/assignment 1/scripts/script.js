let button = document.createElement("button");
let buttonText = document.createTextNode("Click Me");
button.addEventListener('click', () => {
    console.log('button clicked!');
});

button.appendChild(buttonText);
document.body.appendChild(button);