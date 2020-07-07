/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import 'seinjs-camera-controls';
import {loadSein, createSein, createDefaultLights, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  private camera: Sein.PerspectiveCameraActor;
  private target: Sein.Vector3;

  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    const camera = this.camera = world.addActor('camera', Sein.PerspectiveCameraActor, {
      aspect: game.screenAspect,
      fov: 60,
      near: 0.01,
      far: 100,
      position: new Sein.Vector3(0, 10, -20)
    });

    this.target = new Sein.Vector3(0, 10, 0);
    camera.transform.lookAt(this.target);

    createDefaultLights(game);
    createSein(game);
  }

  public onUpdate() {
    const eye = this.camera.transform.position.clone().subtract(this.target).normalize();
    const deltaQuat = new Sein.Quaternion().setAxisAngle(this.camera.transform.upVector, 0.01);
    eye.transformQuat(deltaQuat);
    eye.scale(20);
    this.camera.transform.position = eye.add(this.target);
    this.camera.lookAt(this.target);
  }
}

export async function main(canvas: HTMLCanvasElement): Promise<Sein.Game> {
  const engine = new Sein.Engine();

  const game = new Sein.Game(
    'intro-game',
    {
      canvas,
      clearColor: config.background,
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
      pixelRatio: window.devicePixelRatio,
      antialias: true
    }
  );

  engine.addGame(game);

  game.addWorld('main', Sein.GameModeActor, MainScript);

  await game.start();

  return game;
}               
        