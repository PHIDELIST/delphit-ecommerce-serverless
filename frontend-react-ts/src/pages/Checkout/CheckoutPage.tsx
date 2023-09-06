import './CheckoutPage.css'
const CheckoutPage = () => {
    return(
        <>
        <div className='checkout-main'>
            <h1>Check Out</h1>
            <div className='client-address'>
                <h1>PickUp Point</h1>
                <input type="text" placeholder='Address line' />
                <input type="text" placeholder='House Number' />
                <input type="text" placeholder='City' />
            </div>
            <div className='card-payment'>
                <h1>Card Information</h1>
                <input type="text" placeholder='Account Name' />
                <input type='text' placeholder='Email'/>
                <input type="text" placeholder='Card Number' />
                <input type="text" placeholder='Card Validation Value' />
            </div>
            <button>Make Payment</button>

        </div>
        </>
    )
}
export default CheckoutPage;