import {get,put,del,post} from '../utils/http'

export function createArticle(data) {
    return post('/rest/articles',data)
}

export function putArticle(id,data) {
    return put(`/rest/articles/${id}`,data)
}

export function getArticle() {
    return get('/rest/articles')
}

export function getArticleByID(id) {
    return get(`/rest/articles/${id}`)
}

export function delArticle(id) {
    return del(`/rest/articles/${id}`)
}