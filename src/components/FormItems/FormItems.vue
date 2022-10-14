<template>
  <div class="formItemBox">
    <div v-for="(item, index) in items" :key="index">
      <div style="width: calc(100% - 110px)">
        <slot :data="item" :$index="index" />
      </div>
      <div style="width: 98px">
        <el-button
          type="primary"
          :disabled="items.length === max"
          icon="el-icon-plus"
          circle
          size="mini"
          :title="`最多添加${max}个`"
          @click="add(index)"
        />
        <el-button v-if="index > 0" type="danger" circle icon="el-icon-minus" size="mini" @click="remove(index)" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BhnFormItems',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    },
    structure: {
      type: Object,
      default() {
        return null
      }
    },
    max: {
      // 限制添加个数
      type: Number,
      default: 99
    }
  },
  computed: {
    items: {
      get() {
        // 如果没有就初始化创建一个
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    items: {
      handler(newVal) {
        if (!newVal.length) {
          this.add()
        }
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    add() {
      this.items.push(this.structure)
      // const arr = [].concat(this.items, [this.structure])
      // this.items = arr
    },
    remove(index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
  <style lang="scss" scoped>
  .formItemBox {
    & > div {
      display:flex;
      justify-content: space-between;
      ::v-deep {
        .el-form-item {
          margin-bottom: 22px;
        }
      }
      // 最后一个和父级el-form-item重叠
      &:last-child {
        ::v-deep {
          .el-form-item {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  </style>
