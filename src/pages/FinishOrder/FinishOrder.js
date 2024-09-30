import { useTranslation } from 'react-i18next'
import OrderSummary from '../FoodOrder/OrderSummary'
import PaymentSelector from './PaymentSelector'
import Invoice from './Invoice'
import { useContext, useEffect, useState } from 'react'
import Tips from './Tips'
import { TextInput } from '../../common'
import { ProductBusketContext } from '../../layouts/ProductLayout'

const FinishOrder = () => {
  const { t } = useTranslation()
  const { method, setMethod } = useContext(ProductBusketContext)
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleChangePhone = (e) => {
    setPhone(e.target.value)
    sessionStorage.setItem('phone', e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    sessionStorage.setItem('email', e.target.value)
  }

  useEffect(() => {
    const savedPhone = sessionStorage.getItem('phone')
    const savedEmail = sessionStorage.getItem('email')

    setPhone(savedPhone ?? '')
    setEmail(savedEmail ?? '')
  }, [])

  return (
    <div className="p-[10px]">
      <PaymentSelector method={method} setMethod={setMethod} />
      <Tips />
      {method === 'online' && (
        <div>
          <h4 className="font-bold mt-[15px] ml-[10px]">
            {t('product.phone_number')}
          </h4>
          <TextInput
            name="phone"
            placeholder={t('product.phone_number')}
            value={phone}
            onChange={handleChangePhone}
          />
          <h4 className="font-bold mt-[15px] ml-[10px]">
            {t('product.email')}
          </h4>
          <TextInput
            name="email"
            placeholder={t('product.email')}
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
      )}
      <OrderSummary final method={method} />
    </div>
  )
}

export default FinishOrder
