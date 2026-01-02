function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var plan = document.getElementById("plan").value;

  fetch("https://script.google.com/macros/s/AKfycbxIgv4y6NZBItcS7EC-yurdGQSL5LSNOek_OEytJ7RH7EGySvzHa8wvCqh4s99eHvbs/exec", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      mobile: mobile,
      plan: plan
    })
  });

  var message =
    "Hi Mess Wala,%0A" +
    "Name: " + name + "%0A" +
    "Mobile: " + mobile + "%0A" +
    "Plan: " + plan;

  window.open(
    "https://wa.me/918855838335?text=" + message,
    "_blank"
  );
}
