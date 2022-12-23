import React, { useEffect, useState } from 'react'
import iconsStyle from './style.module.css'
import axios from 'axios'
import { useCookies } from "react-cookie";

import search from "../icons/search.svg";
import heart from "../icons/heart.svg";
import shape from "../icons/Shape.svg";
import { Link } from 'react-router-dom';

const ListIcons = () => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/users/148307", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => setUserData(user.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://restapi.adequateshop.com/api/users/148307", {
        headers: {
          Authorization: `Bearer ${cookie.token}`,
        },
      })
      .then((user) => setUserData(user.data));
  }, [userData.profilepicture]);
  return (
    <ul className={iconsStyle.icons}>

      {cookie.token ? <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
        <div style={{ height: '60px', width: '60px', borderRadius: '30px', marginRight: '4px' }}><img src={userData.profilepicture} style={{ height: '100%', width: '100%', borderRadius: '50%' }} /></div>
        Hello {cookie.name}
      </div> :
        <li className={iconsStyle.login}>
          <Link to={"login"} style={{ color: 'black', textDecoration: 'none' }}>{"Login"}</Link></li>}
      <li className={iconsStyle.img}>
        <img src={search} alt="search icon" />
      </li>
      <li className={iconsStyle.img}>

        <img src={heart} alt="heart icon" />
      </li>
      <li className={iconsStyle.img}>

        <img src={shape} alt="shape icon" />
      </li>
      {cookie.token ? <li className={iconsStyle.login}>
        <button style={{ all: 'unset' }} onClick={() => { removeCookie('token') }}><Link to={"/"} style={{ color: 'black', textDecoration: 'none', marginLeft: '.9rem' }}>{"Logout"}</Link></button>
      </li> : ''}
    </ul>
  );
}
export default ListIcons
