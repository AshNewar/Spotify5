import React from 'react'
import Login from './Login'
import "./Login.css"

const Question = () => {
    return (
        <div>
            <h1>Few Question About Your Taste</h1>
            <form className='form'>
                <div>
                    <label for="cars">Whats Yours Mood</label>
                    <select name="cars" id="cars">
                        <option value="volvo">Happy</option>
                        <option value="saab">Sad</option>
                        <option value="opel">Cheer</option>
                        <option value="audi">CLoudy</option>
                        <option value="audi">Motivated</option>
                    </select>

                </div>
                <div>
                    <label for="cars">Whats Yours Taste</label>
                    <select name="cars" id="cars">
                        <option value="volvo">BollyWood</option>
                        <option value="saab">HollyWood</option>
                        <option value="opel">TollyWood</option>
                    </select>

                </div>
                <button className='login-button'>Submit</button>

            </form>



        </div>
    )
}

export default Question
