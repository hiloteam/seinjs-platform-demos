import {main} from '../../../sein-game/render/advance';

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
    this.props.onGameCreated(this.game, '渲染', '进阶渲染');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
