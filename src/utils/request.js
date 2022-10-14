import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// const baseURL = '/prod-api' // 局域网部署环境
// const baseURL = '/dev-api2' // 局域网部署环境
const baseURL = process.env.VUE_APP_BASE_API // 本地开发环境
// create an axios instance
const service = axios.create({
  baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  headers: { 'content-type': 'application/x-www-form-urlencoded;' },
  timeout: 5 * 1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = getToken()
      config.headers['menuId'] = store.getters.currenMenu
    }
    return config
  },
  error => {
    // do something with request error
    console.log('ajax', error) // for debug
    return Promise.reject(error)
  }
)

// 是下载文件api，如果是下载文件api直接返回二进制流
const isDownloadApi = (url) => {
  const downloadApis = [
    'SavePythonDocView/SavePythonDoc', // 试验任务数据下载
    'report/download/',
    'check/downloadRawData'
  ]
  return !!downloadApis.find(item => url.indexOf(item) > -1)
}

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // FDP、EBD、SYSTEM
    if (!res.succeeded && res.code !== 200 && !res.success && !isDownloadApi(response.config.url)) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.status === 1010 || res.status === 50012 || res.status === 50014) {
        // to re-login
        MessageBox.confirm('您已退出登录，可以点击取消留在当前页，也可重新登录', '确认退出', {
          confirmButtonText: '重新登陆',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      } else if (res.status !== 0) {
        Message({
          message: res.message || res.errors || '系统繁忙',
          type: 'error',
          duration: 2 * 1000
        })
      } else if (res.status === 9001) {
        // 删除角色、用户、临时用户错误，返回状态码即可，不用后端的信息报错
      } else {
        Message({
          message: res.message || res.errors || '网络错误，请刷新',
          type: 'error',
          duration: 2 * 1000
        })
      }
      return Promise.reject(new Error([res.message, res.status] || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.dir(error) // for debug
    const { data } = error.response
    let message = '连接超时，请刷新重试！'
    if (data.errors) {
      message = data.errors
    }
    Message({
      message,
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
