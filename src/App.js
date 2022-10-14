
import './App.css';
import AddsBar from './component/AddsBar/AddsBar'
import Header from './component/Header/Header'
import Slider from './component/Slider/Slider'
import Features from './component/Features/Features'
import About from './component/About/About';
import Shop from './component/Shop/Shop';
import Seen from './component/Seen/Seen';
import Footer from './component/Footer/Footer';
import Recomanded from './component/Recomanded/Recomanded';
import Explore from './component/Explore/Explore';


function App() {
  return (
   <>
   <AddsBar />
   <Header />
   <Slider />
   <Features />
   <About />
   <Explore />
   <Shop />
   <Recomanded />
   <Seen />
   <Footer />
   </>
  );
}

export default App;
