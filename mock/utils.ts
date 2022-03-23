import {
  RequiresMsg,
  BaseRequiresMessage,
  FailRequiresMessage,

// eslint-disable-next-line import/no-unresolved
} from './mock-props.type'

function successRes(resParam?:RequiresMsg): BaseRequiresMessage {
  const res: BaseRequiresMessage = {
    code: 200,
    message: resParam?.message ?? '请求成功!',
    serverSuccess: true,
    data: {},
  }
  return res
}

function failRes(resParam?: RequiresMsg): FailRequiresMessage {
  const res: FailRequiresMessage = {
    code: 500,
    message: resParam?.message ?? '请求失败!',
    serverSuccess: false,
    data: {},
    errors: {
      errorCode: 500,
      msg: resParam?.errorMsg ?? '出了点小意外',
    },
  }
  return res
}

function getParams(options: unknown) {
  // @ts-ignore
  if (options && options.body) {
    // @ts-ignore
    return JSON.parse(options.body)
  }
  return ''
}
export {
  successRes,
  failRes,
  getParams,
}
