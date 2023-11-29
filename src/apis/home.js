import myHttp from "@/utils/http";
/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
export function getBannerAPI (params = {}){
    const {distributionSite = '1'} = params
    return myHttp({
        url:'home/banner',
        params:{
            distributionSite
        }
    })
}

/**
 *@description: 获取新鲜好物
 *@param {*}
 *@return {*}
 */
export const findNewAPI = () =>{
    return myHttp({
        url:'/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = ()=>{
    return myHttp({
        url:'/home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () =>{
    return myHttp({
        url: '/home/goods'
    })
}