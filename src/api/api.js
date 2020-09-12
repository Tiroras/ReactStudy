import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ba23bfd9-1b2b-421e-863e-643a2feb144a'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    },

    getProfile(userId){
        return profileAPI.getProfile(userId);
    },

    unfollow(id){
        return instance.delete(`follow/${id}`)
    },

    follow(id){
        return instance.post(`follow/${id}`)
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me').then(response => {
            return response.data;
        });
    },

    login(){
        return instance.post('auth/login')
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        });
    },


    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status){
        return instance.put('profile/status', {status: status});
    }
}
