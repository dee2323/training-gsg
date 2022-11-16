import React, { Component } from 'react'
import style from './style.module.css'
export default class SortBy extends Component {
  render() {
    return (
      <div className={style.container}>
        <h3>Women</h3>
        <form>
        <label for="filters">
        Sorted by 
        </label>
        <select name="filters" id="filters" onChange={(e) => e.target.value>0? this.props.setSorted():this.props.removeSort()}>
          <option value="0" >Rest</option>
          <option value="1">Price</option>
        </select>
        </form>
      </div>
    )
  }
}
