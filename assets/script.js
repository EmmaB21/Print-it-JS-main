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

// Récupération des éléments HTML à modifier
let placeImage = document.querySelector(".banner-img")
let placeTagLine = document.querySelector("#banner>p")

// Variable "compteur" pour récupérer les indices tableaux
let i = 0;


// Fonction flèche gauche
const arrowLeft = document.querySelector(".arrow_left")
arrowLeft.addEventListener("click", function () {
	// Décrémentation de l'indice
	i--;
	// Condition de retour à l'autre bout du tableau
	if (i < 0){
		i = slides.length - 1;}
	// Modification du contenu html en fonction de l'indice du tableau slides
	placeImage.src = "./assets/images/slideshow/" + slides[i].image
	placeTagLine.innerHTML = slides[i].tagLine
})

console.log("flèche gauche ok")

// Fonction flèche droite
const arrowRight = document.querySelector(".arrow_right")
arrowRight.addEventListener("click", function () {
	// Incrémentation de l'indice
	i++;
	// Condition de retour à l'autre bout du tableau
	if (i > slides.length - 1){
		i = 0;}
	// Modification du contenu html en fonction de l'indice du tableau slides
	placeImage.src = "./assets/images/slideshow/" + slides[i].image
	placeTagLine.innerHTML = slides[i].tagLine
})

console.log("flèche droite ok")



