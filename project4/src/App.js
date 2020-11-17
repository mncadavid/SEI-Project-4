import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/Auth/SplashPage';
import FoodModal from './Components/ExposureModal/FoodModal';
import ListPage from './Components/ListPage/ListPage';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import AccountPage from './Components/AccountPage';
import { loginUser, registerUser, verifyUser, getFoodData, addExposure, getLastExposure } from './services/api_helper';
import {getAllFood, addFood, getLists,createList, addFoodToList, deleteList,removeFood, sendListText} from './services/api_helper';
import { Component } from 'react';
import {Route} from 'react-router-dom';
import emailjs, {init} from 'emailjs-com';
import {categories} from './categories';
import AboutPage from './Components/AboutPage';

require('dotenv').config();

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
      openFood: false,
      foodModalData: null,
      lastExposureDates: {},
      allFood: null,
      currentChild: null,
      lists: [],
      selectedList: [],
      serverErrorMessage: ""
    }
  }
  // Calls the API helper for registering a user and then sets the current user
  // and current child based on what was returned. Sets the error message if a user
  // was not returned (i.e., there was an error registering).
  handleSignUp = async(registerData) => {
    const response = await registerUser(registerData);
    if(!response.user){
      this.setState({
        serverErrorMessage: response
      })
    }
    else{
      let currentUser = response.user;
      let currentChild = response.child;
      this.setState({
        currentUser,
        currentChild,
        serverErrorMessage: ""
      })
      this.props.history.push('/browse');
    }
  }
  // Calls the API helper for logging in a user and then sets the current user
  // and current child based on what was returned. Sets the error message if a user
  // was not returned (i.e., there was an error logging in).
  handleLogin = async (loginData) => {
    const resp = await loginUser(loginData);
    if(!resp.name){
      this.setState({
        serverErrorMessage: resp
      })
    }
    else{
      let currentUser = {
        name: resp.name,
        username: resp.username,
        id: resp.id,
        child_id: resp.child_id
      }
      let currentChild = {
        name: resp.children[0].name,
        age: resp.children[0].age
      }
      this.setState({
        currentUser,
        currentChild,
        serverErrorMessage: ""
      })
      this.props.history.push('/browse');
    }
  }
  // Calls the API helper for verifying a user and then sets the current user
  // and current child based on what was returned. If the user could not be verified it redirects
  // to the splash page.

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if(currentUser && !currentUser.id){
      console.log(currentUser);
    }
    else if(currentUser){
      this.setState({
        currentUser,
        currentChild: currentUser.children[0]
      });
    }
    else{
      this.props.history.push('/');
    }
    return true;
  }
  //Removes the authToken, removes currentUser, and redirects user to splash page. 
  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null,
      currentChild: null
    })
    this.props.history.push('/');
  }
  //Gets the food data for the food that should be displayed in the modal and opens the modal
  handleOpenFood = async (e,food_id,child_id) => {
    e.preventDefault();
    const foodData = await getFoodData(food_id,child_id);
    this.setState({
      openFood: true,
      foodModalData: foodData.data
    })
  }
  //Closes the food exposure modal if user clicks outside of the modal
  handleCloseFood = (e) => {
    if(e.currentTarget===e.target){
      this.setState({
        openFood: false,
        foodModalData: null
      })
    }
  }
  //Calls the api helper to add the food to the selected list. Sets the error message if there
  // was an error adding the food to the list.  Updates the list and empties selected list.
  handleAddToList = async (e,food) => {
    e.preventDefault();
    const lists = await addFoodToList(this.state.selectedList.id,food.id,this.state.currentUser.id);
    if((typeof lists) === 'string'){
      this.setState({
        serverErrorMessage: lists
      })
    }
    else{
      this.setState({
        lists,
        selectedList: [],
        serverErrorMessage: ""
      })
    }
  }
  //Calls the api helper to add the exposure to the food for the specific child
  handleAddExposure = async (e,exposure) => {
    e.preventDefault();
    const exposureData = await addExposure(exposure);
    this.setState({
      foodModalData: exposureData.data
    });
    this.callGetLastExposure(exposure.food_id);
  }
  //Calls the api helper to get the most recent exposure for that food and child
  //Then takes the response and formats the string to Month. Day that I want displayed on the
  //card.  If the food has not been tried before, it displays new food.
  callGetLastExposure = async (food_id) => {
    let searchObject = {
        food_id: food_id,
        child_id: this.state.currentUser.child_id 
    }
    const lastExposure = await getLastExposure(searchObject);
    if(lastExposure){
        const months = ['Jan.','Feb. ','Mar. ','Apr. ','May ','June ','July ','Aug. ','Sept. ','Oct. ','Nov. ','Dec. '];
        let fullDate = lastExposure;
        let monthIndex = fullDate.substring(5,7);
        let month = months[monthIndex-1];
        let day = fullDate = fullDate.substring(8,10);
        let lastExposureDatesCopy = this.state.lastExposureDates;
        lastExposureDatesCopy[food_id] = `${month}${day}`
        this.setState({
            lastExposureDates: lastExposureDatesCopy
        });
    }
    else{
      let lastExposureDatesCopy = this.state.lastExposureDates;
      lastExposureDatesCopy[food_id] = `New Food`;
      this.setState({
          lastExposureDates: lastExposureDatesCopy
      })
    }
  }
  //Calls the api helper to get all of the food in the database
  callGetAllFood = async () => {
    const foods = await getAllFood();
    if(foods){
        this.setState({
            allFood: foods.data
        })
    }
    return foods.data
  }
  //Calls the api helper to create a new food. Updates the all food state value
  // or sets the error message if it was unable to add the food
  handleAddFood = async (newFood) => {
    const allFoodsPlusNew = await addFood(newFood);
    if(allFoodsPlusNew && (typeof allFoodsPlusNew.data) === "string"){
      this.setState({
        serverErrorMessage: allFoodsPlusNew.data
      })
    }
    else if(allFoodsPlusNew){
        this.setState({
            allFood: allFoodsPlusNew.data,
            serverErrorMessage: ""
        })
    }
  }
  //Uses the Api helper to get all of the lists for the current user
  callGetLists = async (user_id) => {
    const lists = await getLists(this.state.currentUser.id);
    this.setState({
      lists
    })
  }
  //Uses the api helper to create a new list for the current user
  handleCreateList = async(listName) => {
    const lists = await createList(listName,this.state.currentUser.id);
    this.setState({
      lists
    })
  }
  //Uses the api helper to delete a list for the current user
  handleDeleteList = async(e) => {
    e.preventDefault();
    let listInfo = this.state.selectedList;
    listInfo.user_id = this.state.currentUser.id;
    const lists = await deleteList(listInfo);
    this.setState({
      lists: lists,
      selectedList: []
    })
  }
  //Sets the selected list based on which list was clicked on
  setSelectedList = (list_id) => {
    let list = this.state.lists.filter(x=>x.id===list_id);
    this.setState({
        selectedList: list[0]
    })
  }
  //Uses the api helper to remove the food from the list
  handleRemoveFood = async(food) => {
    const lists = await removeFood(food);
    let selectedListId = this.state.selectedList.id;
    this.setState({
      lists
    })
    this.setSelectedList(selectedListId);
  }

  //Formats the message to be sent to EmailJS, then creates the object containing the message information, and
  //finall calls the send method of emailjs to send the email.
  sendGroceryListEmail = (e,email) => {
    e.preventDefault();
    let list_items = "";

    list_items+= `<h2>${this.state.selectedList.name}</h2>`;
    list_items+= `<ul>`;
    categories.map(category => {
      list_items+= `<li>${category}<ul>`;
        this.state.selectedList.food.filter((food => food.category===category)).map(food => {
          list_items+=`<li>${food.name}</li>`;
          return true;
        })
      list_items+='</ul></li>'
      return true;
        })
    list_items+='</ul>';

    const templateParams = {
      to_name: "Juan",
      list_name: this.state.selectedList.name,
      list_items: list_items,
      to_email: email.email
    }
    
    emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID,process.env.REACT_APP_EMAIL_TEMPLATE_ID, templateParams)
    .then(response => {
      console.log('Success!', response.status, response.text);
    })
    .catch(err => {
      console.log('Failed',err);
    })
  }
  //Formats the string to be sent at the message and then uses the api helper to send the 
  //text request to the server
  handleSendText = async(phoneNumber) => {
    let message = `\nYour ${this.state.selectedList.name} List from Picky Preventer: \n`;
    this.state.selectedList.food.map(food => {
      message += food.name;
      message += '\n';
      return true;
    })
    let textObject = {
      phoneNumber: phoneNumber.phone_number,
      message: message
    }
    const resp = await sendListText(textObject);
  }

  //Once the app is loaded, verify the user. This allows us to refresh the page and still be logged in.
  async componentDidMount(){
    await this.handleVerify();
    init("user_LxVURALYlGpU0sNoWHfw9");
  }


  render(){
    return (
      <div className="App body">
        <Route
          path={["/browse","/account","/lists","/about"]} 
          render={routerProps => <Header handleLogout={this.handleLogout}/>}
        />
        {this.state.openFood && 
          <FoodModal 
            handleCloseFood={this.handleCloseFood}
            foodData={this.state.foodModalData}
            handleAddExposure={this.handleAddExposure}
            currentUser={this.state.currentUser}/>}
        <Route
          exact path="/"
          render={routerProps => <SplashPage 
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          serverErrorMessage={this.state.serverErrorMessage}
          {...routerProps}/>}
        />
        <Route
          path="/lists"
          render={routerProps => <ListPage 
          {...routerProps} 
          user={this.state.currentUser}
          lists={this.state.lists}
          handleCreateList={this.handleCreateList}
          selectedList={this.state.selectedList}
          setSelectedList={this.setSelectedList}
          handleDeleteList={this.handleDeleteList}
          handleRemoveFood={this.handleRemoveFood}
          sendGroceryListEmail={this.sendGroceryListEmail}
          callGetLists={this.callGetLists}
          lastExposureDates={this.state.lastExposureDates}
          handleSendText={this.handleSendText}/>} 
        />
        <Route 
          path="/browse"
          render={routerProps => <BrowsePage 
            handleOpenFood={this.handleOpenFood} 
            handleAddToList={this.handleAddToList}
            {...routerProps}
            currentUser={this.state.currentUser}
            callGetLastExposure={this.callGetLastExposure}
            lastExposureDates={this.state.lastExposureDates}
            handleAddFood={this.handleAddFood}
            callGetAllFood={this.callGetAllFood}
            allFood={this.state.allFood}
            lists={this.state.lists}
            setSelectedList={this.setSelectedList}
            callGetLists={this.callGetLists}
            selectedList={this.state.selectedList}
            serverErrorMessage={this.state.serverErrorMessage}/>} 
        />
        <Route
          path="/account"
          render={routerProps => <AccountPage 
            {...routerProps} 
            user={this.state.currentUser} 
            child={this.state.currentChild}
          />} 
        />
        <Route
          path="/about"
          render={routerProps => <AboutPage
          {...routerProps}
          />}
        />
        <Route
          path={["/browse","/account","/lists","/about"]} 
          render={routerProps => <Footer/>}
        />
      </div>
    );
  }
}

export default App;
