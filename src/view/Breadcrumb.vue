<template>
  <div style="margin-top: 20px">
    <el-breadcrumb separator="/">
      <!-- <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">
          {{ generateTitle(item.meta.title) }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ generateTitle(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group> -->
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/button' }">按钮</el-breadcrumb-item>
      <el-breadcrumb-item>图表</el-breadcrumb-item>
      <el-breadcrumb-item>表单</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import pathToRegexp from 'path-to-regexp'
export default {
  data() {
    return {
      // levelList: [  {path: "/", name: "首页",meta:{title:'首页'}},
      //     { path: "/button", name: "按钮" ,meta:{title:'按钮'}},
      //     { path: "/echart", name: "图表",meta:{title:'图表'} },
      //     { path: "/form", name: "表单" ,meta:{title:'表单'}},
      //     { path: "/card", name: "卡片" ,meta:{title:'卡片'}},]
    }
  },
  watch: {
    $route(route) {
      // if you go to the redirect page, do not update the breadcrumbs
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    generateTitle,
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]

      if (!this.isDashboard(first)) {
        matched = [{ path: '/', meta: { title: '首页' }}].concat(matched)
      }

      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
    },
    pathCompile(paths) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params, name, path } = this.$route
      console.log(name, path, params)
      var toPath = pathToRegexp.compile(paths)
      if (name === 'metaManageTableList' || name === 'metaManageTableInfo') {
        if (paths.split('/').length === 4) {
          return toPath({ id: path.split('/')[3] })
        } else {
          return path.split('/')[0] + '/' + path.split('/')[1] + '/' + path.split('/')[2] + '/' + path.split('/')[3] + '/' + path.split('/')[4] + '?type=tpi'
        }
      } else {
        return toPath(params)
      }
    },
    handleLink(item) {
      const { redirect, path } = item
      if (redirect) {
        this.$router.push(this.pathCompile(path))
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>

<style>

</style>
