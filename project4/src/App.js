import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/Auth/SplashPage';
import FoodModal from './Components/ExposureModal/FoodModal';
import ListPage from './Components/ListPage/ListPage';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import AccountPage from './Components/AccountPage';
import { loginUser, registerUser, verifyUser, getFoodData, addExposure, getLastExposure } from './services/api_helper';
import {getAllFood, addFood} from './services/api_helper';
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
      currentChild: null
    }
  }
  handleSignUp = async(e,registerData) => {
    e.preventDefault();
    console.log(`RegisterData: ${registerData}`)
    const response = await registerUser(registerData);
    let currentUser = response.user;
    let currentChild = response.child;
    console.log(`Current User: ${currentUser}`)
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
      userId: resp.id,
      childId: resp.childId
    }
    let currentChild = {
      name: resp.Children[0].name,
      age: resp.Children[0].age
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
  }

  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })
    this.props.history.push('/');
  }

  handleOpenFood = async (e,foodId,childId) => {
    e.preventDefault();
    const foodData = await getFoodData(foodId,childId);
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

  handleAddToList = (e,food) => {
    e.preventDefault();
    console.log(`${food}`);
  }
  handleAddExposure = async (e,exposure) => {
    e.preventDefault();
    const exposureData = await addExposure(exposure);
    this.setState({
      foodModalData: exposureData.data
    });
    this.callGetLastExposure(exposure.foodId);
  }

  callGetLastExposure = async (foodId) => {
    let searchObject = {
        foodId: foodId,
        childId: this.state.currentUser.childId 
    }
    const lastExposure = await getLastExposure(searchObject);
    if(lastExposure){
        const months = ['Jan.','Feb. ','Mar. ','Apr. ','May ','June ','July ','Aug. ','Sept. ','Oct. ','Nov. ','Dec. '];
        let fullDate = lastExposure;
        let monthIndex = fullDate.substring(5,7);
        let month = months[monthIndex-1];
        let day = fullDate = fullDate.substring(8,10);
        let lastExposureDatesCopy = this.state.lastExposureDates;
        lastExposureDatesCopy[foodId] = `${month}${day}`
        this.setState({
            lastExposureDates: lastExposureDatesCopy
        });
    }
    else{
      let lastExposureDatesCopy = this.state.lastExposureDates;
      lastExposureDatesCopy[foodId] = `New Food`;
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

  componentDidMount(){
    this.handleVerify();
  }


  render(){
    return (
      <div className="App body">
        {!this.state.currentUser && <Header handleLogout={this.handleLogout}/>}
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
          render={routerProps => <ListPage {...routerProps}/>} 
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
            allFood={this.state.allFood}/>} 
        />
        <Route
          path="/account"
          render={routerProps => <AccountPage 
            {...routerProps} 
            user={this.state.currentUser} 
            child={this.state.currentChild}
          />} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
