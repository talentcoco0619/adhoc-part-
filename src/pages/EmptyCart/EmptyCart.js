import { useContext, useEffect } from 'react'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'

const EmptyCart = () => {
  const { setShowHeader, productId, uuid } = useContext(ProductBusketContext)
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleGotoShopping = () => {
    navigate(`/product/${productId}?${uuid}`)
  }

  useEffect(() => {
    setShowHeader(true)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/assets/images/emptycart.png" alt="Empty Cart Image" />
      <p className="text-[2rem] font-extrabold mb-[50px] p-[15px]">
        {t('product.empty_cart')}
      </p>

      <Button
        className="mb-[50px]"
        onClick={handleGotoShopping}
        text={t('product.start_shopping')}
      />
    </div>
  )
}

export default EmptyCart
