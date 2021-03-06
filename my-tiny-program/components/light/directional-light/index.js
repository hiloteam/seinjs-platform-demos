import {main} from '../../../sein-game/light/directional-light';

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
    this.props.onGameCreated(this.game, '灯光', '平行光');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
