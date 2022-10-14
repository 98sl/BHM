<template>
  <el-card :shadow="shadow" :style="{ border: !border && 'none' }">
    <template slot="header">
      <slot name="title" />
      <template class="actions">
        <slot name="actions" />
      </template>
    </template>
    <slot />
  </el-card>
</template>

<script>
export default {
  name: 'BhmCard',
  props: {
    shadow: {
      type: String,
      default: 'always'
    },
    border: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-card {
  border-radius: 4px;
  .el-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
// 内部最顶层的card清空边距
::v-deep .el-card__body {
  .bhm-page > .el-card {
    .el-card__body {
      padding: 0;
    }
  }
}
</style>
