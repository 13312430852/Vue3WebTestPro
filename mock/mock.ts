// @ts-ignore
import Mock from 'mockjs'
import API from './API'

// 设置请求到数据的延时
Mock.setup({
  timeout: '200-600',
})

for (const api in API) {
  // @ts-ignore
  const apiBody = API[api]
  // @ts-ignore
  Mock.mock(api, (options) => apiBody(options))
}
