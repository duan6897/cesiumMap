import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core"
var engine: any, scene: any | undefined, camera: any | undefined
// 初始化场景
const initScene = (canvas?: any,) => {
  engine = new Engine(canvas);
  scene = new Scene(engine);
  camera = new FreeCamera('camera', new Vector3(0, 0, 0), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  engine.runRenderLoop(() => {
    scene.render();
  });
}
// 

export {
  initScene
}