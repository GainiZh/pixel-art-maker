// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//set a variable for the canvas, use const instead of a var, as it was said in the style guide; use single-quotes
function makeGrid() {
//create the size of a new table by defining variables
  const height = $('#input_height').val();
  const width = $('#input_width').val();
//create a table
  const canvas = $('#pixel_canvas');
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
    $('#pixel_canvas').empty();
  });
