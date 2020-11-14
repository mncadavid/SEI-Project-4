import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:9000"
    // baseURL: "https://boiling-earth-32454.herokuapp.com/"
})

export const registerUser = async(registerData) => {
    const resp = await api.post('/auth/signup', registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data;
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

export const getFoodData = async(food_id,child_id) => {
    const resp = await api.get(`/exposures/${food_id}/${child_id}`);
    return resp;
}

export const getLastExposure = async(searchObject) => {
    const resp = await api.get(`/browse/${searchObject.child_id}/${searchObject.food_id}`);
    if(resp.data !== ""){
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

export const getLists = async(user_id) => {
    const resp = await api.get(`/lists/${user_id}`);
    return resp.data;
}
export const createList = async(listName,user_id) => {
    let listObject = {
        name: listName,
        user_id: user_id
    }
    const resp = await api.post(`/lists/create`, listObject);
    return resp.data;
}

export const deleteList = async(list) => {
    const resp = await api.post('/lists/delete',list); 
    return resp.data;  
}

export const addFoodToList = async(list_id,food_id,user_id) => {
    let body = {
        list_id,
        food_id,
        user_id
    }
    const resp = await api.post('/lists/add',body);
    return resp.data;
}
export const removeFood = async(food) => {
    const resp = await api.post('/lists/remove',food.grocerylistsfood);
    return resp.data;
}