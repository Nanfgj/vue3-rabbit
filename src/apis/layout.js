import myHttp from "@/utils/http";

export function getCategoryAPI() {
    return myHttp({
        url: '/home/category/head'
    })
}