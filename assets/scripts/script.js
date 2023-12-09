document.addEventListener("DOMContentLoaded", function () {
  // listen for the contextmenu event (right-click)
  document.addEventListener("contextmenu", function (event) {
    // block the default context menu
    event.preventDefault();

    // g the context menu element
    let contextMenu = document.getElementById("context");

    // set the position of the context menu based on the mouse click
    contextMenu.style.top = event.pageY + "px";
    contextMenu.style.left = event.pageX + "px";

    // display the context menu
    contextMenu.style.display = "block";
  });

  // close the context menu when clicking outside of it
  document.addEventListener("click", function () {
    let contextMenu = document.getElementById("context");
    contextMenu.style.display = "none";
  });
});
