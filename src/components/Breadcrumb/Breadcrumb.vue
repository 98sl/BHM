<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">
          {{ generateTitle(item.meta.title) }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ generateTitle(item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import pathToRegexp from 'path-to-regexp'

export default {
  name: 'BhmBreadCrumb',
  data() {
    return {
      levelList: null
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

  <style lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: block;
    font-size: 12px;
    line-height: 30px;
    // box-shadow: 0 0 2px 0 rgba(0,0,0,0.3);
    padding-left: 10px;
    background: rgba($color: #0c2f64, $alpha: .6);
    border-top: solid 1px #07236f;
    border-bottom: solid 1px #07236f;
    a {
      color: #2d77e6;
    }

    .no-redirect {
      color: #fff;
      cursor: text;
    }
  }
  </style>
