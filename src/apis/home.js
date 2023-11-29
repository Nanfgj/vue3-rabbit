/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import myHttp from "@/utils/http";
export function getBannerAPI (){
    return myHttp({
        url:'home/banner'
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