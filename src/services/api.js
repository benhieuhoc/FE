import axios from "../utils/axios-customize"

// User
export const fetchAllUser = () => {
    const URL_BACKEND = `/user/get_all?`    
    return axios.get(URL_BACKEND)
}

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

// Project
export const fetchAllProject = () => {
    const URL_BACKEND = `/project/get_all?`    
    return axios.get(URL_BACKEND)
}

export const callCreateProject = (nameproject, author_id, description ) => {
    return axios.post(`/project/create`, {
        nameproject, author_id, description 
    })
}