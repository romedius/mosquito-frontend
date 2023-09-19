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

// Create a new texture
let texture = PIXI.Texture.from('https://pixijs.io/examples/examples/assets/bunny.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
    let bunny = new PIXI.Sprite(texture);
    bunny.anchor.set(0.5);
    bunny.x = (i % 5) * 40;
    bunny.y = Math.floor(i / 5) * 40;
    app.stage.addChild(bunny);
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
