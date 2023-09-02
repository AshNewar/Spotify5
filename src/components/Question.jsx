import React from 'react'
import Login from './Login'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Question = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/recommendation");

    }
    return (
        <div className='form'>
            <h1 className='login-text'>Few Question About Your Taste</h1>
            <form className='form'>
                <div>
                    <label className='login-text'>Whats Yours Mood</label>
                    <select className="cars" id="cars">
                        <option value="volvo">Happy</option>
                        <option value="saab">Sad</option>
                        <option value="opel">Cheer</option>
                        <option value="audi">CLoudy</option>
                        <option value="audi">Motivated</option>
                    </select>

                </div>
                <div>
                    <label className='login-text'>What's your taste</label>
                    <select name="cars" id="cars">
                        <option value="bolly">BollyWood</option>
                        <option value="holly">HollyWood</option>
                        <option value="tolly">TollyWood</option>
                    </select>

                </div>
                <button className='login-button' onClick={handleSubmit}>Submit</button>

            </form>



        </div>
    )
}

export default Question
