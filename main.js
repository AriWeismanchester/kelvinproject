//Forecast: 293 kelvin
var kelvin = 420

//Temp in Celcius
var celcius = kelvin - 273

//Temp in Fahrenheit
var fahrenheit = Math.floor(celcius * (9 / 5) + 32)

//Changed my earlier code to include this after reviewing. 
//Rounding down the fahrenheit result
//fahrenheit = Math.floor(fahrenheit)

//Creatd a variable that I can log to the console.
var temperature = (`The temperature is ${fahrenheit} degrees Fahrenheit.`)

console.log(temperature)

var newton = Math.floor(celcius * (33 / 100))

//Checking to see if the code works
console.log(kelvin, celcius, fahrenheit, newton)

console.log(`The temperature in Newton is ${newton} degrees`)
