//  Show error message when input is empty

const nameInput = document.getElementById("inputName");
const nameErrorMsg = document.getElementById("nameErr");
const numInput = document.getElementById("inputNumber");
const numErrorMsg = document.getElementById("numErr");
const addInput = document.getElementById("inputAddress");
const addErrorMsg = document.getElementById("addErr");
const cityInput = document.getElementById("inputCity");
const cityErrorMsg = document.getElementById("cityErr");
const provInput = document.getElementById("inputState");
const provErrorMsg = document.getElementById("provErr");

nameInput.addEventListener("blur", function()  {
  if(nameInput.value.trim() === "") {
    nameErrorMsg.style.display = "block";
  } else {
    nameErrorMsg.style.display = "none";
  }
});

numInput.addEventListener("blur", function () {
  if (numInput.value.trim() === "") {
    numErrorMsg.style.display = "block";
  } else {
    numErrorMsg.style.display = "none";
  }
});

addInput.addEventListener("blur", function () {
  if (addInput.value.trim() === "") {
    addErrorMsg.style.display = "block";
  } else {
    addErrorMsg.style.display = "none";
  }
});

cityInput.addEventListener("blur", function () {
  if (cityInput.value.trim() === "") {
    cityErrorMsg.style.display = "block";
  } else {
    cityErrorMsg.style.display = "none";
  }
});

provInput.addEventListener("blur", function () {
  if (provInput.value.trim() === "") {
    provErrorMsg.style.display = "block";
  } else {
    provErrorMsg.style.display = "none";
  }
});

//  Disabled button when checkbox not clicked
const checkBox = document.getElementById("check");
const buttonSubmit = document.getElementById("submit");

checkBox.addEventListener("click", function(e) {
  const val = e.currentTarget.value;
  buttonSubmit.disabled = false;

  if (val === "") {
    buttonSubmit.disabled = true;
  }
});

const form = document.querySelector('#form-register');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting
  // do something with the form data here
});
function sendEmail() {
  let params = {
    name: document.getElementById("inputName").value,
    number: document.getElementById("inputNumber").value,
    address: document.getElementById("inputAddress").value,
    address2: document.getElementById("inputAddress2").value,
    city: document.getElementById("inputCity").value,
    province: document.getElementById("inputState").value,
    zip: document.getElementById("inputZip").value,
    product: document.getElementById("inputProduct").value,
    size: document.getElementById("inputSize").value,
    color: document.getElementById("inputColor").value,
  }
  let serviceID = "service_qkvvta9";
  let templateID = "template_1zph2i3";

  emailjs.send(serviceID, templateID, params)
    .then(
      (res) => {
        document.getElementById("inputName").value = "";
        document.getElementById("inputNumber").value = "";
        document.getElementById("inputAddress").value,
        document.getElementById("inputAddress2").value = "";
        document.getElementById("inputCity").value = "";
        document.getElementById("inputState").value = "";
        document.getElementById("inputZip").value = "";
        document.getElementById("inputProduct").value = "";
        document.getElementById("inputSize").value = "";
        document.getElementById("inputColor").value = "";
        console.log(res);
      }
    )
    .catch((err) => alert(err))
}
