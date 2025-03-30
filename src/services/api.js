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

export const updateProject = ( _id, nameproject, author_id, description ) => {
    return axios.put('/project/update', {
        _id, nameproject, author_id, description 
    })
}

export const deleteProject = (_id) => {
    console.log("id:", _id)
    return axios.delete(`/project/delete/${_id}`)
}

// Task
export const fetchAllTask = () => {
    const URL_BACKEND = `/task/get_all?`    
    return axios.get(URL_BACKEND)
}

export const callCreateTask = (nametask, user_id, description, pre_task, next_task, day_start, time, day_end, status) => {
    return axios.post(`/task/create`, {
        nametask, user_id, description, pre_task, next_task, day_start, time, day_end, status 
    })
}

export const deleteTask = (_id) => {
    console.log("id:", _id)
    return axios.delete(`/task/delete/${_id}`)
}

export const updateTask = ( _id, nametask, user_id, description ) => {
    return axios.put('/task/update', {
        _id, nametask, user_id, description 
    })
}