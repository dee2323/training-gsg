import React, { Component } from 'react'
import Card from '../../reusedComponent/Card/Card'
import LeftSide from './LeftSide/LeftSide'
import style from './style.module.css'
export default class Apperale extends Component {
  state={
    filter:'jewelery',
    showAll:true,
  }

  setFilter=(filter)=>{
    this.setState({filter,
    showAll:false});
  }
  setShowAll=()=>{
    this.setState({
      showAll:true
    })
  }
  
  render() {
    const products=this.props.products;
    const listAllProducts=products.length>0?products.map(item=>  <div style={{width:"33%",padding:"1rem"}}><Card  lable={item.description} price={item.price} img={item.image} index={item.id} /></div> ):<div>loading</div>;
    const listFilteredProducts=products.length>0?products.filter(item=> item.category===this.state.filter).map(item=>  <div style={{width:"33%",padding:"1rem"}}><Card  lable={item.description} price={item.price} img={item.image} index={item.id} /></div> ):<div>loading</div>; 

    return (
    
      <>
      <div className={style.container}>
       <div className={style.filter}>
       <LeftSide setFilter={this.setFilter} setShowAll={this.setShowAll} />
       </div>
       <div className={style.products}>
      { this.state.showAll?listAllProducts:listFilteredProducts}
       </div>
      </div>
      </>
    );
  }
}
