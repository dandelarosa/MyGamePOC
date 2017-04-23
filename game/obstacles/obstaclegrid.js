function ObstacleGrid(data, numCols) {
  return {
    draw: draw,
    getData: getData,
    grid: new Grid2D(data, numCols),
    setValueAtColAndRow: setValueAtColAndRow,
  };

  // Querying Data

  function getData() {
    return this.grid.getData();
  }

  // Modifying Data

  function setValueAtColAndRow(value, col, row) {
    this.grid.setValueAtColAndRow(value, col, row);
  }

  // Drawing

  function draw(x, y, width, height, graphics) {
    const obstacleWidth = 16;
    const obstacleHeight = 16;

    var leftMostCol = Math.floor(x / obstacleWidth);
    var topMostRow = Math.floor(y / obstacleHeight);

    var colsThatFitInRect = Math.floor(width / obstacleWidth);
    var rowsThatFitInRect = Math.floor(height / obstacleHeight);

    // Draw a one-cell buffer on each side
    var rightMostCol = leftMostCol + colsThatFitInRect + 2;
    var bottomMostRow = topMostRow + rowsThatFitInRect + 2;

    for (var row = topMostRow; row < bottomMostRow; row++) {
      for (var col = leftMostCol; col < rightMostCol; col++) {
        var obstacleValue = this.grid.valueAtColAndRow(col, row);
        if (typeof obstacleValue === 'number' && obstacleValue > OBSTACLE_EMPTY) {
          var rectX = col * obstacleWidth;
          var rectY = row * obstacleHeight;
          var rectWidth = obstacleWidth;
          var rectHeight = obstacleHeight;
          graphics.fillRect(rectX, rectY, rectWidth, rectHeight, 'blue');
        }
      }
    }
  }
}