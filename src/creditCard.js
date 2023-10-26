import React from 'react'
import './creditCard.css'
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"></link>

function CreditCard(){
    return(
        <div className='card'>
            <div className='front'>
                <div className='icon'></div>
                <div className='cardNumber'><p>0000 0000 0000 0000</p></div>
                <div className='front-info'>
                    <p>JANE APPLESEED</p>
                    <p>00/00</p>
                </div>
            </div>
            <div className='back'>
                <p>000</p>
            </div>
        </div>
    )
}
export default CreditCard;