// LOGICA DEL PROGRAMMA

const rolldice = document.getElementById("roll");
rolldice.addEventListener("click", function () {

    const randomNrUser = Math.floor(Math.random() * (7 - 1) + 1);
    const randomNrCom = Math.floor(Math.random() * (7 - 1) + 1);
    console.log(randomNrUser, randomNrCom);

    if (randomNrUser === randomNrCom) {

        console.log("E' un pareggio!");

    } else if (randomNrUser > randomNrCom) {

        console.log("Hai vinto!");
    } else {

        console.log("Hai perso!");
    }
})

