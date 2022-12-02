import React, { useEffect, useState } from 'react'
import Button from '../reusedComponent/Button/Button'
import style from './LoginPage.module.css'
import axios from 'axios'
const LoginPage = () => {
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async function(e){
        e.preventDefault();
        const data=await axios.post('http://restapi.adequateshop.com/api/authaccount/login',{
          email:'',
          password:''
        });
        console.log(data)
    }
  return (
    <div className={style.formContainerr}>
    <form onSubmit={handleSubmit}>
    <label for=''>UserName</label>
    <input type={'text'} placeholder="Enter UserName" value={userName} onChange={(e)=>{setUserName(e.target.value)
    console.log(userName)}}/>
    <label for=''>password</label>
    <input type={'password'} placeholder="Enter Password"  onChange={(e)=>{
        setPassword(e.target.value)}}/>
    <Button text="LOGIN" />
  </form>
    </div>

  )
}

export default LoginPage
