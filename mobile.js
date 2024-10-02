const doc = document;
const menuToggle = doc.querySelector(".menu");
const overlay = doc.querySelector(".overlay");

// Initialize menu state
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen; // Toggle the menu state
  overlay.classList.toggle("overlay--active", menuOpen); // Open/close menu
  menuToggle.textContent = menuOpen ? "Close" : "Menu"; // Update button text
});

function startDrag(e) {
  // determine event object
  if (!e) {
    var e = window.event;
  }
          if(e.preventDefault) e.preventDefault();

  // IE uses srcElement, others use target
  var targ = e.target ? e.target : e.srcElement;

  if (targ.className != 'dragme') {return};
  // calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;

  // assign default values for top and left properties
  if(!targ.style.left) { targ.style.left='0px'};
  if (!targ.style.top) { targ.style.top='0px'};

  // calculate integer values for top and left 
  // properties
  coordX = parseInt(targ.style.left);
  coordY = parseInt(targ.style.top);
  drag = true;

  // move div element
    document.onmousemove=dragDiv;
          return false;
  
}
function dragDiv(e) {
  if (!drag) {return};
  if (!e) { var e= window.event};
  var targ=e.target?e.target:e.srcElement;
  // move div element
  targ.style.left=coordX+e.clientX-offsetX+'px';
  targ.style.top=coordY+e.clientY-offsetY+'px';
  return false;
}
function stopDrag() {
  drag=false;
}
window.onload = function() {
  document.onmousedown = startDrag;
  document.onmouseup = stopDrag;
}