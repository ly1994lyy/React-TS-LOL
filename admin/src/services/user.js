import {get,put,del,post} from '../utils/http'

export function createAdmin(data) {
    return post('/rest/admin_users',data)
}

export function putAdmin(id,data) {
    return put(`/rest/admin_users/${id}`,data)
}

export function getAdmin() {
    return get('/rest/admin_users')
}

export function getAdminByID(id) {
    return get(`/rest/admin_users/${id}`)
}

export function delAdmin(id) {
    return del(`/rest/admin_users/${id}`)
}