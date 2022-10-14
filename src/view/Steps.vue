<template>
  <div style="margin-top: 20px ">
    <el-steps :active="active" finish-status="success" style="width :800px ">
      <el-step title="步骤 1" icon="el-icon-edit" />
      <el-step title="步骤 2" icon="el-icon-upload" />
      <el-step title="步骤 3" icon="el-icon-picture" />
    </el-steps>
    <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
  </div>
</template>

<script>
import { title } from '@/settings'
export default {
  data() {
    return {
      active: 0

    }
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>

<style>

</style>
