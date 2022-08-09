import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入并安装vant组件库
import Vant from 'vant'
// 覆盖默认的less变量，一定要把后缀名改为 .less
import 'vant/lib/index.less'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
