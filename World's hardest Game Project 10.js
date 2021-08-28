var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Lives=0;
var Gamestate = "play";
var boundary1 = createSprite(195, 80, 250, 2);
var boundary2 = createSprite(195, 230, 250, 2);
var boundary3 = createSprite(320, 105, 2, 50);
var boundary4 = createSprite(70, 105, 2, 50);
var boundary5 = createSprite(70, 205, 2, 50);
var boundary6 = createSprite(320, 205, 2, 50);
var boundary7 = createSprite(45, 130, 50, 2);
var boundary8 = createSprite(345, 130, 50, 2);
var boundary9 = createSprite(45, 180, 50, 2);
var boundary10 = createSprite(345, 180, 50, 2);
var boundary11 = createSprite(20, 155, 2, 50);
var boundary12 = createSprite(370, 155, 2, 50);
var player = createSprite(50, 160, 20, 20);
player.shapeColor = "green";
var car1 = createSprite(140, 90, 10, 10);
var car2 = createSprite(190, 220, 10, 10);
var car3 = createSprite(240, 90, 10, 10);
var car4 = createSprite(290, 220, 10, 10);
car1.shapeColor = "red";
car2.shapeColor = "red";
car3.shapeColor = "red";
car4.shapeColor = "red";
car1.velocityY = 4;
car2.velocityY = -4;
car3.velocityY = 4;
car4.velocityY = -4;
function draw() {
  background("white");
  text("Lives="+Lives, 320, 50);
  text("Make The Player Reach The Yellow Zone, with Minimum Lives", 50, 280);
  noStroke();
  fill("lightblue");
  rect(20, 130, 50, 50);
  noStroke();
  fill("yellow");
  rect(320, 130, 50, 50);
  if (keyDown("up")) {
    player.y = player.y-2;
  }
  if (keyDown("down")) {
    player.y = player.y+2;
  }
  if (keyDown("right")) {
    player.x = player.x+2;
  }
  if (player.isTouching(boundary1)||
  player.isTouching(boundary2)||
  player.isTouching(boundary3)||
  player.isTouching(boundary4)||
  player.isTouching(boundary5)||
  player.isTouching(boundary6)||
  player.isTouching(car1)||
  player.isTouching(car2)||
  player.isTouching(car3)||
  player.isTouching(car4)){
    player.x = 50;
    player.y = 160;
    Lives = Lives+1;
  }
  if (player.x>320) {
    fill("Black");
    text("Game Ended", 200, 200);
    Gamestate = "end";
  }
  if (Gamestate==="end") {
    text("Press Enter to Restart", 100, 320);
  }
  if (keyDown("Enter")) {
    player.x = 50;
    player.y = 160;
    Gamestate = "play";
  }
  if (Gamestate==="play") {
    fill("gray");
    text("Use arrow keys to move", 100, 50);
  }
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  player.bounceOff(boundary7);
  player.bounceOff(boundary8);
  player.bounceOff(boundary9);
  player.bounceOff(boundary10);
  player.bounceOff(boundary11);
  player.bounceOff(boundary12);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
