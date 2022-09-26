let originalInput = document.querySelector("#original");
let shiftInput = document.querySelector("#shift");
let encryptedIput = document.querySelector("#encrypted");


let originalMessage = originalInput.ariaValueMax;

originalInput.addEventListener("input", characterEntered, false)
shiftInput.addEventListener("input", numberEntered, false);

function characterEntered(e){
    originalMessage = e.target.value;
    originalMessage = originalMessage.toLowerCase();
    originalMessage.replace(/[^a-z]/, '');

    e.target.value = originalMessage;
    
startEncryption();
}

function numberEnteres(e){
    startEncryption();
}

function startEncryption(){
   let encryptedMessage = "";
   let shift = shiftInput.value ? Number(shiftInput.value) : 0;
   console.log(shift);

   for (letter of originalMessage){
    encryptedMessage += shiftLetter(letter, shift);
   }
   console.log(encryptedMessage);
   encryptedIput.value = encryptedMessage;
}


startEncryption();

function shiftLetter(letter, shift){
    newLetter = "";
    let letterCode = letter.charCodeAt(0);
    let newLetterCode = letterCode + (shift % 26);
    
    if(newLetterCode < 97){
        newLetterCode += 26;

    }
    else if(newLetterCode > 122){
        newLetterCode -= 26;
    }
    newLetter = String.fromCharCode(newLetterCode);
    return newLetter;
}


    // function encrypt (text,s){
    //     let result = ""
    //     for (i=0; i<text.length; i++)
    //     {
    //         let char = text[i];
    //         if (char.toUpperCase(text[i]))
    //         {
    //             let ch = string.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
    //             result += ch;
    //         }
    //         else
    //         {
    //             let ch = string.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
    //             result += ch;
    //         }
    //     }
    //     return result;
    // }


