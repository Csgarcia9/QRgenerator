document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
  
      // vCard versión 3.0 estándar
      const vCard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${apellido};${nombre};;;`,
        `FN:${nombre} ${apellido}`,
        `TEL;TYPE=CELL:${telefono}`,
        `EMAIL:${email}`,
        "END:VCARD"
      ].join("\n");
  
      // Limpiar QR anterior
      document.getElementById("qrcode").innerHTML = "";
  
      // Generar el QR
      new QRCode(document.getElementById("qrcode"), {
        text: vCard,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.M, // Nivel medio para evitar el error de longitud
      });
  
      // Limpiar formulario
      document.getElementById("contactForm").reset();
    });
  });
  