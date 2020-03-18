import {get,put,del,post} from '../utils/http'

export function createHero(data) {
    return post('/rest/heroes',data)
}

export function putHero(id,data) {
    return put(`/rest/heroes/${id}`,data)
}

export function getHero() {
    return get('/rest/heroes')
}

export function getHeroByID(id) {
    return get(`/rest/heroes/${id}`)
}

export function delHero(id) {
    return del(`/rest/heroes/${id}`)
}