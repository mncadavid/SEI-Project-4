import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/Auth/SplashPage';
import FoodModal from './Components/ExposureModal/FoodModal';
import ListPage from './Components/ListPage/ListPage';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import AccountPage from './Components/AccountPage';
import { loginUser, registerUser, verifyUser } from './services/api_helper';
import { Component } from 'react';
import {Route} from 'react-router-dom';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null,
      openFood: false
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

  }
  handleLogin = async (e,loginData) => {
    e.preventDefault();
    const currentUser = await loginUser(loginData);
    this.setState({
      currentUser
    })
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

  handleOpenFood = (e,food) => {
    e.preventDefault();
    console.log(`${food}`);
    this.setState({
      openFood: true
    })
  }
  handleCloseFood = (e) => {
    if(e.currentTarget===e.target){
      this.setState({
        openFood: false
      })
    }
  }

  handleAddToList = (e,food) => {
    e.preventDefault();
    console.log(`${food}`);
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
            handleCloseFood={this.handleCloseFood}/>}
        <Route
          exact path="/"
          render={routerProps => <SplashPage 
          handleLogin={this.handleLogin}
          handleVerify={this.handleVerify}
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
            {...routerProps}/>} 
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
