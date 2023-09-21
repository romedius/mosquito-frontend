
let width = window.innerWidth;
let height = window.innerHeight;

let app = new PIXI.Application({
    width: width,         // default: 800
    height: height,        // default: 600
    antialias: true,    // default: false
    transparent: true, // default: false
    resolution: 1,       // default: 1
}
);
document.body.appendChild(app.view);

console.log("foo");

// Create a new texture
let mosquito = PIXI.Texture.fromImage('/img/mosquitos/mosquito-flying.png');
let blood = PIXI.Texture.fromImage('/img/blood/splash-01.png');
// let texture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png');


console.log("bar");

const xFieldCnt = 7;
const yFieldCnt = 5;
const xfieldsize = 50;
const yfieldsize = 50;

let gameMode = false;

function place(x, y, obj){
  obj.anchor.set(0.5,0.5);
  //console.log("Stain " + x + " coords"+ width / (xFieldCnt * 2) * ((2 * x) + 1));
  obj.x = width / (xFieldCnt * 2) * ((2 * x )) ;
  obj.y = height / (yFieldCnt * 2) * ((2 * y )) ;
  return;
}

let stains = [];

for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 5; j++) {
    let stain = new PIXI.Sprite(blood);
    place(i, j, stain);
    stains.push(stain);
    app.stage.addChild(stain);
  }
}

stains[5].destroy();

// Move container to the center
app.stage.x = app.renderer.width / 2;
app.stage.y = app.renderer.height / 2;

// Center bunny sprite in local container coordinates
app.stage.pivot.x = app.stage.width / 2;
app.stage.pivot.y = app.stage.height / 2;

const client = mqtt.connect("wss://mqtt.devlol.org/mqtt");

client.on("connect", () => {
  client.subscribe("schmiede/mosquitto/#", (err) => {
    if (!err) {
      console.log("subscribed to MQTT");
    }
  });
});

client.on("message", (topic, message) => {
  console.log(topic, message.toString());
});

function initGame(){

}


// every jump seconds move mosquto to new position

// count down every second

//end game
  // remove mosquito
  // remove stains
  // show highscore
  // show that we wait for new input to restart

// register hit
  // if in gamemode
    // if mosquito is hit
      // add bloodstain
      // move mossquito to not used field
      // increase point counter
    // if # bloodstains == 35
      // end game and add remaining seconds to points
  // if in highscore mode
    // restart game    




app.ticker.add((delta) =>
{
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    stains[6].rotation += 0.1 * delta;
});