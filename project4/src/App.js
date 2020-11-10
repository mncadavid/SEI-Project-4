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

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
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

  componentDidMount(){
    this.handleVerify();
  }

  render(){
    return (
      <div className="App body">
        {/* <Header /> */}
        <SplashPage 
          handleLogin={this.handleLogin}
          handleVerify={this.handleVerify}
          handleSignUp={this.handleSignUp}/>
        {/* <FoodModal />  */}
        {/* <ListPage /> */}
        {/* <BrowsePage /> */}
        {/* <AccountPage />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
