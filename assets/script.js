const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let placeImage = document.querySelector(".banner-img")
let placeTagLine = document.querySelector("#banner>p")
let i = 0;



const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", function () {
	i--;
	placeImage.src = "./assets/images/slideshow/" + slides[i].image
	placeTagLine.innerHTML = slides[i].tagLine
})

console.log("flèche gauche ok")

const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", function () {
	i++;
	placeImage.src = "./assets/images/slideshow/" + slides[i].image
	placeTagLine.innerHTML = slides[i].tagLine
})

console.log("flèche droite ok")

