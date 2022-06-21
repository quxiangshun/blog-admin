import request from '@/utils/request'

export default {
    // 条件分页查询接口
    getList(query, current = 1, size = 20) {
        return request({
            url: `/system/v1/advert/search`,
            method: 'post',
            data: {...query, current, size}
        })
    },

    // 新增广告
    add(data) {
        return request({
            url: `/system/v1/advert`,
            method: 'post',
            data
        })
    },

    // 查询详情
    getById(id) {
        return request({
            url: `/system/v1/advert/${id}`,
            method: 'get'
        })
    },

    // 更新
    update(data) {
        return request({
            url: `/system/v1/advert`,
            method: 'put',
            data
        })
    },

    // 删除
    deleteById(id) {
        return request({
            url: `/system/v1/advert/${id}`,
            method: 'delete'
        })
    }
}