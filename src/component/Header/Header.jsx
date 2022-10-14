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

export default class Header extends Component {
  render() {
    return (<div className= {`${headerStyle.container} `}

      > <img src= {
        logo
      }

      alt="matter logo"className= {
        headerStyle.logo
      }

      /> {
        " "
      }

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