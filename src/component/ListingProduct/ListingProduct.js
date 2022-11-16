import React, { Component } from 'react'
import AddsBar from '../AddsBar/AddsBar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Hero from './Hero/Hero'
import axios from 'axios'
import SortBy from './SortBy/SortBy'
import Apperale from './Apperale/Apperale'
import img from './img.png'
export default class ListingProduct extends Component {
  state={
    products:[],
    isSorted:false,
    sortedProducts:[]
  }
  setSorted=()=>{
    console.log('deema')
    this.setState({isSorted:true})}

    removeSort=()=>{
      console.log('dalia')
      this.setState({isSorted:false})}
    
  getData=async()=>{
    const p= await axios.get("https://fakestoreapi.com/products");
    
    this.setState({ products: p.data,
      sortedProducts:[...p.data].sort((a,b)=>a.price-b.price)});
  } 
 
  componentDidMount(){
    this.getData();
  }
  render() {
    
    return (
      <>
      
<Hero title="Apparels" desc="White Gold began gaining popularity in the early 1900’s as an alternative to platinum. " img={img}/>
<SortBy setSorted={ this.setSorted} removeSort={this.removeSort} />  
{ <Apperale  products={this.state.isSorted? this.state.sortedProducts: this.state.products}/> }     

      </>
    )
  }
}
