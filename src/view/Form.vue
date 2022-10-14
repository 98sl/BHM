<template>
  <div class="bhm-form-container" style="margin-top: 20px">
    <el-form ref="form" :model="formdata" :rules="rules" label-width="80px">
      <el-form-item label="活动名称" prop="name">
        <el-input
          v-model="formdata.name"
          placeholder="请输入活动名称"
          clearable
        />
      </el-form-item>

      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="formdata.type">
          <el-checkbox label="美食餐厅线上活动" />
          <el-checkbox label="地推活动" />
          <el-checkbox label="线下主题活动" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="formdata.resource">
          <el-radio value="线上品牌商赞助" label="线上品牌商赞助" />
          <el-radio value="线上品牌商赞助" label="线下场地免费" />
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动形式" prop="desc">
        <el-input
          v-model="formdata.desc"
          type="textarea"
          placeholder="请输入活动形式"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        name: '',
        type: ['线下主题活动'],
        resource: '',
        desc: '',
        count: 1,
        pics: []
      },
      rules: {
        name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          {
            required: true,
            message: '请至少选择一个活动资源',
            trigger: 'change'
          }
        ],
        pics: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一张活动照片',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      // 表单校验
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('校验成功')
        } else {
          alert('校验失败')
          return false
        }
      })
    }
  }
}
</script>

  <style scoped>
.bhm-form-container {
  width: 480px;
  /* margin: 20px; */
}
</style>
