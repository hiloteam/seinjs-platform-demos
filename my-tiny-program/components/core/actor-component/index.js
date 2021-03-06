import {main} from '../../../sein-game/core/actor-component';

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
    this.props.onGameCreated(this.game, '核心基础', '角色与组件');
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
