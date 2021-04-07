const app = getApp()
import sayHello from '../../common/index'

Page({
  data: {
    name: 'Mick',
    array: [1,2,3,4,5]
  },
  onLoad: function(options) {
    // 页面创建时执行
    sayHello(this.data.name)
  },

})