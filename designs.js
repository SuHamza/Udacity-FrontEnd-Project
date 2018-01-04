var color = $('#colorPicker').val();
var height, width;
// Select color input
$('#colorPicker').on("change", function(){
  color = $(this).val();
  console.log("Color changed to: "+ color);
});
// // Select size input
// $('#input_height').change(function(){
//
// });
// $('#input_width').change(function(){
//   width = $(this).val();
// });
// When size is submitted by the user, call makeGrid()
// $("input[type='submit']").on
$('#sizePicker').submit(function(e){
  height = $('#input_height').val();
  width = $('#input_width').val();
  makeGrid();
  console.log("Color: "+color+", Height: "+height+", Width: "+width);
  e.preventDefault();
});
function makeGrid() {
// Your code goes here!
$('#pixel_canvas').empty();
var row = 1;
var rowString = "";
  while (row <= height) {
    rowString += "<tr>";
    for (var i = 1; i <= width; i++) {
      rowString += "<td></td>";
    }
    rowString += "</tr>";
    row ++;
  }
  console.log(rowString);
  $('#pixel_canvas').append(rowString);
}

$('#pixel_canvas').on('click','td', function(){
  $(this).css("background-color", color);
});
