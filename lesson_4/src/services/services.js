import axios from "axios";

let options = {
    baseURL: " https://api.sampleapis.com/futurama"
}
let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/characters'); // promise
};
const getUsersID = (id) => {
    return axiosInstance.get('/characters/' + id); // promise
};

const getInventar = () => {
    return axiosInstance.get('/inventory'); // promise
};
const getInventarID = (id) => {
    return axiosInstance.get('/inventory/' + id)
}
export {
    getUsers, getInventar, axiosInstance, getInventarID, getUsersID
}