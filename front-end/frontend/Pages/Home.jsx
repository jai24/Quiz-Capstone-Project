import React, { useState } from 'react';
import './Css/Home.css';

const Home = () => {

    const [visiblity, setVisibitly] = useState('Sign Up');
    const [activeButton, setActiveButton] = useState('Sign Up');
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        setVisibitly(buttonName);
    };



    return (
        <>
            <div className="container">
                <div className="title"><h1>QUIZZIE</h1></div>
                <div className="signup-signin">
                    {/* <button onClick={()=>setVisibitly('Sign Up')}>Sign Up</button>
                    <button onClick={()=>setVisibitly('Log In')}>Log In</button> */}
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
                    <form action="submit">
                        {visiblity === 'Log In' ? <></> : <label htmlFor="name"> Name
                            <input type="text" placeholder='Enter your name' name="name" id="name" />
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
