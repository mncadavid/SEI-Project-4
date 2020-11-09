import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/SplashPage';
import FoodModal from './Components/ExposureModal/FoodModal';
import ListPage from './Components/ListPage/ListPage';
import BrowsePage from './Components/BrowsePage/BrowsePage';
import AccountPage from './Components/AccountPage';

function App() {
  return (
    <div className="App body">
      <Header />
      {/* <SplashPage /> */}
      {/* <FoodModal />  */}
      {/* <ListPage /> */}
      {/* <BrowsePage /> */}
      <AccountPage />
      <Footer />
    </div>
  );
}

export default App;
