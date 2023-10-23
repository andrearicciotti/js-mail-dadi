// RACCOLTA DATI
const mailChecked = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];

const sendBtn = document.getElementById("login-btn");

sendBtn.addEventListener("click", function () {
    const userMail = document.getElementById("mail").value;
    // console.log(userMail);

    // LOGICA DEL PROGRAMMA
    let access = false

    for (let i = 0; i < mailChecked.length; i++) {
        curMail = mailChecked[i];

        if (curMail === userMail) {
            // console.log(curMail);
            access = true;            
        }
                
    }

  
    // OUTPUT MESSAGGIO
    if (access) {
        const logOk = "Login effettuato con successo";
        const rowElem = document.getElementById("row");
        

        const successMsg = document.createElement("div");
        successMsg.classList.add("col-12");
        successMsg.innerHTML = logOk;
        console.log(successMsg);

        rowElem.append(successMsg);
        console.log(rowElem);

        setTimeout(function() {
            location.reload();
        }, 1500);

    } else {
        logFail = "Login fallito"
        const rowElem = document.getElementById("row");
        

        const failMsg = document.createElement("div");
        failMsg.classList.add("col-12");
        failMsg.innerHTML = logFail;
        console.log(failMsg);

        rowElem.append(failMsg);
        console.log(rowElem);

        setTimeout(function() {
            location.reload();
        }, 1500);
    }

    
})





