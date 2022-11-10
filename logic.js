// drag and drop functions
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  console.log("drag event");
  event.dataTransfer.setData("draggedElement", event.target.id);
  event.dataTransfer.setData("trashType", trashItems.get(event.target.id));
  console.log(trashItems.get(event.target.id));
}

function drop(event) {
  console.log("drop event");
  event.preventDefault();
  var draggedElementId = event.dataTransfer.getData("draggedElement");
  var trashType = event.dataTransfer.getData("trashType");
  event.target.appendChild(document.getElementById(draggedElementId));
  if (trashType === "organic" && event.target.id === "greenOrganic") {
    console.log("CORRECT - THIS IS ORGANIC");
    updateScore();
    return;
  }
  if (trashType === "recycling" && event.target.id === "blueRecycling") {
    console.log("CORRECT - THIS IS RECYCLNG");
    updateScore();
    return;
  }
  if (trashType === "landfill" && event.target.id === "redLandfill") {
    console.log("CORRECT - THIS IS LANDFILL");
    updateScore();
    return;
  }
  console.log("Bad guess");
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

// trash map
const trashItems = new Map([
  ["bananaPeel", "organic"],
  ["aluminiumTin", "recycling"],
  ["chopsticks", "landfill"],
  ["plasticBottle", "recycling"],
  ["appleCore", "organic"],

]);
