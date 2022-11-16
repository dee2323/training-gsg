import React,
  {
  Component
}

from "react";
import headerStyle from "./style.module.css";
import ListItems from "./ListItems/ListItems";
import logo from "./logo.png";
import ListIcons from "./ListIcons/ListIcons";
import menu from './icons/menu.png'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (<div className= {`${headerStyle.container} `}

      > 
      <Link to='/' className= {
        headerStyle.logo
      }  style={{display:'block'}} > 
      <img src= {
        logo
      }

      alt="matter logo" className= {
        headerStyle.logo
      } 
style={{width:"100px"}}
      /></Link>
    

      <ListItems /> <img src= {
        menu
      }

      alt="menu"className= {
        headerStyle.menu
      }

      /> {
        " "
      }

      <ListIcons /> </div>);
  }
}