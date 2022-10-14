<template>
  <el-time-picker
    v-if="type === 'time'"
    v-model="value"
    is-range
    range-separator="至"
    :start-placeholder="`${placeholder}开始时间`"
    :end-placeholder="`${placeholder}结束时间`"
    style="min-width: 200px;"
    class="bhm-date-time-range"
    value-format="HH:mm:ss"
    :size="size"
    @change="change"
  />
  <el-date-picker
    v-else
    v-model="value"
    :type="type.toLowerCase() + 'range'"
    range-separator="至"
    :start-placeholder="`${placeholder}开始时间`"
    :end-placeholder="`${placeholder}结束时间`"
    style="min-width: 400px;"
    class="bhm-date-time-range"
    value-format="yyyy-MM-dd HH:mm:ss"
    :size="size"
    @change="change"
  />
</template>
<script>
export default {
  name: 'BhmDateTimeRange',
  props: {
    type: {
      type: String,
      default: 'dateTime' // 枚举值：time、date、dateTime、month
    },
    start: {
      type: [Date, String],
      default: ''
    },
    end: {
      type: [Date, String],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    size: {
      // mini small medium
      type: String,
      default: ''
    }
  },
  computed: {
    // value() {
    //   console.log(this.start, this.end)
    //   return (this.start && this.end) ? [this.start, this.end] : ''
    // }
    value: {
      get() {
        return (this.start && this.end) ? [this.start, this.end] : ''
      },
      set(value) {
        // 点击清空value为null
        this.$emit('update:start', value ? value[0] : '')
        this.$emit('update:end', value ? value[1] : '')
      }
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
  .bhm-date-time-range {
    width: 100%;
    ::v-deep {
      .el-range-input {
        background: #fff;
      }
    }
  }
  </style>
