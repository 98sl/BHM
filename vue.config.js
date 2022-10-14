'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')
// const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || '' // page title
// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  // yykt15s是丛赫曦调试，_prod是部署
  outputDir: `D:\/web\/2S-SDEAS`,
  assetsDir: 'static',
  // 开发环境中启动eslint
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false, // 打包的时候回自动生成一个map文件，一般来说设为false即可
  devServer: {
    port: port, // 端口号，在这里也可以直接设为9527或其它
    open: false, // 是否npm run dev 之后自动打开项目
    host: '0.0.0.0', // 局域网访问设置，必要要有
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js'), // 引入mock文件，mock文件可以根据接口文档造相关的假数据也不用在单个页面里面造假数据
    // 跨域 反向代理
    proxy: {
      '/dev-api/FDPdev/': { // FDP-朱肖伟
        target: 'http://192.168.0.179:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/FDPdev/': ''
        }
      },
      '/dev-api/CMSdev/': { // CMS-朱肖伟
        target: 'http://192.168.0.179:8085',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/CMSdev/': ''
        }
      },
      '/dev-api/FKGdev/': { // FKG-朱肖伟
        target: 'http://192.168.0.179:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/FKGdev/': ''
        }
      },
      '/dev-api/SYSdev/': { // system-彭伟中
        target: 'http://192.168.0.179:8084',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/SYSdev/': ''
        }
      },
      '/dev-api/DNMdev/': { // DNM-丛赫曦
        target: 'http://192.168.0.179:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/DNMdev/': ''
        }
      },
      '/dev-api/EBDdev/history/': { // EBD-彭伟中
        target: 'http://192.168.0.170:8071',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/EBDdev/history/': '/ebdp2/'
        }
      },
      '/dev-api/EBDdev/auto/': { // EBD-葛衍生
        target: 'http://192.168.0.119:8071',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/EBDdev/auto/': '/ebdp2/'
        }
      },
      '/dev-api/EBD/': { // EBD-stage
        target: 'http://172.16.1.107:8071',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/EBD/': '/ebdp2/'
        }
      },
      '/dev-api/SYS/': { // system-stage
        target: 'http://192.168.0.179:8084/',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/SYS/': ''
        }
      },
      '/dev-api/FDP/': { // FDP-stage
        target: 'http://192.168.0.186:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/FDP/': ''
        }
      },
      '/dev-api/CMS/': { // CMS-stage
        target: 'http://192.168.0.186:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/CMS/': ''
        }
      },
      '/dev-api/FKG/': { // FKG-stage
        target: 'http://192.168.0.186:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/FKG/': ''
        }
      },
      '/dev-api/DNM/': { // DNM-stage
        target: 'http://192.168.0.186:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api/DNM/': ''
        }
      }
    }
  },
  // configureWebpack是怎么处理文件、图片等的压缩格式等，一般不用修改
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 开启缓存
    // config.cache(true) // webpack自带缓存机制，提升70%运行速度
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
            // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
    config
      .when(process.env.NODE_ENV === 'development',
        config => {
          // config.plugin('cache').use(HardSourceWebpackPlugin) // 开发环境启用缓存提升90%，编译时启用缓存容易造成环境变量错误
        }
      )
  }
}
