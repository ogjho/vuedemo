import axios from 'axios'
import qs from 'qs'

// axios.defaults.timeout = 120000;
axios.defaults.baseURL = location.protocol + '//www.tianqi.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
    if (config.method === 'post') {
      config.data = qs.stringify({
        ...config.data
      })
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  })

export default {
  ajaxGet (api, params) {
    console.log(api)
    return new Promise((resolve, reject) => {
      axios.get(api, {
        params: params
      })
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  },
  ajaxPost (api, data) {
    console.log(api)
    return new Promise((resolve, reject) => {
      axios.post(api, data)
        .then(response => {
          resolve(response.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
    })
  }
}
