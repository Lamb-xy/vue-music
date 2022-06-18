//封装获取首页数据的api

import service from "../utils/request"
//获取首页轮播图数据
export function getBanner () {
    return service({
        method: 'GET',
        url: '/banner?type=2'
    })
}
export function getFindMusic () {
    return service({
        method: 'GET',
        url: '/personalized?limit=10',
    })
}