import React, { useEffect, useState } from 'react'
import style from './LoginPage.module.css'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email:'Developer5@gmail.com',
    password:'123456'
  }); //{name , email, password}
  const [cookie, setCookie] = useCookies();
  const [success,setSuccess]=useState(false)
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const handleSubmit = async () => {

    const {
      data: {
        data: { Token, Name },
      },
    } = await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      formData
    );
    setCookie("token", Token);
    setCookie("name", Name);
    
    setSuccess(true)
  };
  return (
    <div className={style.container}>
    <div className={style.form}>
    <input
        placeholder="Email"
        value={formData.email}
        onChange={handleEmailChange}
      />
      <input
        placeholder="Password"
        type='password'
        value={formData.password}
        onChange={handlePasswordChange}
      />
      <button className={style.btn} onClick={handleSubmit}> <Link to='/'  style={{color:'black',textDecoration:'none',display:'block',width:'100%',color:'#fff',border:'1px solid #fff',padding:'1rem',marginTop:'1rem',backgroundColor:' rgba(51, 51, 58, 1)'}} >{"Login"}</Link></button>
    </div></div>
  )
}

export default LoginPage
