import axios from 'axios';


const USERS = axios.create({
    baseURL: "http://localhost:3003/soocial/v1/api/users"
})

const POSTS = axios.create({
    baseURL: "http://localhost:3003/soocial/v1/api/posts"
})



export const API = {
    USERS,
    POSTS
}