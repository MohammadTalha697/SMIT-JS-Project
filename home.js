let fullName = sessionStorage.getItem("fullName");
document.getElementById("showName").innerText ="Welcome " + fullName+" !" ;
// TOASTIFY
function showToast(message, duration = 3000, position = "top-right", backgroundColor = "#333333") {
      Toastify({
            text: message,
            duration: duration,
            position: position,
            backgroundColor: backgroundColor,
      }).showToast();
}
function success() { showToast("Login Successful!", 2000, "center", "linear-gradient(to right, #00b09b, #96c93d)"); }
// Clear BUTTONS
function clearInput() {
      document.getElementById("inputField").value = null
}
function clearOutput() {
      document.getElementById("outputBox").innerHTML = null
}
// Array Declaration
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]
// PRINT ALL CITIES
function printAllCities() {
      for (i = 0; i < cities.length; i++) {
            let count = i + 1
            document.getElementById("outputBox").innerHTML += count + ") " + cities[i] + "<br/>"
      }
}
// ADD YOUR CITY IN LIST
function addYourCity() {
      var inputCity = inputField.value;
      if (inputCity.length < 3) {

            showToast("Please Enter Correct City Name in Input Value!", 2000, "center", "linear-gradient(to right, #f11523, #7a0b23 )");

            return;
      }
      var firstChar = inputCity.charAt(0)
      var allChar = inputCity.slice(1)
      var cityCapitalized = firstChar.toUpperCase() + allChar.toLowerCase()
      let cityFound = false;
      for (index = 0; index < cities.length; index++) {
            if (cities[index] === cityCapitalized) {
                  cityFound = true;
                  document.getElementById("outputBox").innerHTML = "<h5 class = 'text-danger'>" + cityCapitalized + "</h5> is already in the list."
            }
      }
      if (cityFound === false) {
            cities.push(cityCapitalized);
            document.getElementById("outputBox").innerHTML = "<h5 class = 'text-success'>" + cityCapitalized + "</h5> has been added."
      }


}
// CHECK YOUR CITY
function checkYourCity() {
      var inputCity = inputField.value;
      if (inputCity.length < 3) {
            showToast("Please Enter Correct City Name in Input Value!", 2000, "center", "linear-gradient(to right, #f11523, #7a0b23 )");
            return;
      }
      var firstChar = inputCity.charAt(0)
      var allChar = inputCity.slice(1)
      var cityCapitalized = firstChar.toUpperCase() + allChar.toLowerCase()
      let cityFound = false;
      for (index = 0; index < cities.length; index++) {
            if (cities[index] === cityCapitalized) {
                  cityFound = true;
                  document.getElementById("outputBox").innerHTML = "<h5 class = 'text-success'>" + cityCapitalized + "</h5> is present in the list."
            }
      }
      if (cityFound === false) {
            document.getElementById("outputBox").innerHTML = "<h5 class = 'text-danger'>" + cityCapitalized + "</h5> is not in the list"
      }
}

