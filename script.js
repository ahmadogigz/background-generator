var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById('gradient');

function colorGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorGradient);	// we can add oninput = "colorGradient()" in the html input tag
color2.addEventListener("input", colorGradient);	// we just have to comment the color1 and color2 addEventListener and it still works

