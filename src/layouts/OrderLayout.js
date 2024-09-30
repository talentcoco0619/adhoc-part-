import React, { useContext, useEffect, useState } from 'react'
import Footer01 from '../components/Footer/Footer01'
import Header03 from '../components/Header/Header03'
import { ProductBusketContext } from './ProductLayout'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const OrderLayout = ({ children }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [title, setTitle] = useState(t('product.my_order'))
  const [showBack, setShowBack] = useState(true)
  const { busket, setShowHeader, loading } = useContext(ProductBusketContext)

  useEffect(() => {
    setShowHeader(false)
  }, [])

  useEffect(() => {
    if (
      !loading &&
      busket.length === 0 &&
      window.location.pathname !== '/food-ordering/thankYou'
    ) {
      navigate('/empty-cart')
    }
  }, [busket, loading, window.location.pathname])

  useEffect(() => {
    if (window.location.pathname === '/food-ordering/finish') {
      setShowBack(true)
      setTitle(t('product.finish_order'))
    } else if (window.location.pathname === '/food-ordering/checkout') {
      setShowBack(true)
      setTitle(t('product.checkout'))
    } else if (window.location.pathname === '/food-ordering/thankYou') {
      setShowBack(false)
      setTitle(t('product.thankYou'))
    } else {
      setShowBack(true)
      setTitle(t('product.my_order'))
    }
  }, [window.location.pathname])

  return (
    <div className="flex flex-col">
      <Header03 title={title} showBack={showBack} />
      <main className="flex-grow container m-auto">{children}</main>
    </div>
  )
}

export default OrderLayout
