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
        alert("Order kamu berhasil, tim kami akan menghubungimu melalui nomor whatsapp untuk konfirmasi order ^-^")
      }
    )
    .catch((err) => console.log(err))
}

console.log("bismillah");