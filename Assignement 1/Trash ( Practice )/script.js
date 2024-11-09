document.getElementById("outerDiv").addEventListener("click", function() {
  console.log("Div clicked");
}, true); // Capture phase

document.getElementById("paragraph").addEventListener("click", function() {
  console.log("Paragraph clicked");
}, true); // Capture phase

document.getElementById("button").addEventListener("click", function() {
  console.log("Button clicked");
}, true); // Capture phase

document.getElementById("outerDiv").addEventListener("click", function() {
  console.log("Div clicked");
}, false); // Bubble phase

document.getElementById("paragraph").addEventListener("click", function() {
  console.log("Paragraph clicked");
}, false); // Bubble phase

document.getElementById("button").addEventListener("click", function() {
  console.log("Button clicked");
}, false); // Bubble phase
