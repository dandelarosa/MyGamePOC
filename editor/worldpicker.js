function createWorldPicker() {
  var worlds = [
    'cameratest',
    'enemytest1',
    'tilesettest',
    'tilesettest2',
    '1-1',
    '1-2',
    '1-3',
    '1-4',
    '2-1',
    '2-2',
    '2-3',
    '2-4',
    '3-1',
    '3-2',
    '3-3',
    '3-4',
    '4-1',
    '4-2',
    '4-3',
    '4-4',
    '5-1',
    '5-2',
    '5-3',
    '5-4',
    '6-1',
    '6-2',
    '6-3',
    '6-4',
    '7-1',
    '7-2',
    '7-3',
    '7-4',
    '8-1',
    '8-2',
    '8-3',
    '8-4',
  ];

  var levelPickerElement = document.getElementById('worldPicker');

  var levelPickerHeader = document.createTextNode('Select a Level: ');
  levelPickerElement.appendChild(levelPickerHeader);

  var levelPickerSelect = document.createElement('select');
  levelPickerSelect.id = 'worldSelect';
  levelPickerSelect.onchange = function() {
    selectWorld();
  };
  worlds.forEach(function(levelId) {
    var option = document.createElement('option');
    option.id = 'select' + levelId;
    option.value = levelId;
    option.appendChild(document.createTextNode('World ' + levelId));
    levelPickerSelect.appendChild(option);
  });
  levelPickerElement.appendChild(levelPickerSelect);
}
