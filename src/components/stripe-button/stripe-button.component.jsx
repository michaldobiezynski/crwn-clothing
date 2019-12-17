import React from 'react';
import './stripe-button.styles.scss';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_m8QSCF7WoMaWUAb9uP6SJpV900xNLc6KGh';

    const onToken = token => {
        console.log(token);
        alert('Payment successful.');
    };

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltw.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panalLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
