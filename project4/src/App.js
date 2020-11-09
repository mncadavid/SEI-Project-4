import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SplashPage from './Components/SplashPage';
import CardContainer from './Components/CardContainer';

function App() {
  return (
    <div className="App body">
      <Header />
      {/* <SplashPage /> */}
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
