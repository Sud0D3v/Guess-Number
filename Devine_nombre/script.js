const clavier = document.querySelector(".mainContainer_clavier");
const ecran = document.querySelector(".mainContainer_ecranDigit");
const touches = document.querySelectorAll(".mainContainer_touche");
const toucheEnter = document.querySelector("#toucheEntrer");
let saisie = "";
let chiffreAdeviner ="";
let tentative=0



                                                            // FONCTIONS //

function effacerSaisie(){
  saisie=""
  ecran.textContent="";
}

function tirageAuSort(){

const indexAleatoire = Math.floor(Math.random()*999);
chiffreAdeviner = [indexAleatoire];
console.log("chiffre tiré au sort: "+chiffreAdeviner);

}

function score(){
let score = document.querySelector(".mainContainer_consigne");
score.textContent = "Nombre de tentative: "+tentative;
}

function Vérification(){

if (saisie > chiffreAdeviner){
  ecran.textContent = "Moins"
  setTimeout(() => {
  ecran.textContent=""
}, 500);
saisie=""
tentative += 1
score();
}
else if (saisie < chiffreAdeviner){
  ecran.textContent = "Plus"
  setTimeout(() => {
  ecran.textContent=""
}, 500);
saisie=""
tentative += 1
score();
}

else{
  ecran.textContent = "Gagné"
    setTimeout(() => {
  window.location.reload();
}, 1000);

}


}

                                                            // DEBUT DE PARTIE//

// creation des touches

touches.forEach((touche, index) => {
  touche.dataset.valeur = index;
});

tirageAuSort();

                                                            // FONCTIONNALITES//

// Ecoute de l'évenement clic hors touche entrée
clavier.addEventListener("click", (event) => {
  const touche = event.target.closest(".mainContainer_touche");
  if (!touche) return;
  if (saisie.length >= 3) return;

  saisie += touche.dataset.valeur;
  ecran.textContent = saisie;
});


// Ecoute de l'événement clic sur touche Entrée

toucheEnter.addEventListener("click", () => {
  console.log("Nombre validé :", Number(saisie));
  Vérification();
});

// Ecoute de l'événement clic sur touche Effacer

toucheEffacer.addEventListener("click", () => {
effacerSaisie();
});


