
// Array/list of characters to randomly pick out
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Grab Element ID's with DOM
let pwBox1 = document.getElementById("password1")
let pwBox2 = document.getElementById("password2")


// Combines & Generates random characters
function generatePassword(pwLength) {
    pwBox1.textContent = ""
    pwBox2.textContent = ""
    
    for (i = 1; i < pwLength; i++) {
        pwBox1.textContent += generateRandomChar()
        pwBox2.textContent += generateRandomChar()
    }
}

// Generate a random character from our Character array list
function generateRandomChar(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
    
    
}

