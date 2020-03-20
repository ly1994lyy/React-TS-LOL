import {post} from '../utils/http'

export function userLogin(data) {
    return post('/login',data)
}
