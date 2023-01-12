const btn = document.getElementById("myBtn");
const degrees = document.getElementById("input");
const state = document.getElementById("inputState");
let result = document.getElementById("resultmsg");
let span = document.getElementById("empty");  

btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(state.value);
  if (!degrees.value) {
    span.innerHTML = "Enter value for conversion";
    setTimeout(()=>{span.innerHTML = "";}, 2000);
  } else if (state.value == "fahrenheit" && degrees.value != "") {
    result.innerHTML = (parseFloat(degrees.value) * 9) / 5 + 32 + "°F";
    setTimeout(()=>{result.innerHTML = "";}, 4000);
  } else if (state.value == "celsius" && degrees.value != "") {
    result.innerHTML = parseFloat(degrees.value) + "°C";
    setTimeout(()=>{result.innerHTML = "";}, 4000);
  } else if (state.value == "kelvin" && degrees.value != "") {
    result.innerHTML = parseFloat(degrees.value) + 273.15 + " K";
    setTimeout(()=>{result.innerHTML = "";}, 4000);
  }
});
