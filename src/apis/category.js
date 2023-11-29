import myHttp from '@/utils/http'

export function getCategoryAPI (id) {
    return myHttp({
        url: '/category',
        params: {
            id
        }
    })
}