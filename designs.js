// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//set a variable for the canvas, use const instead of a var, as it was said in the style guide; use single-quotes
const canvas = $('#pixel_canvas');
function makeGrid() {
//create the size of a new table by defining variables
  const height = $('#input_height').val();
  const width = $('#input_width').val();
//set a max. amount of rows and columns in case of higher values
  if(height > 100) {
  height = 100;
  }
  if(width > 100) {
    width = 100;
  }
//delete previous canvas to create a new one
 canvas.empty();
//create a grid using loops
  //create rows
  for(let rows = 0; rows < height; rows++) {
    canvas.append('<tr></tr>');
 //create columns
    for(let columns = 0; columns < width; columns++) {
      canvas.children().last().append('<td></td>');
    }
  }
//select color, create an event listener
  $('td').on('click', function() {
    const color = $('#colorPicker').val();
    $(this).css('background-color', color);
  });
}
//create the canvas by creating an event listener
  $('#submitButton').on('click', function(event) {
    event.preventDefault();
    makeGrid();
  });
 //clear data, i.e. reset button: I created an input type with the reset value in html, then created an event listener
  $('#resetButton').on('click', function(event) {
    canvas.empty();
  });
//clear the color
$("#eraseColor").click(function() {
  $("td").css("background-color", "");
});
