<template>
  <div style="margin-top: 20px">
    <el-form>
      <el-form-item>
        <bhm-form-items
          v-model="detailData.rule"
          :structure="{
            refParaValue: 0,
            timedelay: 0,
            expValueUpper: 0,
            expValueLower: 0
          }"
        >
          <div slot-scope="{data, $index}">
            <el-form-item
              label="参数1上限"
              label-width="100px"
              :prop="`rule.${$index}.expValueUpper`"
              :rules="[
                { required: true, message: '主参数值上限', trigger: ['blur', 'change']}
              ]"
            >
              <el-input v-model="data.expValueUpper" />
            </el-form-item>
            <el-form-item
              label="参数1下限"
              label-width="100px"
              :prop="`rule.${$index}.expValueLower`"
              :rules="[
                { required: true, message: '主参数值下限', trigger: ['blur', 'change']}
              ]"
            >
              <el-input v-model="data.expValueLower" />
            </el-form-item>
            <el-form-item
              label="参数2"
              label-width="100px"
              :prop="`rule.${$index}.refParaValue`"
              :rules="[
                { required: true, message: '参考参数值必填', trigger: ['blur', 'change']}
              ]"
            >
              <el-input v-model="data.refParaValue" />
            </el-form-item>
            <el-form-item label="时间" label-width="100px">
              <el-input v-model="data.timedelay">
                <template slot="append">秒</template>
              </el-input>
            </el-form-item>
          </div>
        </bhm-form-items>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import bhmFormItems from '@/components/FormItems'
export default {
  components: {
    bhmFormItems
  },
  data() {
    return {
      detailData: {
        refParaTmid: '',
        rule: [{
          refParaValue: 0,
          timedelay: 0,
          expValueUpper: 0,
          expValueLower: 0
        }]
      }
    }
  }
}
</script>

  <style lang="scss" scoped>
  </style>
