import {get,put,del,post} from '../utils/http'

export function createCategory(data) {
    return post('/rest/categories',data)
}

export function putCategory(id,data) {
    return put(`/rest/categories/${id}`,data)
}

export function getCategory() {
    return get('/rest/categories')
}

export function getCategoryByID(id) {
    return get(`/rest/categories/${id}`)
}

export function delCategory(id) {
    return del(`/rest/categories/${id}`)
}