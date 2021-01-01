import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Platform from "./Platform/Platform.js";
import Controls from "./Controls/Controls.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 0,
    y: 0.523880135388235,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Platform: new Platform({
    x: -192,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Controls: new Controls({
    x: 0,
    y: 154.52388013538823,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
