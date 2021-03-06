import {main} from '../../../sein-game/render/refraction';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '渲染', name: 'PBR折射'});
    },
  }
});
