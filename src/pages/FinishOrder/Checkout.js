import React, { useState, useEffect } from 'react'
import {
  ExpressCheckoutElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useContext } from 'react'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import { getProcessingCost, getTotalCost } from '../../utils/price'
import { Button } from '../../common'
import { toast } from 'react-hot-toast'
import { formatPrice } from '../../utils/number'
import { SiVisa, SiMastercard, SiDiscover } from 'react-icons/si'
import { FaCcAmex, FaCcDinersClub, FaCcJcb } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'

const CheckoutForm = () => {
  const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const [cardBrand, setCardBrand] = useState('')
  const { getCompleteInvoice } = useContext(ProductBusketContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const cardNumberElement = elements.getElement(CardNumberElement)
    const expiryElement = elements.getElement(CardExpiryElement)
    const cvcElement = elements.getElement(CardCvcElement)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
    })

    if (error) {
      toast.error(error.message, {
        position: 'bottom-right',
      })
    } else {
      const phone = sessionStorage.getItem('phone') ?? ''
      const email = sessionStorage.getItem('email') ?? ''
      // Send paymentMethod.id to your server or handle the checkout process
      fetch('/api/order/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...getCompleteInvoice(),
          paymentMethod,
          phone,
          email,
        }),
      }).then(async (res) => {
        const paymentResult = await res.json()

        if (paymentResult.error) {
          toast.error(paymentResult.error, {
            position: 'bottom-right',
          })
          navigate('/wentWrong')
        } else {
          // Payment successful, now you can retrieve or generate the invoice if necessary
          // console.log(paymentResult)
          
        }
      })
    }
  }

  const renderCardIcon = () => {
    switch (cardBrand) {
      case 'visa':
        return <SiVisa />
      case 'mastercard':
        return <SiMastercard />
      case 'discover':
        return <SiDiscover />
      case 'amex':
        return <FaCcAmex />
      case 'diners':
        return <FaCcDinersClub />
      case 'jcb':
        return <FaCcJcb />
      default:
        return null
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4 className="font-bold mt-[15px] ml-[10px]">Card Number</h4>
        <div className="relative">
          <CardNumberElement
            className="shadow border border-gray-100 rounded-[10px] bg-white text-black py-2 px-4 transition duration-200 ease-in-out"
            onChange={(event) => {
              if (event.brand) {
                setCardBrand(event.brand)
              }
            }}
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {renderCardIcon()}
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mt-[15px] ml-[10px]">Card Holder Name</h4>
        <input
          className="shadow border border-gray-100 rounded-[10px] bg-white text-black py-2 px-4 transition duration-200 ease-in-out outline-none text-[0.85rem] w-full"
          style={{
            fontFamily: 'sans-serif !important',
          }}
          name="cardHolderName"
          placeholder="Card Holder"
        />
      </div>
      <div className="flex gap-3">
        <div className="w-1/2">
          <h4 className="font-bold mt-[15px] ml-[10px]">Expiration date</h4>
          <CardExpiryElement className="shadow border border-gray-100 rounded-[10px] bg-white text-black py-2 px-4 transition duration-200 ease-in-out" />
        </div>
        <div className="w-1/2">
          <h4 className="font-bold mt-[15px] ml-[10px]">CVV</h4>
          <CardCvcElement className="shadow border border-gray-100 rounded-[10px] bg-white text-black py-2 px-4 transition duration-200 ease-in-out" />
        </div>
      </div>
      <Button
        className="w-full mt-5"
        type="submit"
        text={`Confirm Payment Method`}
        disabled={!stripe}
      />
    </form>
  )
}

const ExpressCheckoutPage = () => {
  const navigate = useNavigate()
  const { getCompleteInvoice } = useContext(ProductBusketContext)

  const onConfirm = async (e) => {
    const phone = sessionStorage.getItem('phone') ?? ''
    const email = sessionStorage.getItem('email') ?? ''

    // Send paymentMethod.id to your server or handle the checkout process
    fetch('/api/order/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...getCompleteInvoice(),
        paymentMethod: e.paymentMethod, // assuming e.paymentMethod contains the payment method
        phone,
        email,
      }),
    }).then(async (res) => {
      const paymentResult = await res.json()

      
    })
  }

  const options = {
    layout: {
      maxRows: 3,
      maxColumns: 3,
      overflow: 'auto',
    },
    buttonType: {
      googlePay: 'book',
      applePay: 'book',
      paypal: 'buynow',
    },
    buttonTheme: {
      applePay: 'black',
    },
    buttonHeight: 55,
  }

  return <ExpressCheckoutElement options={options} onConfirm={onConfirm} />
}

const Checkout = () => {
  const [isPaypal, setIsPaypal] = useState(false)
  const { method, busket, getCompleteInvoice } =
    useContext(ProductBusketContext)
  const navigate = useNavigate()
  const productTotal = getTotalCost(busket)
  const processingCost = method === 'online' ? getProcessingCost(busket) : 0

  const options = {
    mode: 'payment',
    amount: Number(formatPrice(productTotal + processingCost)) * 100 > 0 ? Number(formatPrice(productTotal + processingCost)) * 100 : 0,
    currency: 'ron',
  }

  useEffect(() => {
    if (method === 'cash') {
      // console.log('Pay time:')
      fetch('/api/order/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...getCompleteInvoice(),
        }),
      })
        .then(async (res) => {
          
        })
        .catch((err) => navigate('/wentWrong'))
    }
  }, [method])

  const configKey = process.env.REACT_APP_PUBLISHABLE_KEY

  return (
    <div className="p-[10px]">
      {method === 'online' ? (
        <Elements stripe={loadStripe(configKey)} options={options}>
          <CheckoutForm />
          <br />
          <ExpressCheckoutPage />
        </Elements>
      ) : null}
    </div>
  )
}

export default Checkout
