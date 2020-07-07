import {main} from '../../../sein-game/animation/custom';

Component({
  data: {},
  props: {
    onGetCanvas: () => null,
    onGameCreated: () => {}
  },
  game: null,
  async didMount() {
    const canvas = this.props.onGetCanvas();
    this.game = await main(canvas);
    this.props.onGameCreated(this.game, '动画系统', '自定义动画');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
