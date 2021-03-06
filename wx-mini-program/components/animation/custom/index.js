import {main} from '../../../sein-game/animation/custom';

Component({
  properties: {},
  game: null,
  didUpdate() {},
  didUnmount() {},
  methods: {
    start: async function(canvas) {
      this.game = await main(canvas);
      this.triggerEvent('GameCreated', {game: this.game, category: '动画系统', name: '自定义动画'});
    },
  }
});
