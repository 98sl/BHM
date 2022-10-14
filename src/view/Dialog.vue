<template>
  <div style=" width:800px margin-top: 20px ">
    <el-button type="text" @click="dialogFormVisible = true">打开Dialog</el-button>
    <bhm-dialog
      title="判读报告"
      :visible.sync="dialogFormVisible"
      width="60%"
      @closed="closed"
    >
      <el-form :model="form">
        <el-form-item label="报告名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="报告格式" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择报告格式">
            <el-option label="格式一" value="word" />
            <el-option label="格式二" value="pdf" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="enter">确认</el-button>
      </div>
      <slot />
    </bhm-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    enter() {
      this.$emit('enter')
    },
    cancel() {
      this.isShow = false
    },
    closed() {
      this.$emit('closed')
    }
  }
}
</script>

<style>

</style>
