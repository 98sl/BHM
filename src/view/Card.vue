<template>
  <div style="margin-top: 20px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
        >操作按钮</el-button>
      </div>
      <div v-for="k in 4" :key="k" class="text item">
        {{ "列表内容 " + k }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  border-color: aquamarine;
}
</style>
