function loadCountries() {
  const countriesScript = document.createElement("script");
  countriesScript.src = "js/countries.js";
  countriesScript.async = true;
  countriesScript.onload = function () {

    initializeForm();
  };
  document.head.appendChild(countriesScript);
}
function initializeForm() {
  const countrySelect = document.getElementById("country");
  countrySelect.innerHTML = '<option value="" disabled selected>Select your country</option>';
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.code;
    option.textContent = country.name;
    countrySelect.appendChild(option);
  });  
  document.getElementById("registrationForm").addEventListener("input", validateForm);
  document.getElementById("registrationForm").addEventListener("submit", submitForm);
}
function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const termsCheckbox = document.getElementById("termsCheckbox");
  const submitButton = document.getElementById("submitButton");

  const isValid =
    username &&
    password.length >= 12 &&
    confirmPassword === password &&
    termsCheckbox.checked;

  submitButton.disabled = !isValid;
}

function submitForm(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const countrySelect = document.getElementById("country");

  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${countrySelect.value}`;
  welcomeMessage.style.display = "block";
}

document.addEventListener("DOMContentLoaded", loadCountries);
