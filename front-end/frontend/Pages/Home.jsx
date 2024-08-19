import React, { useState } from 'react';
import './Css/Home.css';

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
    };


    const handleChange = (e)=>{
            setValue({...value, [e.target.value] : e.target.value })
    }

    function handleSubmit(){
        e.preventDefault()
            try{
                if(!value.name)
                    setError("Name is not valid")
                
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
                            <input type="text" onChange={handleChange} placeholder={error} name="name" id="name" />
                        </label>}

                        <label htmlFor="email">Email
                            <input type="email" placeholder='Enter your email address' name="email" id="email" />
                        </label>
                        <label htmlFor="password">Password
                            <input type="password" placeholder='Enter your password' name="password" id="password" />
                        </label>
                        {visiblity === 'Log In' ? <></> : <label htmlFor="password2">Confirm password
                            <input type="password" placeholder='Enter your password again' name="password2" id="password2" />
                        </label>}
                        <button className='submit-button'>{visiblity}</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home
