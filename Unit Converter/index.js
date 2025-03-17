/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length")
let massEl = document.getElementById("mass")
let volumeEl = document.getElementById("volume")


convertBtn.addEventListener("click", function()
{
   let conversions = [length(), volume(), mass()]
   for(let i = 0; i < conversions.length; i++)
   {
    result = conversions[i]
    if(conversions[i] == length())
    {
        lengthEl.innerHTML += result
    }else if(conversions[i] == volume()){
        volumeEl.innerHTML += result
    }else{
        massEl.innerHTML += result
    }
   }
})

function length()
{
    output = ``
    const feetToMeters = (Number(inputEl.value) / 3.281).toFixed(3)
    const meterToFeets = (Number(inputEl.value) * 3.281).toFixed(3)
    
    output += `<p>${inputEl.value} meters = ${meterToFeets} feet | ${inputEl.value} feet = ${feetToMeters} meters</p>`
    
    return output
}

function volume()
{
    output = ``
    const gallonsToliters = (Number(inputEl.value) / 0.264).toFixed(3)
    const litersToGallons = (Number(inputEl.value) * 0.264).toFixed(3)
    
    output += `<p>${inputEl.value} liters = ${litersToGallons} gallons | ${inputEl.value} gallons = ${gallonsToliters} liters</p>`
    
    return output
}

function mass()
{
    output = ``
    const poundsToKg = (Number(inputEl.value) / 2.204).toFixed(3)
    const kgToPounds = (Number(inputEl.value) * 2.204).toFixed(3)
    
    output += `<p>${inputEl.value} kilograms = ${kgToPounds} pounds | ${inputEl.value} pounds = ${poundsToKg} kilograms</p>`
    
    return output
}
