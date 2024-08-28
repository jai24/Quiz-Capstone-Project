import React,{useState} from 'react';
import './Css/Popup.css';


export function Popup({ togglePopup }) {
    const [type, setType] = useState('')
    const handleTypeSelection = (type) => {
        setType(type);
      };
    
    return (
        <div className="popup-container">
            <div className="popup-style">
                <form>
                    <input type="text" className="quiz-name" placeholder='Quiz Name' />
                    <div className='poll-button'>
                        <span style={{ color: '#9F9F9F' }}>Quiz Type</span>
                        <button type="button" className={type === 'Q & A' ? 'selected' : ''}
                            onClick={() => handleTypeSelection('Q & A')}> Q & A </button>
                        <button type="button" className={type === 'Poll Type' ? 'selected' : ''}
                            onClick={() => handleTypeSelection('Poll Type')}>Poll Type</button>
                    </div>
                    <div className='action-button'>
                        <button onClick={togglePopup}>Close</button>
                        <button >Continue</button></div>
                </form>
            </div>
        </div>
    );
};

