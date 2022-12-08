import React from 'react'
import Slider from '../Slider/Slider'
import Features from '../Features/Features'
import About from '../About/About'
import Recomanded from '../Recomanded/Recomanded'
import Shop from '../Shop/Shop'
import Seen from '../Seen/Seen'
import Explore from '../Explore/Explore'


const Home =()=> {
  // const location = useLocation();
  //   const state = location.state;
  //   console.log(state,'sss');
return (
 <>
 <Slider />
 <Features />
 <About />
 <Explore />
 <Shop />
 <Recomanded />
 <Seen />

 </>
    )
  }
export default Home;
