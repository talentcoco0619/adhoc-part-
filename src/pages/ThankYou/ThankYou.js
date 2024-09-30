import { useContext } from 'react'
import { Button } from '../../common'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import BusketBox from '../FoodOrder/BusketBox'
import { SummaryCost } from '../FoodOrder/OrderSummary'
import { getProcessingCost, getTotalCost } from '../../utils/price'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

const ThankyouIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="60" cy="60" r="60" fill="#FFF3D3" />
      <circle
        cx="60.0003"
        cy="59.9998"
        r="44.2"
        stroke="#FFB800"
        strokeWidth="4"
        strokeDasharray="20 20"
      />
      <path
        d="M37 56.8L54.7772 72.9667C55.1685 73.3225 55.7691 73.3121 56.1479 72.9431L83.8 46"
        stroke="#52FF00"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  )
}

const ThankYou = () => {
  const { t } = useTranslation()
  const { busket, setBusket, productId, uuid, method } =
    useContext(ProductBusketContext)
  const navigate = useNavigate()
  const productTotal = getTotalCost(busket)
  const processingCost = method === 'online' ? getProcessingCost(busket) : 0

  const handleNewOrder = () => {
    setBusket([])
    navigate(`/product/${productId}?${uuid}`)
  }

  const isInitialMount = useRef(true)

  useEffect(() => {
    return () => {
      if (isInitialMount.current) {
        isInitialMount.current = false
      } else {
        sessionStorage.removeItem('busket')
        sessionStorage.setItem('method', 'cash')
        setBusket([])
      }
    }
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-[10px]">
      <div className="p-[50px]">
        <ThankyouIcon />
      </div>
      <h2 className="text-[1.8rem] font-extrabold mb-[20px] text-center">
        Your Order Has Been Successfully Confirmed
      </h2>
      <div className="flex justify-start w-full">
        <h3 className="text-[1.2rem]">Order details</h3>
      </div>
      {busket.map((x) => (
        <BusketBox
          key={x.id}
          item={x.item}
          qty={x.qty}
          dynamic={false}
          modifiers={x.modifiers}
        />
      ))}
      <div className="relative p-[10px] border-[2px] border-solid border-[#ffb800] mt-[20px] border-t-[0px] rounded-br-[20px] rounded-bl-[20px] w-full">
        <div
          className="bg-contain w-full h-[20px] absolute left-0 -top-[12px]"
          style={{
            backgroundImage: "url('/assets/images/zigzag.png')",
            backgroundSize: '100% 100%',
          }}
        ></div>
        <SummaryCost
          title={t('product.prod_cost')}
          price={productTotal}
          border={false}
        />
        <SummaryCost
          title={t('product.proc_cost')}
          price={processingCost}
          border={false}
        />
        <SummaryCost
          title={t('product.total')}
          price={processingCost + productTotal}
          bold
          border={false}
        />
      </div>
      <div className="flex justify-center mt-[20px]">
        <Button text="New order" onClick={handleNewOrder} />
      </div>
    </div>
  )
}

export default ThankYou
