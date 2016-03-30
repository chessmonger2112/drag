    var mouseX;
    var mouseY;
    var mouseDown = false;
    var currJqEl = null;
    var positions = [];
    var jamLeft = (left,jEl) => jEl.css("left",left + "px");
    var jamTop = (top, jEl) => jEl.css("top",top + "px");
    var findPos = (direction, jEl) => jEl.position()[direction];

    function addAttrsAndArrays(index, node)
    {
      // var jamX = findPos("left",$(node));
      // var jamY = findPos("top",$(node));
      var leftMore = 300 * index
      positions.push({jamX: leftMore, jamY: 0});
      jamLeft(leftMore, $(node));
      $(node).data("index", index);
    }

    $(".draggable").each(addAttrsAndArrays);


//problem: second image starts off wrong by 50 px or so in the x direction




    $(document).mouseup(function(event) {
      mouseDown = false;
      console.log("UP!")
    });
    $(document).mousemove(function(event) {
      var newMouseX = event.clientX;
      var newMouseY = event.clientY;

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
        var currentIndex = currJqEl.data("index");
        var currentPosition = positions[currentIndex];
        currentPosition.jamX += deltaX;
        currentPosition.jamY += deltaY;
        var jamX = currentPosition.jamX;
        var jamY = currentPosition.jamY;
        console.log(`jamX: ${jamX}, jamY: ${jamY}`);
        jamLeft(jamX, currJqEl);
        jamTop(jamY, currJqEl);
      }
    });

    $(".draggable").mousedown(function(event) { // lets it know mouse is currently in down state
      console.log("get down");
      currJqEl = $(this);
      mouseX = event.clientX;
      mouseY = event.clientY;
      mouseDown = true;
    });
