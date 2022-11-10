// drag and drop functions
function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  console.log("drag event");
  event.dataTransfer.setData("draggedElement", event.target.id);
  event.dataTransfer.setData("trashType", trashItems.get(event.target.id));
}

function drop(event) {
  console.log("drop event");
  event.preventDefault();
  var draggedElementId = event.dataTransfer.getData("draggedElement");
  var trashType = event.dataTransfer.getData("trashType");
  event.target.appendChild(document.getElementById(draggedElementId));
  if (trashType === "organic" && event.target.id === "greenOrganic") {
    incrementScore();
    return;
  }
  if (trashType === "recycling" && event.target.id === "blueRecycling") {
    incrementScore();
    return;
  }
  if (trashType === "landfill" && event.target.id === "redLandfill") {
    incrementScore();
    return;
  }
  if (trashType !== "recycling" && event.target.id === "blueRecycling") {
    decrementScore();
    shakeBin();
    return;
  }
  if (trashType !== "organic" && event.target.id === "greenOrganic") {
    decrementScore();
    shakeBin();
  }
}

// Shake logic
function shakeBin() {
  var binToShake =  event.target.id;
  document.getElementById(binToShake).className="shake";
  setTimeout(function() {
    document.getElementById(binToShake).className="";
  }, 820);
}


// score logic
var score = 0;

function getScore() {
  document.getElementById("score").innerHTML = score;
}

function incrementScore() {
  score = score + 1;
  getScore();
}

function decrementScore() {
    score = score - 1;
    getScore();
}

// trash map
const trashItems = new Map([
  ["bananaPeel", "organic"],
  ["aluminiumTin", "recycling"],
  ["chopsticks", "landfill"],
  ["plasticBottle", "recycling"],
  ["appleCore", "organic"],
  ["teabag", "organic"],
  ["cardboard", "recycling"],
  ["sandwich", "organic"],
  ["takeawayCup", "landfill"],
  ["wetBottle", "landfill"],
  ["dirtyBox", "landfill"],
  ["paperTowel", "landfill"],
]);
