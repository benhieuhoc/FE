import axios from "../utils/axios-customize"

export const callLogin = (email, password) => {
    const URL_BACKEND = '/user/login'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

export const callRegister = (email, password, Name, phone) => {
    const URL_BACKEND = 'user/singin'
    const data = {
        email, password, Name, phone
    }
    return axios.post(URL_BACKEND, data)
}