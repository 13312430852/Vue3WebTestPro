/**
 * 基本的返回数据
 */
export interface BaseRequiresMessage {
    code: number,
    message: string,
    data: Object,
    serverSuccess: boolean
}

// @ts-ignore
interface Error {
    errorCode: number | string,
    msg: string | undefined
}

/**
 * 请求失败所返回的数据
 */
export interface FailRequiresMessage extends BaseRequiresMessage {
    errors: Error
}

/**
 * 设置请求的信息
 */
export interface RequiresMsg {
    message?: string | undefined
    errorMsg?: string | undefined
}
