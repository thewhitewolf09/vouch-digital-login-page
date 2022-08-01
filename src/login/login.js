import React from 'react'
import Header from './header'
import "./login.css"
import { useState } from 'react'

const Login = () => {
    let responseEl = document.getElementById('response');
    const [data, setdata] = useState({
        email: '',
        password: ''
    })

    let name, value;
    const handleLogin = (e) => {
        name = e.target.name
        value = e.target.value
        setdata({ ...data, [name]: value })
    }


    const PostLogin = async (e) => {
        e.preventDefault()
        const { email, password } = data

        const res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json " },
            body: JSON.stringify({ email, password })
        })
        const datas = await res.json();
        if (datas.token){
            responseEl.textContent = `Token : ${datas.token}`
            responseEl.style.color = "green"
        }
        else{
            responseEl.textContent = `Error : ${datas.error}`
            responseEl.style.color = "red"
        }
    }
    return (
        <div>
            <Header />
            <div className="main-body">
                <div className='login-form'>
                    <h1>Welcome Back</h1>
                    <p>Sub-title text goes here</p>
                    <form className='form-container' method="POST" onSubmit={PostLogin}>
                        <input type="text" placeholder="Email Address*" className='form-input' value={data.email} name='email' onChange={handleLogin} />
                        <input type="password" placeholder="Password*" className='form-input' value={data.password} name='password' onChange={handleLogin} />
                        <button type="submit">Login</button>
                        <div>
                            <span><input type="checkbox" /> Remember Password</span>
                            <span>Forget Password?</span>
                        </div>
                    </form>
                    <br/>
                    <p id='response' style={{fontSize:'20px', fontWeight:'bold'}}></p>
                </div>
                <div className='img-container'>
                    <img src='https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_960_720.png' className='img' alt='image'/>
                </div>
            </div>
        </div>
    )
}

export default Login 