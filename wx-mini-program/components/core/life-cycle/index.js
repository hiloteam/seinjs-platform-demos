import {main} from '../../../sein-game/core/life-cycle';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '核心基础', name: '生命周期'});
    },
  }
});
