import React, { Component } from 'react'
import style from './style.module.css'
export default class LeftSide extends Component {
  state={
    show:false,
  }

  render() {
    return (
        <>
        <div className={style.filter}>
        <p>filters</p><p style={{color:'orange',textAlign:'end',cursor:"pointer"}}  onClick={this.props.setShowAll}>Rest</p>
        <label for="filter" onClick={()=>this.setState({
         show:!this.state.show,
        })}>
         Apperale ▼
        
         </label>
         { this.state.show&& <div style={{display:"inline-block"}}>
         <span onClick={this.props.setShowAll}>all</span>
         <span onClick={()=>this.props.setFilter("women's clothing")}>women's clothing</span>
         <span onClick={()=>this.props.setFilter("men's clothing")}>men's clothing</span>
         <span onClick={()=>this.props.setFilter('electronics')}>electronics</span>
         <span onClick={()=>this.props.setFilter("jewelery")}>
         jewelery</span></div>}
        </div>
       
        </>
       
    )
  }
}
