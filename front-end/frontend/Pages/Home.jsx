import React, { useState } from 'react';
import './Css/Home.css';
import { login } from '../services/auth';
import { signup } from '../services/auth';

const Home = () => {

    const [visiblity, setVisibitly] = useState('Sign Up');
    const [activeButton, setActiveButton] = useState('Sign Up');
    const [value,setValue] = useState({
        name:'',
        email: '',
        password: '',
        password2:''
    })

    const [error,setError] = useState("")

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
            setVisibitly(buttonName);
        setError('')
        setValue({name:'',
            email: '',
            password: '',
            password2:''
        })
    };


    const handleChange = (e)=>{
            setValue({...value, [e.target.name] : e.target.value })
            setError('')
    }

    async function  handleSubmit(e){
        e.preventDefault()
        const {name, email, password, password2} = value;
        if(visiblity === 'Sign Up'){
            if(!name){
                setValue(prev=>({...prev,name:''}))
                setError("Name is required")
                return
            }
            if(!email){
                setValue(prev=>({...prev,email:''}))
                setError("Email is required")
                return
            }
            if(!password){
                setValue(prev=>({...prev,password:''}))
                setError("Password is required")
                return
            }
            if(!password2){
                setValue(prev=>({...prev,password2:''}))
                setError("Confirm your password")
                return
            }
            if(password !== password2){
                setValue(prev=>({...prev,password2:''}))
                setError("Password is not matching")
                return
        }
    }
        if(visiblity ==='Log In'){
            if(!email){
                setValue(prev=>({...prev,email:''}))
                setError("Email is required")
                return
            }
            if(!password){
                setValue(prev=>({...prev,password:''}))
                setError("Password is required")
                return
            }
        }

            try{
               if(visiblity === 'Log In'){
                    const {email, password} = value;
                    const response = await login({email,password})
               }
               if(visiblity === 'Sign Up'){
                const {name,email, password,password2} = value;
                const response = await signup({name,email, password,password2})
           }
                
            }catch(error){
                console.log("Error")
            }
    }

    return (
        <>
            <div className="container">
                <div className="title"><h1>QUIZZIE</h1></div>
                <div className="signup-signin">
                    <button
                        className={activeButton === 'Sign Up' ? 'active' : ''}
                        onClick={() => handleButtonClick('Sign Up')}
                    >Sign Up</button>
                    <button
                        className={activeButton === 'Log In' ? 'active' : ''}
                        onClick={() => handleButtonClick('Log In')}
                    >Log In</button>
                </div>
                <div className="value-box">
                    <form onSubmit={handleSubmit}>
                        {visiblity === 'Log In' ? <></> : <label htmlFor="name"> Name
                            <input type="text" onChange={handleChange} placeholder={value.name == '' ? error: 'Enter your name'} name="name" id="name" value={value.name} />
                        </label>}

                        <label htmlFor="email">Email
                            <input type="email" onChange={handleChange} placeholder={value.email == '' ? error: 'Enter your email'} name="email" id="email" value={value.email}/>
                        </label>
                        <label htmlFor="password">Password
                            <input type="password" onChange={handleChange} placeholder={value.password == '' ? error: 'Enter your your password'} name="password" id="password"  value={value.password} />
                        </label>
                        {visiblity === 'Log In' ? <></> : <label htmlFor="password2">Confirm password
                            <input type="password" onChange={handleChange} placeholder={value.password2 == '' ? error: 'Re-enter your password'}  name="password2" id="password2" value={value.password2} /><br />
                        </label>}
                        <button className='submit-button'>{visiblity}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
