<template>
  <div style="margin-top: 20px ">
    <el-carousel
      :height="height"
      :interval="interval"
      :indicator-position="indicatorPosition"
      :arrow="arrow"
      :loop="loop"
      :initial-index="initialIndex"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <span class="mySpan">{{ item }}</span>
      </el-carousel-item>
      <slot />
    </el-carousel>
  </div>
</template>

<script>
export default {
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
      default: false
    },
    // 初始状态激活的幻灯片的索引，从0开始
    initialIndex: {
      type: Number,
      default: 0
    },
    interval: {
      type: Number,
      default: 3000
    }
  }

}
</script>
  <style scoped lang="scss">
  .el-carousel {
    background-color:#545c64;
    width: 500px;
    // position: relative;
  }
  .mySpan{
    height: 500px;
    display: block;
    font-size: 20px;
    text-align: center;
    line-height: 500px;

  }

  </style>
