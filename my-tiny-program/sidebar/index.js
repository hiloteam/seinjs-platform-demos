/**
 * @File   : index.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/25 上午11:06:59
 * @Description:
 */
import config from './config';

Component({
  data: {
    show: false,
    config
  },
  props: {
    current: '',
    onSelect: () => {}
  },
  game: null,
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onClose() {
      this.setData({show: false});
    },
    onOpen() {
      this.setData({show: true});
    },
    onScrollToLower() {
      // const { items5 } = this.data;
      // const newItems = items5.concat(newitems);
      // console.log(newItems.length);
      // this.setData({
      //   items5: newItems,
      // });
    },
    onSelect(event) {
      const {category, id} = event.target.dataset;
      this.props.onSelect(category, id);
    }
  }
});
