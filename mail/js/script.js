// RACCOLTA DATI
const mailChecked = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];

const sendBtn = document.getElementById("login-btn");

sendBtn.addEventListener("click", function (event) {
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

    if (access) {
        const logOk = "Login effettuato con successo";
        const rowElem = document.querySelector(".row").innerHTML;
        // console.log(rowElem);

        logElem.classList.add("col-12");
    } else {
        console.warn("Accesso negato!");
    }

})





