import React from 'react'

function Premimum() {
  return (
    <div>
        <div class="container">
    <div class="main-content">
        <p class="text"> <b> SUBSCRIPTION GATEWAY </b></p>
    </div>

    <div class="centre-content">
        <h1 class="price">250Rs* 3 Months<span>/-</span></h1>
        <p class="course"> <b>
        JUST Rs-100/Per Month </b>
        </p>
    </div>

    <div class="last-content">
        <button type="button" class="pay-now-btn">
        Apply Coupons
        </button>
        <button type="button" class="pay-now-btn">
        Pay with Netbanking
        </button>

    </div>

    <div class="card-details">
        <p>Pay using Credit or Debit card</p>

        <div class="card-number">
        <label> Card Number </label>
        <input
            type="text"
            class="card-number-field"
            placeholder="###-###-###"/>
        </div>
        <br />
        <div class="date-number">
        <label> Expiry Date </label>
        <input type="text" class="date-number-field"
                placeholder="DD-MM-YY" />
        </div>

        <div class="cvv-number">
        <label> CVV number </label>
        <input type="text" class="cvv-number-field"
                placeholder="xxx" />
        </div>
        <div class="nameholder-number">
        <label> Card Holder name </label>
        <input
            type="text"
            class="card-name-field"
            placeholder="Enter your Name"/>
        </div>
        <button type="submit"
                class="submit-now-btn">
        submit
        </button>
    </div>
    </div>
    </div>
  )
}

export default Premimum