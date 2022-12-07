import React, { useEffect, useState } from 'react'
import style from './LoginPage.module.css'
import axios from 'axios'
import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const [formData, setFormData] = useState({}); //{name , email, password}
  const [cookie, setCookie] = useCookies();
  const [token,setToken]=useState('')
  const [success,setSuccess]=useState(false)
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(formData);
    let Token='';let Name=''
     await axios.post(
      "http://restapi.adequateshop.com/api/authaccount/login",
      formData
    ).then(res=>{ 
    Token=res?.data?.data?.Token||'';
    Name=res?.data?.data?.Name||''
    console.log(Token);
    console.log(Name)
    console.log(res)
Token?setSuccess(true):setSuccess(false)
    
    })
    setToken(Token)
    setCookie("token", token);
    setCookie("name", Name);
  };
  return (
    
    <div className={style.form}>
    <input
        placeholder="Email"
        value={'Developer5@gmail.com'}
        onChange={handleEmailChange}
      />
      <input
        placeholder="Password"
        type='password'
        value={'123456'}
        onChange={handlePasswordChange}
      />
      <button className={style.btn} onClick={handleSubmit} > <Link to='/' style={{color:'black',textDecoration:'none'}}>{"Login"}</Link></button>
    </div>
  )
}

export default LoginPage
