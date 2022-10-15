var slider = document.getElementById("password-length");
var output = document.getElementById("password-length-value");
output.textContent = slider.value;

slider.oninput = function() {
  output.textContent = this.value;
}