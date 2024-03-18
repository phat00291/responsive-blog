
function openNav() {
    document.getElementById("MSMsidepanel").style.width = "250px";
}
function closeNav() {
    document.getElementById("MSMsidepanel").style.width = "0";
    
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}