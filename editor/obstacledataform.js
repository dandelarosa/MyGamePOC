function createObstacleDataForm() {
  var obstacleDataTextField = document.createElement('input');
  obstacleDataTextField.id = 'obstacleData.data';
  obstacleDataTextField.type = 'text';
  var obstacleDataDiv = document.getElementById('obstacleData');
  obstacleDataDiv.appendChild(obstacleDataTextField);
}
