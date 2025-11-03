/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/

// We should grab the value in the input. Done 
// Addeventlistener to Convert button. Don
// Set the text value in the relevant p to grabbed value converted

const unitEl = document.getElementById("unit-el")
const btnEl = document.getElementById("btn-el")
const volumeEl = document.getElementById("volume-el")
const lengthEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")



btnEl.addEventListener("click", function() {
  let inputValue = Number(unitEl.value)
  
  lengthEl.textContent = `${inputValue} meter = ${(inputValue * 3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.281).toFixed(3)} meter`

  volumeEl.textContent = `${inputValue} liters = ${(inputValue * 0.264).toFixed(3)} gallon | ${inputValue} gallon = ${(inputValue / 0.264).toFixed(3)} liters`
  
  massEl.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.204).toFixed(3)} kilos`
})
