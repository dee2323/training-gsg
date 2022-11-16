import React, { Component } from 'react'
import style from './Hero.module.css'
export default class Hero extends Component {
  render() {
    return (
      <div  className={style.heroContainer}>
      <img src={this.props.img} alt='' />
        <h2 className={style.header}>{this.props.title}</h2>
        <p className={style.p}>{this.props.desc}</p>
      </div>
    )
  }
}
