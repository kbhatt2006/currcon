/*Temprature conversion */

function CelsiusConverter(){
document.converter.fahrenheit.value = (document.converter.celsius.value * 9 / 5) + 32
document.converter.kelvin.value = document.converter.celsius.value * 1 + 273.15
}
function FahrenheitConverter(){
document.converter.celsius.value = (document.converter.fahrenheit.value - 32) * 5 / 9
document.converter.kelvin.value=((document.converter.fahrenheit.value - 32)*5/9)+273.15
}
function KelvinConverter(){
document.converter.celsius.value = document.converter.kelvin.value - 273.15
document.converter.fahrenheit.value=((document.converter.kelvin.value - 273.15)*9/5)+32
}


/*Currency Conversion*/

function euroConverter(){
document.con.dollar.value = document.con.euro.value * 1.08

}
function dollarConverter(){
document.con.euro.value = document.con.dollar.value * 0.93
}

/*Unit conversion*/

function cmConverter(){
document.conv.inch.value = document.conv.cm.value / 2.54
document.conv.feet.value = document.conv.cm.value / 30.48
}
function inchConverter(){
document.conv.cm.value = document.conv.inch.value * 2.54
document.conv.feet.value = document.conv.inch.value / 12
}
function feetConverter(){
document.conv.cm.value = document.conv.feet.value * 30.48
document.conv.inch.value = document.conv.feet.value * 12
}