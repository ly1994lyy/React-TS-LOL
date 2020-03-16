import axios from 'axios'


const instance = axios.create({
    baseURL:"http://localhost:4000/admin/api"
})

export function get(url,params){
    return instance.get(url,{
        params
    })
}

export function post(url,data) {
    return instance.post(url,data)
}

export function put(url,data) {
    return instance.put(url,data)
}

export function del(url) {
    return instance.delete(url)
}