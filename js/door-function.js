'use strict'

var doorSensor = require('./door-sensor')


function toggleDoor(doorName, targetState) {
	var oppositeState = (targetState === "Open") ? "Open" : "Closed"
	document.querySelector(`#${doorName}${targetState}`).style.display = "block";
	document.querySelector(`#${doorName}${oppositeState}`).style.display = "none";
}

function actionDoor(door, doorTargetState) {
        let targetDoor = doors[door]


      // call as soon as page loads
      updateData()

      // and every 5 seconds after
      setInterval(updateData, 500);

function updateData() {
  $.get('/sensor/doors')
    .done(function(doorstats) {
      Object.entries(doorstats).forEach(function([whichDoor, status]) {
        var doorState = (status) ? 'open' : 'closed'
        toggleDoor("frontDoor", "Open")
      })
    })
    .catch(function(err) {
      alert('An Error Occured: ' + err.message)
    });
}
