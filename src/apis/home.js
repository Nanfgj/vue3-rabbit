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