function goster() {
  document.getElementById("soz").innerText = "Bugün gülümsemek için bir neden bul!";
}
function cevir() {
  const canvas = document.getElementById("cark");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(200, 200, 150, 0, 2 * Math.PI);
  ctx.fillStyle = "hsl(" + Math.floor(Math.random() * 360) + ", 80%, 60%)";
  ctx.fill();
  ctx.stroke();
}
