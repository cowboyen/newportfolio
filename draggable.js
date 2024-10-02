// Make the GIF draggable
const gif = document.getElementById("draggable-gif");

gif.onmousedown = function(event) {
  // (1) Prepare to move: make gif absolute and move it by the mouse position
  gif.style.position = 'absolute';
  gif.style.zIndex = 1000; // show gif on top of other elements
  document.body.append(gif);

  moveAt(event.pageX, event.pageY);

  // moves the gif at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    gif.style.left = pageX - gif.offsetWidth / 2 + 'px';
    gif.style.top = pageY - gif.offsetHeight / 2 + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) Move the gif on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) Drop the gif, remove unnecessary handlers
  gif.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    gif.onmouseup = null;
  };
};

gif.ondragstart = function() {
  return false;
};