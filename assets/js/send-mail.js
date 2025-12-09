document.querySelector(".php-email-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;

  // Hiển thị loading
  form.querySelector(".loading").style.display = "block";
  form.querySelector(".error-message").style.display = "none";
  form.querySelector(".sent-message").style.display = "none";

  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  emailjs.send("service_dc2id1l", "template_stnspod", formData)
    .then(() => {
      form.querySelector(".loading").style.display = "none";
      form.querySelector(".sent-message").style.display = "block";
      form.reset();
    })
    .catch((err) => {
      form.querySelector(".loading").style.display = "none";
      form.querySelector(".error-message").innerHTML = "Error: " + err.text;
      form.querySelector(".error-message").style.display = "block";
    });
});
