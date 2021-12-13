const archivio = ["lorenzo@gmail.com, lorenzo@hotmail.it, lorenzo@yahoo.it"];
let userMail = prompt("Inserisci il tuo indirizzo Mail.");
let mailPresente = false;

if(mailPresente==true){
    console.log("Benvenuto Lorenzo, puoi accedere");

}else{ 

    console.log("Utente non autorizzato");

}

for(i=0; i < archivio.length; i++){
    
    if(userMail == archivio[i]){

        mailPresente=true;
    
    }
}

