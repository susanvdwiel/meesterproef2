//Een variable die de alle buttons aanroept
var deButton = document.querySelector(".raceStarten");

var bootBlauw = document.querySelector("img.wedstrijd_bootblauw");
var bootRood = document.querySelector("img.wedstrijd_bootrood");

deButton.addEventListener("click", gaanMetDieBoten);

function gaanMetDieBoten() {
    bootBlauw.classList.add("ikGa");
    bootRood.classList.add("ikGa");
}



var deButtonRijst = document.querySelector(".rijstballen");

var rijstBal = document.querySelector(".rijstbal");

deButtonRijst.addEventListener("click", gooiDeRijstbal);

function gooiDeRijstbal() {
    rijstBal.classList.add("gooien");
}



var deButtonKleuren = document.querySelector(".kleuroog");

var kleurOog = document.querySelector(".verven");

deButtonKleuren.addEventListener("click", kleurHetOog);

function kleurHetOog() {
    kleurOog.classList.add("inkleuren");
}














// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

