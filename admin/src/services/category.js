import {get,put,del,post} from '../utils/http'

export function createCategory(data) {
    return post('/categories',data)
}

export function putCategory(id,data) {
    return put(`/categories/${id}`,data)
}

export function getCategory() {
    return get('/categories')
}

export function getCategoryByID(id) {
    return get(`/categories/${id}`)
}

export function delCategory(id) {
    return del(`/categories/${id}`)
}