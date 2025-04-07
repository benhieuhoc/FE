import axios from "../utils/axios-customize"

// User
export const fetchAllUser = (query) => {
    const URL_BACKEND = `/user/get_all?${query}`    
    return axios.get(URL_BACKEND)
}

export const fetchUserbyId = (id) => {
    return axios.get(`/user/get_by_id?id=${id}`)
}

export const callLogin = (email, password) => {
    const URL_BACKEND = '/user/login'
    const data = {
        email, password
    }
    return axios.post(URL_BACKEND, data)
}

export const callRegister = (username, email, name, phone, password) => {
    const URL_BACKEND = 'user/singin'
    const data = {
        username, email, name, phone, password
    }
    return axios.post(URL_BACKEND, data)
}

// Project
export const fetchAllProject = () => {
    const URL_BACKEND = `/project/get_all`    
    return axios.get(URL_BACKEND)
}

export const fetchProjectbyId = (id) => {
    return axios.get(`/project/get_by_id?id=${id}`)
}

export const fetchProjectbyauthor = (id, date) => {
    return axios.get(`/project/get_by_author?id=${id}&date=${date}`)
}

export const fetchProjectbtCategory = (categoryId, userId) => {
    return axios.get(`/project/get_by_category?categoryId=${categoryId}&userId=${userId}`)
}

export const callCreateProject = (author_id, nameproject, description, category_id, endDate ) => {
    return axios.post(`/project/create`, {
        author_id, nameproject, description, category_id, endDate 
    })
}

export const updateProject = ( _id, nameproject, author_id, description ) => {
    return axios.put('/project/update', {
        _id, nameproject, author_id, description 
    })
}
export const addMemberToProject = (Project_id, user_id) => {    
        return axios.post(`/project/add_member`, {
        Project_id, user_id 
    })
}

export const addTaskToProject = (Project_id, task_id) => {
    return axios.post(`/project/add_task`, {
        Project_id, task_id 
    })
}

export const deleteProject = (_id) => {
    console.log("id:", _id)
    return axios.delete(`/project/delete/${_id}`)
}

export const removeMemberFromProject = (Project_id, user_id) => {
    return axios.delete(`/project/remove_member/${Project_id}/${user_id}`, {
        Project_id, user_id 
    })
}

// Task
export const fetchAllTask = () => {
    const URL_BACKEND = `/task/get_all?`    
    return axios.get(URL_BACKEND)
}

export const fetchTaskbyId = (id) => {
    return axios.get(`/task/get_by_id?id=${id}`)
}

export const fetchTaskbyuser = (id, date) => {
    return axios.get(`/task/show_task_by_user?id=${id}&date=${date}`)
}

export const callCreateTask = (nametask, user_id, description, day_start, day_end) => {
    return axios.post(`/task/create`, {
        nametask, user_id, description, day_start, day_end 
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

export const updateStatus = ( _id, description, status ) => {
    return axios.put('/task/update_status', {
        _id, description, status 
    })
}


// Category
export const fetchAllCategory = () => {
    const URL_BACKEND = `/category/get_all`    
    return axios.get(URL_BACKEND)
}

// Notification
export const fetchAllNotification = (id) => {
    const URL_BACKEND = `/notification/get_all?_id=${id}`    
    return axios.get(URL_BACKEND)
}

export const sendInviteToUser = (user_id, sender_id, project_id, content) => {
    const URL_BACKEND = '/notification/send_invite';
    return axios.post(URL_BACKEND, {user_id, sender_id, project_id, content})
}

export const responseNotication = (user_id, sender_id, project_id, content) => {
    const URL_BACKEND = '/notification/respond_invite';
    return axios.post(URL_BACKEND, {user_id, sender_id, project_id, content})
}

export const chanceStatus = (notification_id, response) => {
    const URL_BACKEND = '/notification/chance_status';
    return axios.put(URL_BACKEND, {notification_id, response})
}

export const chanceRead = (notification_id) => {
    const URL_BACKEND = '/notification/chance_read';
    return axios.put(URL_BACKEND, {notification_id})
}