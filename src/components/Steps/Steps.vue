<template>
  <div class="stepsBox">
    <bhm-card class="top">
      <el-button v-show="!isPrevious" type="primary" plain size="small" @click="toPrevious">上一步</el-button>
      <el-steps
        :active="active"
        :simple="simple"
        :direction="direction"
        :process-status="processStatus"
        :finish-status="finishStatus"
      >
        <template v-for="(item, index) in steps">
          <el-step :key="index" :title="item.title" :icon="item.icon || ''" @click.native="setStep(index)" />
        </template>
      </el-steps>
      <el-button v-if="!isNext" type="primary" plain size="small" @click="toNext">下一步</el-button>
      <el-button v-else type="primary" plain size="small" @click="toComplete">完成</el-button>
    </bhm-card>
    <bhm-card class="bottom">
      <el-carousel
        ref="carousel"
        :height="height"
        :initial-index="active"
        :autoplay="false"
        indicator-position="none"
        arrow="never"
        :loop="false"
        :direction="direction"
      >
        <el-carousel-item
          v-for="(item, index) in steps"
          :key="index"
          :style="{overflow: isAnimate ? 'hidden' : 'auto'}"
        >
          <slot :name="`carouselItem${index}`" />
        </el-carousel-item>
      </el-carousel>
    </bhm-card>
  </div>
</template>

<script>
import bhmCard from '@/components/Card'
export default {
  name: 'BhmSteps',
  components: {
    bhmCard
  },
  props: {
    // 当前激活的步骤
    initial: {
      type: Number,
      default: 0
    },
    // 是否应用简洁风格
    simple: {
      type: Boolean,
      default: false
    },
    // 标题列表
    steps: {
      type: Array,
      default() {
        return []
      }
    },
    // 竖直方向
    direction: {
      type: String,
      default: 'horizontal'
    },
    // 当前步骤的状态
    processStatus: {
      type: String,
      default: 'finish'
    },
    // 结束步骤的状态
    finishStatus: {
      type: String,
      default: 'success'
    },
    height: {
      type: String,
      default: '' // 76vh为dialog弹框的最大高度，60：step高度，10：与step间距
    },
    nextFunction: {
      type: [Function],
      default: null
    }
  },
  data() {
    return {
      active: 0,
      isAnimate: false
    }
  },
  computed: {
    isPrevious() {
      return this.active === 0
    },
    isNext() {
      return this.active === this.steps.length - 1
    }
  },
  created() {
    this.active = this.initial
  },
  methods: {
    toPrevious() {
      this.$emit('previous', this.active)
      this.setPrevious()
    },
    setPrevious() {
      this.setStep(this.active - 1)
    },
    toNext() {
      this.$emit('next', this.active)
      this.setNext()
    },
    async setNext() {
      try {
        // 获取当前步骤的前置方法，根据结果判断是否允许下一步
        const nextFunction = this.steps[this.active].next
        if (nextFunction) {
          await nextFunction()
        }
        this.setStep(this.active + 1)
      } catch (err) {
        console.log(err)
      }
    },
    toComplete() {
      this.$emit('complete')
    },
    async setStep(step) {
      // 如果有滚动条，切换的时候隐藏，优化切换动画
      this.isAnimate = true
      setTimeout(() => { this.isAnimate = false }, 500)

      this.active = step
      this.$refs['carousel'].setActiveItem(step)
    }
  }
}
</script>
  <style lang="scss" scoped>
  @import "@/styles/element-variables.scss";
  .stepsBox {
    height: 100%;
    .top {
      margin: 0 0 10px 0;
      ::v-deep .el-card__body {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        .el-button {
          margin: 0 20px;
        }
        .el-steps {
          height: 64px;
          .el-step.is-horizontal {
            cursor: pointer;
            .el-step__head {
              padding: 20px;
              .el-step__line{
                display: none;
              }
              .el-step__icon.is-text {
                background: #D9D9D9;
                color: #4E5969;
                border-color: #D9D9D9;
              }
              &.is-finish{
                background: #CDDFFE;
                .el-step__icon.is-text {
                  background: $--color-primary;
                  color: #fff;
                  border-color: $--color-primary;
                }
              }
              &.is-success{
                .el-step__icon.is-text {
                  background: $--color-success;
                  color: #fff;
                  border-color: $--color-success;
                }
              }
            }
            .el-step__main{
              margin: -40px 20px 0 50px;
              position: relative;
              .el-step__title {
                line-height: 1;
              }
            }
          }
          &.el-steps--simple,&.el-steps--horizontal{
            width: 100%;
          }
          &.el-steps--simple {
            background: none;
          }
        }
      }
    }
    .bottom {
      height: calc(100% - 82px);
      ::v-deep .el-card__body{
        height: 100%;
        .el-carousel {
          height: 100%;
        }
      }
    }
  }
  </style>
