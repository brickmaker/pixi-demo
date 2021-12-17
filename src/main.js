import { Application } from "@pixi/app";
import { TickerPlugin } from "@pixi/ticker";
import { Sprite } from "@pixi/sprite";
import { Renderer, BatchRenderer } from "@pixi/core";

Application.registerPlugin(TickerPlugin);
Renderer.registerPlugin("batch", BatchRenderer);

const app = new Application({
  width: 500,
  height: 500,
  backgroundColor: 0xeeeeee,
});
document.body.appendChild(app.view);

// sprite
const bunny = Sprite.from("./zjulogo.png");

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

app.stage.addChild(bunny);

// graphic
// const graphics = new Graphics();
// app.stage.addChild(graphics);

// // Rectangle
// graphics.beginFill(0xde3249);
// graphics.drawRect(50, 50, 100, 100);
// graphics.endFill();

// console.log(graphics);
