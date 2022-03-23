import Mock from 'mockjs'
import { successRes, failRes, getParams } from './utils'
import { BaseRequiresMessage, FailRequiresMessage } from './mock-props.type'

export default {
  'login/getUserById': (options: unknown) => {
    const params = getParams(options)
    if (params && params.id !== 1) {
      const failRequiresMessag: FailRequiresMessage = failRes({
        message: '后台错误',
        errorMsg: '查询不到此用户,导致后台报错',
      })
      return failRequiresMessag
    }
    // @ts-ignore
    const baseMsg:BaseRequiresMessage = successRes()
    const data = Mock.mock({
      'data|5': [
        {
          'id|+1': 1,
          name: '@cname',
          birthday: '@datetime',
          email: '@email',
        },
      ],
    })
    baseMsg.data = data
    return baseMsg
  },
  'index/getTableData': (options: unknown) => {

  },
}
