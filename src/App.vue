<template>
  <div>
    <div>
      <el-menu
        :default-active="this.$route.path"
        router
        mode="horizontal"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <i class="el-icon-s-tools" />
            <span> {{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view class="menu-right" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        { name: '/', navItem: '首页' },
        { name: '/button', navItem: '按钮' },
        { name: '/echart', navItem: '图表' },
        { name: '/form', navItem: '表单' },
        { name: '/card', navItem: '卡片' },
        { name: '/breadCrumb', navItem: '面包屑' },
        { name: '/carousel', navItem: '走马灯' },
        { name: '/dateTimeRange', navItem: '日期时间选择器' },
        { name: '/svgIcon', navItem: '小图标' },
        { name: '/dialog', navItem: '对话框' },
        { name: '/formItems', navItem: '表单选项' },
        { name: '/steps', navItem: '步骤条' }
      ] }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
    .menu-right{
        margin-left:200px;
    }

</style>
