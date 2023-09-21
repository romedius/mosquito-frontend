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
let texture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png');

const xFieldCnt = 7;
const yFieldCnt = 5;
const xfieldsize = 50;
const yfieldsize = 50;

function place(x, y, obj){
  obj.anchor(0.5,0.5);
  console.log("Stain " + x + " coords"+ app.stage.width / (xFieldCnt * 2) * (2 * x + 1));
  obj.x = app.stage.width / (xFieldCnt * 2) * (2 * x + 1) ;
  obj.y = app.stage.width / (yFieldCnt * 2) * (2 * y + 1) ;
}

let stains;


for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 5; j++) {
     let stain = new PIXI.Sprite(texture);
     place(i,j,stain);
     stains.add(stain);
     app.stage.addChild(stain);
    }
}


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
