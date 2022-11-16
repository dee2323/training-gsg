import React, { Component } from 'react'
import AddsBar from '../AddsBar/AddsBar'
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Features from '../Features/Features'
import About from '../About/About'
import Recomanded from '../Recomanded/Recomanded'
import Shop from '../Shop/Shop'
import Seen from '../Seen/Seen'
import Explore from '../Explore/Explore'
import Footer from '../Footer/Footer'

export default class Home extends Component {
  render() {
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
}
