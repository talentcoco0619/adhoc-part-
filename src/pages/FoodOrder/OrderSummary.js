import { useContext, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import { getTotalCost, getProcessingCost } from '../../utils/price'
import { formatPrice } from '../../utils/number'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { Button } from '../../common'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

export const SummaryCost = ({
  title,
  price,
  icon,
  unit = 'RON',
  bold = false,
  border = true,
}) => {
  const [showTip, setShowTip] = useState(false)
  const tipTimeoutRef = useRef(null)

  const handleShowTip = () => {
    setShowTip(!showTip)
  }

  useEffect(() => {
    if (tipTimeoutRef.current) {
      clearTimeout(tipTimeoutRef.current)
    }

    if (showTip) {
      tipTimeoutRef.current = setTimeout(() => {
        setShowTip(false)
      }, 2000)
    }
  }, [showTip])

  return (
    <div
      className={`flex justify-between items-center mt-[5px] text-[1.2rem] ${
        border ? '[border-bottom:2px_solid_#ffb800]' : ''
      } py-[10px] px-[15px] ${bold ? 'font-bold' : ''}`}
    >
      <h5 className="flex items-center">
        {icon && (
          <div className="absolute left-[3px]">
            <span className="relative cursor-pointer" onClick={handleShowTip}>
              {icon}

              {showTip && (
                <div className="absolute left-0 top-0 mt-4 ml-0.5 z-10">
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderBottom: '8px solid #ffb800',
                    }}
                  ></div>
                  <div className="-ml-[10px] bg-[#ffb800] text-black text-[13px] px-2 py-1 w-[200px] rounded shadow-lg flex">
                    This is test hover text. You can change it further.
                  </div>
                </div>
              )}
            </span>
          </div>
        )}
        {title}
      </h5>
      <h4 className="font-bold text-xl">
        {formatPrice(price)}
        <small> {unit}</small>
      </h4>
    </div>
  )
}

const OrderSummary = ({ final, method }) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { busket } = useContext(ProductBusketContext)
  const productTotal = getTotalCost(busket)
  const processingCost = method === 'online' ? getProcessingCost(busket) : 0

  const handleOrderNextClick = () => {
    if (final) {
      const phone = sessionStorage.getItem('phone') ?? ''
      const email = sessionStorage.getItem('email') ?? ''

      if (method === 'cash') {
        navigate('/food-ordering/checkout')
      } else if (method === 'online' && phone && email) {
        navigate('/food-ordering/checkout')
      } else {
        toast.error('Please check your phone number and email address', {
          position: 'bottom-right',
        })
      }
    } else {
      navigate('/food-ordering/finish')
    }
  }

  const handleShowTerms = () => {
    navigate('/terms')
  }

  return (
    <div className="relative p-[10px] border-[2px] border-solid border-[#ffb800] mt-[20px] border-t-[0px] rounded-br-[20px] rounded-bl-[20px]">
      <div
        className="bg-contain w-full h-[20px] absolute left-0 -top-[12px]"
        style={{
          backgroundImage: "url('/assets/images/zigzag.png')",
          backgroundSize: '100% 100%',
        }}
      ></div>
      <h3 className="text-[1.25rem] font-extrabold mt-[10px]">
        {t('product.summary')}
      </h3>
      <SummaryCost title={t('product.prod_cost')} price={productTotal} />
      <SummaryCost
        title={t('product.proc_cost')}
        price={processingCost}
        icon={<AiOutlineExclamationCircle />}
      />
      <SummaryCost
        title={t('product.total')}
        price={productTotal + processingCost}
        bold
      />
      {final && (
        <p className="mt-[5px]">
          {t('product.consent1')}
          <button onClick={handleShowTerms}>
            <u> {t('product.consent2')} </u>
          </button>
          {t('product.consent3')}
        </p>
      )}
      <div className="flex justify-center mt-[30px]">
        <Button
          text={final ? t('product.send') : t('product.next')}
          onClick={handleOrderNextClick}
        />
      </div>
    </div>
  )
}

export default OrderSummary
