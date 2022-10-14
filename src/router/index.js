import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Button from '@/view/Button.vue'
import Form from '@/view/Form.vue'
Vue.use(Router)
import Card from '@/view/Card.vue'
import Breadcrumb from '@/view/Breadcrumb.vue'
import Carousel from '@/view/Carousel.vue'
import DateTimeRange from '@/view/DateTimeRange.vue'
import SvgIcon from '@/view/SvgIcon.vue'
import Dialog from '@/view/Dialog.vue'
import FormItems from '@/view/FormItems.vue'
import Steps from '@/view/Steps.vue'

import echartBar from '@/components/Echart/echartBar.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/echart',
      name: 'echartBar',
      component: echartBar
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    },
    {
      path: '/breadCrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel
    },
    {
      path: '/dateTimeRange',
      name: 'DateTimeRange',
      component: DateTimeRange
    },
    {
      path: '/svgIcon',
      name: 'SvgIcon',
      component: SvgIcon
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/formItems',
      name: 'FormItems',
      component: FormItems
    },
    {
      path: '/steps',
      name: 'Steps',
      component: Steps
    }
  ]
})
