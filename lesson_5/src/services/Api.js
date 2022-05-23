import axios from "axios";

let option = {
    baseURL: "https://reqres.in/api"
}
let axiosInstance = axios.create(option);

const getUsers = (page) => {
    return axiosInstance.get("/users?page=" + page)
}
const getUserID = (id) => {
    return axiosInstance.get("/users/" + id)
}
export {
    getUsers,
    getUserID,
    axiosInstance
}
