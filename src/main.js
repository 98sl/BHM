// main.js 是入口文件，引入的为全局插件、组件
import Vue from 'vue'

import ElementUI from 'element-ui'
Vue.use(ElementUI)
import Button from './components/Button'
Vue.use(Button)

import echarts from 'echarts' // 引入echarts
import 'echarts/theme/macarons.js'
Vue.prototype.$echarts = echarts
import echartBar from './components/Echart'
Vue.use(echartBar)

import Form from './components/Form'
Vue.use(Form)
import Card from './components/Card'
Vue.use(Card)
import Breadcrumb from './components/Breadcrumb'
Vue.use(Breadcrumb)
import Carousel from './components/Carousel'
Vue.use(Carousel)
import DateTimeRange from './components/DateTimeRange'
Vue.use(DateTimeRange)
import SvgIcon from './components/SvgIcon'
Vue.use(SvgIcon)
import Dialog from './components/Dialog'
Vue.use(Dialog)
import FormItems from './components/FormItems'
Vue.use(FormItems)
import Steps from './components/Steps'
Vue.use(Steps)

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/element-variables.scss'
import '@/styles/index.scss' // global css

import App from './App'
import router from './router'

import './icons' // icon

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
