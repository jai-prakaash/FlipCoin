
function flipCoin() {

    const nom =  Math.random();
    console.log(nom);
    console.log(Math.round(nom));
    
    let flip='';
    if (Math.round(nom) === 0){flip = 'Heads'; } else {
            flip= 'Tails';
        }
        return flip;
    };
    
    console.log(flipCoin());
    
    
    
    
    function result(player){
        const flip = flipCoin();
        let resultmessage='';
        
    
        if (player === flip){
            resultmessage =`
            computer chose ${flip} you chose ${player} 
            You win `;
        } else {
            resultmessage = `computer chose ${flip} you chose ${player} You lose`;
        }
        document.querySelector('.result').innerText =  resultmessage; 
    
        console.log(flipCoin());
    
        console.log(resultmessage);
        
    }
    
    