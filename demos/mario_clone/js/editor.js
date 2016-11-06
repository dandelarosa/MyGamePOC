const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X = 0;
const PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y = 0;

function Editor() {
  this.bricks = new Bricks();
  this.slider = new Slider();
  this.camera = new Camera();
  this.camera.width = GAME_WIDTH;
  this.camera.height = GAME_HEIGHT;
  this.camera.thresholdFromCenterX = PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_X;
  this.camera.thresholdFromCenterY = PLAYER_DIST_FROM_CENTER_BEFORE_CAMERA_PAN_Y;
  this.camera.speed = RUN_SPEED;
};

Editor.prototype.update = function(services) {
  var keyboard = services.keyboard;
  var keyEvents = keyboard.keyEvents;
  this.slider.move(keyEvents, this.bricks);
  this.camera.follow(this.slider, this.levelDimensions());

  this.draw(services);
};

Editor.prototype.levelDimensions = function() {
  return {
    width: BRICK_COLS * BRICK_W,
    height: BRICK_ROWS * BRICK_H
  }
}

Editor.prototype.draw = function(services) {
  var graphics = services.graphics;
  graphics.fillWholeScreen('black');

  var bricks = this.bricks;
  var slider = this.slider;
  var camera = this.camera;
  graphics.drawInCamera(this.camera.panX, this.camera.panY, function() {
    bricks.draw(graphics, camera);
    slider.draw(graphics);
  });

  graphics.colorText("Arrow keys to run, spacebar to jump", 8, 14, "white");

  var mouse = services.mouse;
  col = bricks.colForX(mouse.x);
  row = bricks.rowForY(mouse.y);
  graphics.colorText(col + ',' + row, mouse.x, mouse.y, 'yellow');
};
