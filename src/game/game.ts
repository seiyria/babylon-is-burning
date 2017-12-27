import * as Babylon from 'babylonjs';

export class Renderer {
  private _canvas: HTMLCanvasElement;
  private _engine: Babylon.Engine;
  private _scene: Babylon.Scene;
  private _camera: Babylon.Camera;

  private headset: any;

  createScene(canvas: HTMLCanvasElement, engine: Babylon.Engine): Babylon.Scene {
    this._canvas = canvas;
    this._engine = engine;

    // This creates a basic Babylon Scene object (non-mesh)
    this._scene = new Babylon.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    // if(this.headset) {
      this._camera = new Babylon.WebVRFreeCamera('vrcamera', Babylon.Vector3.Zero(), this._scene);
    // } else {
    //   this._camera = new Babylon.UniversalCamera('camera', new Babylon.Vector3(0, 18, -45), this._scene);
    // }

    console.log(this.headset, this._camera);

    // Async call
    Babylon.SceneLoader.Append('https://www.babylonjs.com/Scenes/Mansion/',
      'Mansion.babylon', this._scene, () => {
        this._scene.activeCamera.position = new Babylon.Vector3(0.4, 1.7, -5);
        // We will add some logic there
        const VRHelper = this._scene.createDefaultVRExperience();
        VRHelper.enableInteractions();
      });

    return this._scene;
  }

  async initialize(canvas: HTMLCanvasElement): Promise<void> {
    // const displays = await navigator.getVRDisplays();
    // this.headset = displays[0];

    const engine = new Babylon.Engine(canvas, true);
    this.createScene(canvas, engine);

    engine.runRenderLoop(() => {
      this._scene.render();
    });

    window.addEventListener('resize',  () => {
      engine.resize();
    });
  }
}
