/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';
import {loadSein, createSein, createDefaultCamera, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    loadSein(this.getGame());
  }

  public onCreate() {
    const game = this.getGame();
    const world = this.getWorld();

    createDefaultCamera(game);
    createSein(game);

    world.addActor('amLight', Sein.AmbientLightActor, {
      color: new Sein.Color(1, 1, 1),
      amount: .5
    });
    const light = world.addActor('light', Sein.DirectionalLightActor, {
      direction: new Sein.Vector3(0, -1, 1),
      color: new Sein.Color(1, 1, 1),
      amount: 2
    });

    light.root.shadow = {
      width: 3840,
      height: 2160
    };
    Sein.findActorByName<Sein.StaticMeshActor>(world, 'ground').root.material.receiveShadows = true;
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
        