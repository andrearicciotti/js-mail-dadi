// LOGICA DEL PROGRAMMA

const rolldice = document.getElementById("roll");
rolldice.addEventListener("click", function () {

    const randomNrUser = Math.floor(Math.random() * (7 - 1) + 1);
    const randomNrCom = Math.floor(Math.random() * (7 - 1) + 1);
    // console.log(randomNrUser, randomNrCom);

    let result

    const rowElem = document.querySelector(".row");

    const userNumber = document.createElement("div");
    userNumber.classList.add("col-3","my-2");
    userNumber.classList.add(`ms_dice-${randomNrUser}`);
    rowElem.append(userNumber);

    const comNumber = document.createElement("div");
    comNumber.classList.add("col-3","my-2");
    comNumber.classList.add(`ms_dice-${randomNrCom}`);
    rowElem.append(comNumber);
    

    // OUTPUT MESSAGGIO
    if (randomNrUser === randomNrCom) {

        result = "E' un pareggio!";

        const tieMsg = document.createElement("div");
        tieMsg.classList.add("col-12");
        tieMsg.innerHTML = result;
        // console.log(tieMsg);

        rowElem.append(tieMsg);

        setTimeout(function() {
            location.reload();
        }, 2500);

    } else if (randomNrUser > randomNrCom) {

        result = "Hai vinto!";

        const winMsg = document.createElement("div");
        winMsg.classList.add("col-12");
        winMsg.innerHTML = result;
        // console.log(winMsg);

        rowElem.append(winMsg);

        setTimeout(function() {
            location.reload();
        }, 2500);

    } else {

        result = "Hai perso!";

        const loseMsg = document.createElement("div");
        loseMsg.classList.add("col-12");
        loseMsg.innerHTML = result;
        // console.log(loseMsg);

        rowElem.append(loseMsg);

        setTimeout(function() {
            location.reload();
        }, 1500);

    }
    
})

