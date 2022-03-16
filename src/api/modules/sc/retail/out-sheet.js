import { request } from '@/utils/request'

export default {
  /**
   * 查询列表
   * @param params
   * @returns {AxiosPromise}
   */
  query: (params) => {
    return request({
      url: '/retail/out/sheet/query',
      method: 'get',
      params: params
    })
  },
  /**
   * 导出列表
   * @param params
   */
  exportList: (params) => {
    return request({
      url: '/retail/out/sheet/export',
      method: 'post',
      responseType: 'blob',
      data: params
    })
  },
  /**
   * 根据ID查询
   * @param id
   * @returns {AxiosPromise}
   */
  get: (id) => {
    return request({
      url: '/retail/out/sheet',
      method: 'get',
      params: {
        id: id
      }
    })
  },
  /**
   * 根据ID查询（销售退货业务）
   * @param id
   * @returns {AxiosPromise}
   */
  getWithReturn: (id) => {
    return request({
      url: '/retail/out/sheet/return',
      method: 'get',
      params: {
        id: id
      }
    })
  },
  /**
   * 根据会员ID查询付款日期
   * @param memberId
   */
  getPaymentDate: (memberId) => {
    return request({
      url: '/retail/out/sheet/paymentdate',
      method: 'get',
      params: {
        memberId: memberId
      }
    })
  },
  /**
   * 创建
   * @param params
   * @returns {*}
   */
  createOrder: (params) => {
    return request({
      url: '/retail/out/sheet',
      method: 'post',
      dataType: 'json',
      data: params
    })
  },
  /**
   * 直接审核通过
   * @param params
   * @returns {*}
   */
  directApprovePassOrder: (params) => {
    return request({
      url: '/retail/out/sheet/approve/pass/direct',
      method: 'post',
      dataType: 'json',
      data: params
    })
  },
  /**
   * 审核通过
   * @param params
   * @returns {*}
   */
  approvePassOrder: (params) => {
    return request({
      url: '/retail/out/sheet/approve/pass',
      method: 'patch',
      dataType: 'json',
      data: params
    })
  },
  /**
   * 审核拒绝
   * @param params
   * @returns {*}
   */
  approveRefuseOrder: (params) => {
    return request({
      url: '/retail/out/sheet/approve/refuse',
      method: 'patch',
      dataType: 'json',
      data: params
    })
  },
  /**
   * 修改
   * @param params
   * @returns {*}
   */
  updateOrder: (params) => {
    return request({
      url: '/retail/out/sheet',
      method: 'put',
      dataType: 'json',
      data: params
    })
  },
  /**
   * 删除订单
   * @param params
   * @returns {*}
   */
  deleteOrder: (params) => {
    return request({
      url: '/retail/out/sheet',
      method: 'delete',
      params: params
    })
  },
  // 批量删除订单
  batchDeleteOrder: (params) => {
    return request({
      url: '/retail/out/sheet/batch',
      method: 'delete',
      dataType: 'json',
      data: params
    })
  },
  // 批量审核通过订单
  batchApprovePassOrder: (params) => {
    return request({
      url: '/retail/out/sheet/approve/pass/batch',
      method: 'patch',
      dataType: 'json',
      data: params
    })
  },
  // 批量审核拒绝订单
  batchApproveRefuseOrder: (params) => {
    return request({
      url: '/retail/out/sheet/approve/refuse/batch',
      method: 'patch',
      dataType: 'json',
      data: params
    })
  }
}
