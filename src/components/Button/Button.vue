<template>
  <el-button
    class="bhm-button"
    :type="type"
    :class="{text: isText}"
    :icon="icon"
    :disabled="disabled"
    :circle="circle"
    :size="size"
    :plain="plain || isText"
    @click="handleClick"
  >
    <slot />
  </el-button>
</template>

<script>
export default {
  name: 'BhmButton',
  props: {
    isText: {
      type: Boolean,
      default: false
    },
    type: {
      // Primary danger success warning
      type: String,
      default: ''
      // Validator:value =>{
      //     return ['primary','success','warning','danger'].includes(value)
      // }
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      // medium small mini
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
// @import '@/styles/element-variables.scss';
@import "./style.scss";

</style>
