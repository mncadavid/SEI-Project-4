import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/SplashPage';
import FoodModal from './Components/FoodModal';
import ListPage from './Components/ListPage';
import BrowsePage from './Components/BrowsePage';

function App() {
  return (
    <div className="App body">
      <Header />
      {/* <SplashPage /> */}
      {/* <FoodModal />  */}
      {/* <ListPage /> */}
      <BrowsePage />
      <Footer />
    </div>
  );
}

export default App;
