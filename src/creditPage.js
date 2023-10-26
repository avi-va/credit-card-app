import React, { useState } from 'react'
import './creditPage.css'
import gradient from './bg-main-desktop.png'
import CreditCard from './creditCard'
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>


function CreditPage(){
    let [formData, setFormData] = useState({
        name: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
    });
    
    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return(
        <div>
            <img src={gradient} alt='' id='bg-img'></img>
            <div className='cards'><CreditCard/></div>
            <div className='form'>
                <form>
                    <p>CARDHOLDER NAME</p>
                    <input type='text' name='name' onChange={handleChange} placeholder='e.g. Jane Appleseed'></input>
                    <p>CARD NUMBER</p>
                    <input type='text' name='number' onChange={handleChange} placeholder='e.g. 1234 5678 9123 0000'></input>
                    <div className='div-align'>
                        <div className='date'>
                            <p>EXP.DATE (MM/YY)</p>
                            <input type='number' name='month' onChange={handleChange} placeholder='MM'></input>
                            <input type='number' name='year' onChange={handleChange} placeholder='YY'></input>
                        </div>
                        <div className='cvc'>
                            <p>CVC</p>
                            <input type='number' name='cvc' onChange={handleChange} placeholder='e.g. 123'></input>
                        </div>
                    </div>
                    <button type='submit'>Confirm</button>
                </form>
            </div>
              
        </div>
    )
}
export default CreditPage;