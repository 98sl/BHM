<template>
  <div style="margin-top: 20px">
    <bhm-button type="primary" circle>主要按钮 </bhm-button>
    <bhm-button type="success" round disabled>success</bhm-button>
    <bhm-button type="warning" icon="el-icon-search">warning</bhm-button>
    <bhm-button type="danger" @click="handleClick">danger</bhm-button>
    <bhm-button type="text">文字按钮</bhm-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert(1)
    }
  }
}
</script>

<style scoped>

</style>
