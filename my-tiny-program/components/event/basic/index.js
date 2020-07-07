import {main} from '../../../sein-game/event/basic';

Component({
  data: {
    info: ''
  },
  props: {
    onGetCanvas: () => null,
    onGameCreated: () => {}
  },
  game: null,
  async didMount() {
    const canvas = this.props.onGetCanvas();
    this.game = await main(canvas);
    this.props.onGameCreated(this.game, '事件系统', '基础');

    this.game.event.add('Info', info => this.setData({info}));
  },
  didUpdate() {},
  didUnmount() {},
  methods: {}
});
