function sendToWhatsApp() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  var plan = document.getElementById("plan").value;

  // 🔹 Send data to Google Sheet
  fetch("https://script.google.com/macros/s/AKfycbxIgv4y6NZBItcS7EC-yurdGQSL5LSNOek_OEytJ7RH7EGySvzHa8wvCqh4s99eHvbs/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      mobile: mobile,
      plan: plan
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log("Saved to sheet:", data);
  })
  .catch(error => {
    console.error("Sheet error:", error);
  });

  // 🔹 Open WhatsApp
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
fetch("https://script.google.com/macros/s/AKfycbxB3vp06Fe1g7WGqgBw1EmoHhdxzaiD5D_hdfxyct70zamo4MY18ADAcm66fETnYvBiHQ/exec")
  .then(res => res.json())
  .then(data => {
    var html = "";
    data.forEach(row => {
      html += `
        <div class="menu-card">
          <h3>${row.day}</h3>
          <p>${row.item1} • ${row.item2} • ${row.item3}</p>
        </div>
      `;
    });
    document.getElementById("menu-container").innerHTML = html;
  })
  .catch(() => {
    document.getElementById("menu-container").innerText = "Menu unavailable";
  });
