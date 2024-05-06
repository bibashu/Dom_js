var inputOne = document.querySelector(".f1");
// console.log(inputOne);
var inputTwo = document.querySelector(".f2");
var btnCalculer = document.querySelector(".calculer");
var btnReset = document.querySelector(".reset");
var resultat = document.querySelector(".f3");
var operateur = document.querySelector(".op");
// console.log(operateur);

function effacerChamp() {
  inputOne.value = "";
  inputTwo.value = "";
  resultat.value = "";
  operateur.value = "";

  inputOne.focus();
}

btnReset.addEventListener("click", effacerChamp);

btnCalculer.addEventListener("click", calculerSomme);

function calculerSomme() {
  if (inputOne.value === "" || inputTwo.value === "") {
    alert("remplissez les champs");
    inputOne.focus();

    return;
  }

  let inputOneNumber = parseInt(inputOne.value);
  let inputTwoNumber = parseInt(inputTwo.value);
  let choix = operateur.value;
  console.log(choix);
  switch (choix) {
    case "+":
      var sum = inputOneNumber + inputTwoNumber;

      break;
    case "-":
      var sum = inputOneNumber - inputTwoNumber;

      break;
    case "*":
      var sum = inputOneNumber * inputTwoNumber;

      break;
    case "/":
      var sum = inputOneNumber / inputTwoNumber;
      if (inputTwoNumber === 0) {
        alert("Erreur: La division par zero n'existe pas");
        effacer();
      }
      break;
    default:
      alert(
        "choix invalide: Veuillez choisir entre l'addition(+),soustraction(-), multiplication(*), la division(/)"
      );
      effacer();
      break;
  }

  resultat.value = sum;
}
