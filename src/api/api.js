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
        return instance.get(`profile/${userId}`).then(response => {
            return response.data;
        });
    },

    getAuth(){
        return instance.get('auth/me').then(response => {
            return response.data;
        });
    },

    unfollow(id, unfollow){
        return instance.delete(`follow/${id}`)
    },

    follow(id, follow){
        return instance.post(`follow/${id}`)
    }
}

