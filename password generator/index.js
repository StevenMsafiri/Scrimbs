const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passOne = ""
let passTwo = ""
let passLength = 15


function generate()
{
    for(i = 0; i < characters.length; i++)
{
    if(passOne.length < 15)
    {
       passOne += characters[Math.floor(Math.random()*characters.length)]  
       passTwo += characters[Math.floor(Math.random()*characters.length)]
    }
    
}

document.getElementById("first-el").value = passOne
document.getElementById("second-el").value = passTwo
}