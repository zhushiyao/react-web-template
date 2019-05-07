import axios from 'axios'
import URL from '@const/url'
import { message } from 'antd'

// 获取环境变量，
// run start时变量为development，
// run build时变量为production，
// run test时变量为test
const env = process.env.NODE_ENV
/**
 * 创建请求配置
 */
const request = axios.create({
  baseURL: URL[env].base, // 默认 为base
  headers: {} // 设置http headers
})
const URL_REG = /^[$][^/]*/
/**
 * 根据请求路径前缀替换对应的BaseUrl
 * 使用规则：
 * 列：request.post('/api/get') 默认请求的地址是DEMO_URL中的base地址
 * 如果想请求其他地址，请求开头以$开头
 * 如request.post('$other/api/get') 此处请求的地址为DEMO_URL中的other地址
 * @param {*} config
 */
const replaceBaseUrl = config => {
  let { url } = config
  let flag = url.match(URL_REG)
  if (flag) {
    let target = flag[0].substring(flag[0].indexOf('$') + 1)
    if (URL[env][target]) config.baseURL = URL[env][target]
    config.url = url.replace(URL_REG, '')
  }
  return config
}
// 设置拦截器
request.interceptors.request.use(replaceBaseUrl, error => Promise.reject(error))

request.interceptors.response.use(
  function(response) {
    const { status, statusText, data = {} } = response
    const { success, message: dataMessage, code } = data
    if (status !== 200) {
      message.error(statusText)
    }
    if (!success) {
      message.error(`code: ${code}, ${dataMessage}`)
      return Promise.reject(data)
    }

    return data
  },
  function(error) {
    message.error(error.message)
    return Promise.reject(error)
  }
)
export default request
