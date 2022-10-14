<template>
  <div style=" width:800px margin-top: 20px ">
    <el-date-picker
      v-model="value"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      align="right"
      style="min-width: 400px;"
      class="bhm-date-time-range"
      value-format="yyyy-MM-dd HH:mm:ss"
      :size="size"
      @change="change"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {},
      value: '',
      size: ''
    }
  },
  methods: {
    change(value) {
      this.$emit('change', value)
    }
  }
}
</script>
  <style lang="scss" scoped>

  </style>
