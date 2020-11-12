import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/Auth/SplashPage';
import FoodModal from './Components/ExposureModal/FoodModal';
import ListPage from './Components/ListPage/ListPage';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import AccountPage from './Components/AccountPage';
import { loginUser, registerUser, verifyUser, getFoodData, addExposure, getLastExposure } from './services/api_helper';
import { Component } from 'react';
import {Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
      openFood: false,
      foodData: null,
      lastExposureDates: {}
    }
  }
  handleSignUp = async(e,registerData) => {
    e.preventDefault();
    console.log(`RegisterData: ${registerData}`)
    const currentUser = await registerUser(registerData);
    console.log(`Current User: ${currentUser}`)
    this.setState({
      currentUser
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
    this.setState({
      currentUser
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
  }

  handleOpenFood = async (e,foodId,childId) => {
    e.preventDefault();
    const foodData = await getFoodData(foodId,childId);
    console.log(foodData);
    this.setState({
      openFood: true,
      foodData: foodData.data
    })
  }
  handleCloseFood = (e) => {
    if(e.currentTarget===e.target){
      this.setState({
        openFood: false,
        foodData: null
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
    console.log(`Added: ${exposureData.data}`)
    this.setState({
      foodData: exposureData.data
    });


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

  componentDidMount(){
    this.handleVerify();
  }


  render(){
    return (
      <div className="App body">
        <Header />
        {this.state.openFood && 
          <FoodModal 
            handleCloseFood={this.handleCloseFood}
            foodData={this.state.foodData}
            handleAddExposure={this.handleAddExposure}
            currentUser={this.state.currentUser}/>}
        <Route
          exact path="/"
          render={routerProps => <SplashPage 
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          {...routerProps}/>}
        />
        {/* <FoodModal />  */}
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
            foodData={this.state.foodData}
            callGetLastExposure={this.callGetLastExposure}
            lastExposureDates={this.state.lastExposureDates}/>} 
        />
        <Route
          path="/account"
          render={routerProps => <AccountPage {...routerProps}/>} 
        />
        <Footer />
      </div>
    );
  }
}

export default App;
