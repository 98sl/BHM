<template>
  <el-carousel
    :height="height"
    :indicator-position="indicatorPosition"
    :arrow="arrow"
    :loop="loop"
    :initial-index="initialIndex"
    width:500px
  >
    <slot />
  </el-carousel>
</template>

<script>
export default {
  name: 'BhmCarousel',
  props: {
    // 高度
    height: {
      type: String,
      default: '500px'
    },
    // 指示器的位置
    indicatorPosition: {
      type: String,
      default: 'none'
    },
    // 切换箭头的显示时机
    arrow: {
      type: String,
      default: 'never'
    },
    // 是否循环显示
    loop: {
      type: Boolean,
      default: true
    },
    // 初始状态激活的幻灯片的索引，从0开始
    initialIndex: {
      type: Number,
      default: 0
    }

  },
  data() {
    return {}
  }
}
</script>
  <style scoped lang="scss">
  .el-carousel {

  }
  </style>
