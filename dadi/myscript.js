const dadoComp = [];

const dadoUser = parseInt(prompt("Scegli un Numero da 1 a 6")); 

dadoComp.push(Math.floor(Math.random()*5+1)); //contenuto Array 

for(i=1; i<=dadoUser; i++){ 

    if(dadoUser > 6){ 

        console.log("ERRORE");

    }else if(dadoUser < dadoComp){

        console.log("Vince il Computer!" + dadoComp);
    
    }else if (dadoUser > dadoComp){

        console.log("Vince L'utente!" + dadoComp);

    }else{

        dadoUser == dadoComp;
        console.log("Pareggio");
    }
    
}