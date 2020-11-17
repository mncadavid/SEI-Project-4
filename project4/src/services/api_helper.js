import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:9000"
    // baseURL: "https://boiling-earth-32454.herokuapp.com/"
})

//Sends the data to register the user, sets the authToken, and returns the data
export const registerUser = async(registerData) => {
    const resp = await api.post('/auth/signup', registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data;
}
//Sends the data to login the user, sets the authToken and returns the data
export const loginUser = async(loginData) => {
    const resp = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data;
}
//Sends the data to verify the user
export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');
    if(token && token !== 'undefined'){
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data;
    }
    return false;
}
//gets a list of all food
export const getAllFood = async () => {
    const resp = await api.get(`/browse`);
    return resp;
}
//creates a new food
export const addFood = async (newFood) => {
    const resp = await api.post('/browse/addfood', newFood);
    return resp;
}
//gets all of the exposure data for the given food and child
export const getFoodData = async(food_id,child_id) => {
    const resp = await api.get(`/exposures/${food_id}/${child_id}`);
    return resp;
}
//gets the most recent exposure for the child and food
//if there is not an exposure it returns false
export const getLastExposure = async(searchObject) => {
    const resp = await api.get(`/browse/${searchObject.child_id}/${searchObject.food_id}`);
    if(resp.data !== ""){
        return resp.data.date;
    }
    else{
        return false;
    }
}
//adds an exposure for the child and food provided
export const addExposure = async(exposure) => {
    const resp = await api.post('/exposures/add', exposure);
    return resp;
}
//gets all of the lists for the given user
export const getLists = async(user_id) => {
    const resp = await api.get(`/lists/${user_id}`);
    return resp.data;
}
//creates a new list for the given user
export const createList = async(listName,user_id) => {
    let listObject = {
        name: listName,
        user_id: user_id
    }
    const resp = await api.post(`/lists/create`, listObject);
    return resp.data;
}
//deletes the given list
export const deleteList = async(list) => {
    const resp = await api.post('/lists/delete',list); 
    return resp.data;  
}
//adds the given food to the given list
export const addFoodToList = async(list_id,food_id,user_id) => {
    let body = {
        list_id,
        food_id,
        user_id
    }
    const resp = await api.post('/lists/add',body);
    return resp.data;
}
//removes the given food from the given list
export const removeFood = async(food) => {
    const resp = await api.post('/lists/remove',food.grocerylistsfood);
    return resp.data;
}
//sends the text message with the given text object
export const sendListText = async(textObject) => {
    const resp = await api.post('/lists/sendtext', textObject);
    return resp;
}