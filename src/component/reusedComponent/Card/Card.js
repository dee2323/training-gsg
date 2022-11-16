import React, { Component } from 'react'
import style from'./style.module.css'
import {data} from './response'
import PopUp from '../../Features/Modal/Modal'
export default class Card extends Component {
  state={
    show:false,
    products:data.products,
    
  }
  render(){
    return (
      <div className={`${style.card}`}  onMouseOver={()=>this.setState({...this.state,
          show:true})} onMouseOut={()=>this.setState({...this.state,
            show:false})} onMouseLeave={()=>this.setState({...this.state,
              show:false})} >
      <img
        src={this.props.img}
        alt=""
        style={{ width: "220px", height: "300px" }}
      />
  
      <h3 style={{textOverflow: "ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>
        {this.props.lable} <br />
        <br /> {this.props.price}
      </h3>
      <PopUp show={this.state.show} products={this.state.products[this.props.index]} index={this.props.index} />
    </div>
    )
  }

}
