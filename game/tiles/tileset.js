function Tileset(name) {
  var tileset = {
    drawTile: drawTile,
    image: getTilesetImage(name),
    name: name,
  };
  return tileset;

  function drawTile(graphics, value, x, y) {
    if (value === undefined) return;
    if (value < TILE_V2_EMPTY) {
      return;
    }
    if (tilesetImageLoaded[tileset.name]) {
      var image = tileset.image;
      var sampleX = TILE_DETAILS[value].sampleX;
      var sampleY = TILE_DETAILS[value].sampleY;
      graphics.drawClippedImage(image, sampleX, sampleY, 16, 16, x, y, 16, 16);
    }
  }
}
