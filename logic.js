// drag and drop functions
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  console.log("drag event");
  event.dataTransfer.setData("draggedElement", event.target.id);
  event.dataTransfer.setData("trashType", "organic")
}

function drop(event) {
  console.log("drop event");
  event.preventDefault();
  var draggedElementId = event.dataTransfer.getData("draggedElement");
  var trashType =  event.dataTransfer.getData("trashType");
  event.target.appendChild(document.getElementById(draggedElementId));
  if (trashType === "organic" && event.target.id === "greenOrganic") {
    console.log("THIS IS ORGANIC");
    updateScore();
  } else {
    console.log("THIS IS NOT ORGANIC");
  }
}

// score logic
var score = 0;

function getScore() {
  document.getElementById("score").innerHTML = score;
}

function updateScore() {
  score = score + 1;
  getScore();
}

