<template>
  <el-dialog
    v-el-drag-dialog
    :visible.sync="isShow"
    :title="titleFull"
    :width="width"
    :top="top"
    :close-on-click-modal="false"
    :destroy-on-close="true"
    @open="init"
    @closed="closed"
  >
    <el-scrollbar>
      <slot />
    </el-scrollbar>
    <div slot="footer">
      <el-button @click="cancel">取消</el-button>
      <el-button type="primary" @click="enter">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { findEnum } from '@/utils/'
import elDragDialog from '@/directive/el-drag-dialog'
export default {
  name: 'BhmDialog',
  directives: { elDragDialog },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      // 枚举值：create（新增）、update(编辑)、details(详情)
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '3vh'
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    init: {
      type: Function,
      default() {}
    }
  },
  data() {
    return {
      // 标题前缀枚举值
      titlePrefixEnum: [{
        value: 'create',
        label: '新增'
      }, {
        value: 'update',
        label: '编辑'
      }],
      titleSuffixEnum: [{
        value: 'details',
        label: '详情'
      }]
    }
  },
  computed: {
    isShow: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      }
    },
    titleFull() {
      return `${findEnum(this.titlePrefixEnum, this.type)}${this.title}${findEnum(this.titleSuffixEnum, this.type)}`
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

  <style lang="scss" scoped>
  ::v-deep .el-dialog {
    border: solid 1px #0561FC;
    border-radius: 4px;
    .el-dialog__header {
      border-bottom: solid 1px #E9F0F3;
      padding: 12px 15px;
      .el-dialog__headerbtn {
        top: 15px;
        right: 15px;
      }
    }
    .el-dialog__body {
      padding: 15px;
      .el-scrollbar {
        max-height: 76vh;
      }
      & .bhm-page > .el-card {
        & > .el-card__body {
          padding: 0;
        }
      }
    }
    .el-dialog__footer {
      padding: 6px 15px;
      border-top: solid 1px #E9F0F3;
    }
  }
  </style>
