import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/SplashPage';
import CardContainer from './Components/CardContainer';
import FoodModal from './Components/FoodModal';
import AddFood from './Components/AddFood';
import ListPage from './Components/ListPage';

function App() {
  return (
    <div className="App body">
      <Header />
      {/* <SplashPage /> */}
      {/* <CardContainer />
      <FoodModal /> */}
      <ListPage />
      <AddFood />
      <Footer />
    </div>
  );
}

export default App;
