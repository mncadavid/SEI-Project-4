import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/Auth/SplashPage';
import FoodModal from './Components/ExposureModal/FoodModal';
import ListPage from './Components/ListPage/ListPage';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import AccountPage from './Components/AccountPage';
import { loginUser, registerUser, verifyUser, getFoodData, addExposure, getLastExposure } from './services/api_helper';
import {getAllFood, addFood, getLists,createList, addFoodToList, deleteList,removeFood} from './services/api_helper';
import { Component } from 'react';
import {Route} from 'react-router-dom';


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
      selectedList: []
    }
  }
  handleSignUp = async(e,registerData) => {
    e.preventDefault();
    const response = await registerUser(registerData);
    let currentUser = response.user;
    let currentChild = response.child;
    this.setState({
      currentUser,
      currentChild
    })
    this.props.history.push('/browse');

  }
  handleLogin = async (e,loginData) => {
    e.preventDefault();
    const resp = await loginUser(loginData);
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
      currentChild
    })
    this.props.history.push('/browse');
  }

  handleVerify = async () => {
    const currentUser = await verifyUser();
    if(currentUser){
      this.setState({currentUser});
    }
    return true;
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })
    this.props.history.push('/');
  }

  handleOpenFood = async (e,food_id,child_id) => {
    e.preventDefault();
    const foodData = await getFoodData(food_id,child_id);
    this.setState({
      openFood: true,
      foodModalData: foodData.data
    })
  }
  handleCloseFood = (e) => {
    if(e.currentTarget===e.target){
      this.setState({
        openFood: false,
        foodModalData: null
      })
    }
  }
  handleAddToList = async (e,food) => {
    e.preventDefault();

    const lists = await addFoodToList(this.state.selectedList.id,food.id,this.state.currentUser.id);
    this.setState({
      lists,
      selectedList: []
    })
  }
  handleAddExposure = async (e,exposure) => {
    e.preventDefault();
    const exposureData = await addExposure(exposure);
    this.setState({
      foodModalData: exposureData.data
    });
    this.callGetLastExposure(exposure.food_id);
  }

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
          lastExposureDate: lastExposureDatesCopy
      })
    }
}

callGetAllFood = async () => {
  const foods = await getAllFood();
  if(foods){
      this.setState({
          allFood: foods.data
      })
  }
}
handleAddFood = async (e,newFood) => {
  e.preventDefault();
  const allFoodsPlusNew = await addFood(newFood);
  if(allFoodsPlusNew){
      this.setState({
          allFood: allFoodsPlusNew.data
      })
  }
}
callGetLists = async (user_id) => {
  const lists = await getLists(this.state.currentUser.id);
  this.setState({
    lists
  })
}
handleCreateList = async(listName) => {
  const lists = await createList(listName,this.state.currentUser.id);
  this.setState({
    lists
  })
}
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
setSelectedList = (list_id) => {
  let list = this.state.lists.filter(x=>x.id===list_id);
  this.setState({
      selectedList: list[0]
  })
}
handleRemoveFood = async(food) => {
  const lists = await removeFood(food);
  let selectedListId = this.state.selectedList.id;
  this.setState({
    lists
  })
  this.setSelectedList(selectedListId);
}
  async componentDidMount(){
    await this.handleVerify();
  }


  render(){
    return (
      <div className="App body">
        <Route
          path={["/browse","/account","/lists"]} 
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
          handleRemoveFood={this.handleRemoveFood}/>} 
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
            callGetLists={this.callGetLists}/>} 
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
          path={["/browse","/account","/lists"]} 
          render={routerProps => <Footer/>}
        />
      </div>
    );
  }
}

export default App;
