const myForm = document.querySelector("form");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const temprature = parseInt(document.querySelector("#temp").value);
  const result = document.querySelector("#results");
  const button1 = document.querySelector("#btn1");
  const button2 = document.querySelector("#btn2");

  button1.addEventListener("click", (e) => {
    if (temprature === "" || isNaN(temprature)) {
      result.innerHTML = `Please enter Valid Temprature ${temprature}`;
    } else {
      const tempKelvin = temprature + 273.15;
      result.innerHTML = `Temprature in Kelvin ${tempKelvin}`;
    }
  });

  button2.addEventListener("click", (e) => {
    if (temprature === "" || isNaN(temprature)) {
      result.innerHTML = `Please enter Valid Temprature ${temprature}`;
    } else {
      const tempFarhenite = ((temprature*9/5)+32);
      result.innerHTML = `Temprature in Farhenite ${tempFarhenite}`;
    }
  });
});
