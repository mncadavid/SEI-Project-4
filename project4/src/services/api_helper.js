import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:9000"
})

export const registerUser = async(registerData) => {
    const resp = await api.post('/auth/signup', registerData);
    console.log(resp);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const loginUser = async(loginData) => {
    const resp = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}
export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if(token){
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data;
    }
    return false;
}

export const getAllFood = async () => {
    console.log("getting food")
    const resp = await api.get('/browse');
    return resp;
}

export const addFood = async (newFood) => {
    console.log("adding food");
    const resp = await api.post('/browse/addfood', newFood);
    return resp;
}

export const getFoodData = async(foodName) => {
    let foodObject = {food: foodName}
    console.log("getting food data");
    const resp = await api.get(`/exposures/${foodName}`);
    return resp;
}