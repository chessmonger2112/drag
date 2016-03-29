var mouseX;
    var mouseY;
    var jamX = 0;
    var jamY = 0;
    var mouseDown = false;

    function jamLeft(left)
    {
      $("#jam").css("left",left + "px");
    }
    function jamTop(top)
    {
      $("#jam").css("top",top + "px");
    }

    $(document).mouseup(function(event) {
      mouseDown = false;
      console.log("UP!")
    });
    $(document).mousemove(function(event) {
      var newMouseX = event.clientX;
      var newMouseY = event.clientY;
      console.log(`jamX: ${jamX}, jamY: ${jamY}`);

      if (mouseX === undefined)
      {
        mouseX = newMouseX;
        mouseY = newMouseY;
      }
      var deltaX = newMouseX - mouseX;
      var deltaY = newMouseY - mouseY;



      mouseX = newMouseX;
      mouseY = newMouseY;

      if (mouseDown)
      {
        jamX += deltaX;
        jamY += deltaY;
      }
        jamLeft(jamX);
        jamTop(jamY);
    });

    $("#jam").mousedown(function(event) {
      console.log("get down");
      mouseX = event.clientX;
      mouseY = event.clientY;
      mouseDown = true;
    });
