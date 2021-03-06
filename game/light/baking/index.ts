/**
 * @File   : Main.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 3:41:53 PM
 * @Description:
 */
import * as Sein from 'seinjs';

import {createDefaultCamera, config} from '../../utils';

class MainScript extends Sein.LevelScriptActor {
  public onPreload() {
    this.getGame().resource.load({type: 'GlTF', name: 'scene.gltf', url: require('../../assets/models/lightmap/scene.gltf'), ignoreTextureError: true});
  }

  public onCreate() {
    const game = this.getGame();

    createDefaultCamera(game, {position: new Sein.Vector3(0, 2, -6), target: new Sein.Vector3(0, 2, 0)});

    game.world.addActor('light', Sein.AmbientLightActor, {
      color: new Sein.Color(0, 0, 0),
      amount: .1
    });

    game.resource.instantiate<'GlTF'>(`scene.gltf`);

    console.log(game);
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
        