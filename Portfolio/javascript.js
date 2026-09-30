const randomColorButton = document.querySelector("#random-color-button");

randomColorButton.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const rndNumber = Math.random() * 0x1000000;
    const randomColor = Math.floor(rndNumber)
        .toString(16)
        .padStart(6, "0");

	document.body.style.backgroundColor = `#${randomColor}`;
}