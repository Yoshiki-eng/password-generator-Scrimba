const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById('password1-el')
let password2El = document.getElementById('password2-el')

function generatePassword(){
    let length = characters.length;
    let password_1 = []
    let password_2 = []
    
    for(let i = 0; i < 15; i++){
        let randomIndex1 = Math.floor(Math.random() * length)
        password_1.push(characters[randomIndex1])
        
        let randomIndex2 = Math.floor(Math.random() * length)
        password_2.push(characters[randomIndex2])
    }
    
    password1El.textContent = password_1.join('')
    password2El.textContent = password_2.join('')
}



