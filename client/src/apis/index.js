import axios from 'axios';


export const USERS_API = axios.create({
    baseURL: "http://localhost:3003/soocial/v1/api/users"
})

export const POSTS_API = axios.create({
    baseURL: "http://localhost:3003/soocial/v1/api/posts"
})