var color = $('#colorPicker').val();
var height, width;
// Select color input
$('#colorPicker').on("change", function(){
  color = $(this).val();
  console.log("Color changed to: "+ color);
});


// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(e){
  // Select size input
  height = $('#input_height').val();
  width = $('#input_width').val();
  makeGrid();
  console.log("Color: "+color+", Height: "+height+", Width: "+width);
  e.preventDefault();
});
function makeGrid() {
// First emty grid, if any
$('#pixel_canvas').empty();
var row = 1;
var rowString = "";
//Draw grid with given height and width
  while (row <= height) {
    rowString += "<tr>";
    for (var i = 1; i <= width; i++) {
      rowString += "<td></td>";
    }
    rowString += "</tr>";
    row ++;
  }
  $('#pixel_canvas').append(rowString);
}
//Color clicked cells
$('#pixel_canvas').on('click','td', function(){
  $(this).css("background-color", color);
});
