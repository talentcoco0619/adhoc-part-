import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import BusketBox from './BusketBox'
import { useNavigate } from 'react-router-dom'
import { Button, TextArea } from '../../common'
import { getProductImage, settings_bucket } from '../Product/ProductCategory'
import Slider from 'react-slick'
import ReactLoading from 'react-loading'
import { formatPrice } from '../../utils/number'
import { toast } from 'react-hot-toast'
import uuid from 'react-uuid'
import { comparer } from '../../utils/filter'
import OrderSummary from './OrderSummary'

const RandomAddItem = ({ className = '', imgSrc, product, unit = 'RON' }) => {
  const { busket, setBusket } = useContext(ProductBusketContext)

  const handleAddToBusket = () => {
    const existItem = busket.find(
      (x) =>
        x.item.ID === product.ID && comparer(x.modifiers, product.modifiers)
    )
    if (existItem !== undefined) {
      setBusket((prv) =>
        (prv ?? []).map((x) => {
          if (x.id === existItem.id) {
            return {
              ...x,
              qty: x.qty + 1,
            }
          }
          return x
        })
      )
    } else {
      const id = uuid()
      setBusket((prv) => [
        ...(prv ?? []),
        {
          item: product,
          qty: 1,
          comment: '',
          modifiers: [],
          id,
        },
      ])
    }
    toast.success('Successfully Added new product to your cart.', {
      position: 'bottom-right',
    })
  }

  return (
    <div
      className={`bg-white rounded-[5px] border border-gray-100 shadow-md my-[15px] mx-[10px] relative ${
        className ? className : 'aspect-w-1 aspect-h-1'
      }`}
    >
      <div className="absolute inset-0 px-[5px] pt-[5px]">
        <div className="relative w-full h-[calc(100%_-_60px)]">
          {imgSrc && (
            <img
              src={imgSrc}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[5px]"
            />
          )}
        </div>
        <div className="h-[60px] flex flex-col justify-between py-1">
          <h3
            className="font-semibold text-[12px] w-full px-[5px]"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '2',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.Name}
          </h3>
          <div className="flex justify-between">
            <h3 className="font-bold text-[12px]">
              {formatPrice(product.Price)}
              <small>{unit}</small>
            </h3>
            <Button
              text="Add"
              className="bg-white flex items-center text-[10px] !px-1 !py-0"
              onClick={handleAddToBusket}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const getItemsFromMenu = (items) => {
  let ans = []
  items?.forEach((x) => {
    if (!x?.IsCategory) {
      if (!ans?.find((a) => a?.ID === x?.ID)) ans = [...ans, x]
    } else {
      ans = [...ans, ...getItemsFromMenu(x?.Items)]
    }
  })
  return ans
}

const FoodOrder = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [comment, setComment] = useState('')
  const [randomItems, setRandomItems] = useState([])
  const { busket, productId, uuid } = useContext(ProductBusketContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleAddMoreProducts = () => {
    navigate(`/product/${productId}?${uuid}`)
  }

  useEffect(() => {
    if (productId) {
      setIsLoading(true)
      fetch(`/api/syncProducts/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setRandomItems(getItemsFromMenu(data.Items))
          setIsLoading(false)
        })
    }
  }, [productId])

  const addableItems = randomItems.filter((x) => {
    return !busket.some((product) => product.item.ID === x.ID)
  })

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[5px] w-[100px]">
          <img
            src="/assets/images/product/chief.png"
            className="w-full"
            alt="KFC Image"
          />
        </div>
        <h3 className="font-bold text-[1.5rem]">Restaurant Hora</h3>
      </div>
      <div className="p-[10px]">
        {busket.map((x) => (
          <BusketBox
            key={x.id}
            item={x.item}
            qty={x.qty}
            modifiers={x.modifiers}
          />
        ))}
        <div className="flex justify-center flex-col">
          <Button
            variant="outline"
            text={t('product.more')}
            className="mx-auto mt-[20px] mb-[50px]"
            onClick={handleAddMoreProducts}
          />
          {isLoading ? (
            <div className="flex flex-col justify-center items-center font-bold p-[30px]">
              <ReactLoading type="spinningBubbles" color="#ffb800" />
              Loading
            </div>
          ) : addableItems.length > 2 ? (
            <Slider {...settings_bucket} className="mb-[20px]">
              {addableItems.map((item, idx) => (
                <RandomAddItem
                  imgSrc={getProductImage(item)}
                  key={`${idx}_main`}
                  categoryName={item.Name}
                  product={item}
                />
              ))}
            </Slider>
          ) : (
            <div className="flex items-center justify-center">
              {addableItems.map((item, idx) => (
                <RandomAddItem
                  className="w-[150px] h-[150px]"
                  imgSrc={getProductImage(item)}
                  key={`${idx}_main`}
                  categoryName={item.Name}
                  product={item}
                />
              ))}
            </div>
          )}
          <TextArea
            placeholder="Special mentions..."
            className="w-full mt-[20px] min-h-[100px]"
            onChange={handleCommentChange}
            value={comment}
          />
        </div>
        <OrderSummary />
      </div>
    </>
  )
}

export default FoodOrder
