import {get,put,del,post} from '../utils/http'

export function createItem(data) {
    return post('/rest/items',data)
}

export function putItem(id,data) {
    return put(`/rest/items/${id}`,data)
}

export function getItem() {
    return get('/rest/items')
}

export function getItemByID(id) {
    return get(`/rest/items/${id}`)
}

export function delItem(id) {
    return del(`/rest/items/${id}`)
}