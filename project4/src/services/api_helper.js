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
    return resp.data;
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
    const resp = await api.get(`/browse`);
    return resp;
}

export const addFood = async (newFood) => {
    const resp = await api.post('/browse/addfood', newFood);
    return resp;
}

export const getFoodData = async(foodId,childId) => {
    console.log(`Food: ${foodId}`)
    console.log(`ChildId: ${childId}`);
    const resp = await api.get(`/exposures/${foodId}/${childId}`);
    return resp;
}

export const getLastExposure = async(searchObject) => {
    const resp = await api.get(`/browse/${searchObject.childId}/${searchObject.foodId}`);
    if(resp.data != ""){
        return resp.data.date;
    }
    else{
        return false;
    }
}

export const addExposure = async(exposure) => {
    const resp = await api.post('/exposures/add', exposure);
    return resp;
}