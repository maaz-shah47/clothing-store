import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectCartTotal } from '../../store/cart/cart-selecter'
import { selectCurrentUser } from '../../store/user/user-selecter'
import Button from '../button/Button'

import { PaymentFormContainer, FormContainer } from './paymentForm.styles'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true)
    const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }).then((res) => {
        return res.json();
    });
    const { paymentIntent: {client_secret} } = response

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest"
        }
      }
    })

    setIsProcessingPayment(false)
    
    if(paymentResult.error){
      alert(paymentResult.error)
    } else {
      if(paymentResult.paymentIntent.status === 'succeeded'){
        alert('Payment Successfull')
      }
    }
  }
  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={ paymentHandler }>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button disabled={isProcessingPayment} buttonType='inverted'>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}

export default PaymentForm
