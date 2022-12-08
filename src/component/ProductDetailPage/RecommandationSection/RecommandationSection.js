import React, { Component } from "react";
import style from "./style.module.css";
import img1 from "../../Features/Products/images/img1.png";
import img2 from "../../Features/Products/images/img2.png";
import img3 from "../../Features/Products/images/img3.png";
import img4 from "../../Features/Products/images/img4.png";
import Card from "../../../component/reusedComponent/Card/Card";
import axios from 'axios'


export default class Products extends Component {
  state={
    show:false,
    products:[],
    index:-2
  }
  componentDidMount(){
    axios.get('https://dummyjson.com/products').then(res=>this.setState({
      ...this.state,
      products:res.data.products
    }))
    
  }
  chosenItem=(boolean)=>boolean
  render() {
    console.log(this.state)
    const images = [img1, img2, img3, img4];
    return (
      <>
      
      <h2>You May Also Like</h2>
      <div style={{width:"33%",padding:"1rem" ,display:'flex',marginLeft:'10rem',marginTop:'5rem',marginBottom:'-2rem'}}>
        {images.map((item,index) => (
          <div className={style.featureContainer}>
            <div className={`${style.row} `}  >
            <Card  lable="Pueraria Mirifica And Study Phyto Estrogens" price="$599.00" img={item} index={index} />
           
            </div>
            
          </div>
        ))}
        </div>
  
      </>
    );
  }
}
