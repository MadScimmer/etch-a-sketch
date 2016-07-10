var grid = 16;
var margin = grid * 2;
var border = margin;

$(document).ready(function() {

  $("#container").css({
    "width" : "642px",
    "height" : "642px",
  });

  for(var i = 1; i <= 256; i++){
    $("#container").append('<div id="' + i + '"></div>');
  }

  $("#container").children("div").css({
    "margin" : "1px",
    "border" : "1px solid black",
    "width" : "36px",
    "height" : "36px",
  });

  $("#container").children("div").mouseenter(function(){
    $(this).css("backgroundColor", "#183f74");
  });

  $("#container").children("div").click(function(){
    $(this).css("backgroundColor", "white");
  });

 $("button").click(function(){
    grid = prompt('Type a number and I will create a grid for you!\n(Entering \
16 will create a "16 x 16" grid)')
    createGrid(grid);
  });

});

function createGrid(numGrid) {
  var w = 576 / numGrid;
  var h = w;

  $("#container").empty();

  for(var i = 1; i <= Math.pow(numGrid, 2); i++){
    $("#container").append('<div id="' + i + '"></div>');
  }

  $("#container").children("div").css({
    "margin" : "1px",
    "border" : "1px solid black",
    "width" : w,
    "height" : h,
  });

  $("#container").children("div").mouseenter(function(){
    $(this).css("backgroundColor", "#183f74");
  });
};
