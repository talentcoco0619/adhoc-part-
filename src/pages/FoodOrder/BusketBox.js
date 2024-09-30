import { useEffect, useMemo, useState } from 'react'
import Counter from '../../components/Counter/Counter'
import { formatPrice } from '../../utils/number'
import useViewportWidth from '../../hooks/useViewportWidth'
import CircleButton from '../../common/CircleButton'
import { RxCross1 } from 'react-icons/rx'
import { useContext } from 'react'
import { ProductBusketContext } from '../../layouts/ProductLayout'

const BusketBox = ({ item, qty, dynamic = true, unit = 'RON', modifiers }) => {
  const [counter, setCounter] = useState(qty)
  const { setBusket } = useContext(ProductBusketContext)
  const viewportWidth = useViewportWidth()
  const isSmallScreen = viewportWidth <= 650

  const handleCounterChange = (v) => {
    setCounter(v)
    setBusket((prv) =>
      prv.map((x) => {
        if (x.item.ID === item.ID)
          return {
            ...x,
            qty: v,
          }
        return x
      })
    )
  }

  const counterAndPrice = useMemo(() => {
    const modifierPrice = modifiers.reduce(
      (result, modifier) => result + modifier.Price,
      0
    )
    return (
      <div
        className={`flex items-center ${
          dynamic ? 'justify-between' : 'justify-end'
        }`}
      >
        {dynamic && (
          <Counter
            value={counter}
            onChange={handleCounterChange}
            size={25}
            fontSize={15}
          />
        )}
        <h4 className="font-bold text-[1.3rem]">
          {formatPrice(item.Price + modifierPrice)} <small>{unit}</small>
        </h4>
      </div>
    )
  }, [counter, item.Price, unit, dynamic, modifiers])

  const handleCancel = () => {
    setBusket((prv) => prv.filter((x) => x.item.ID !== item.ID))
  }

  return (
    <div className="relative p-[5px] shadow-md rounded-[10px] border border-gray-200 my-[5px]">
      <div className="flex items-center gap-[15px]">
        {item.ImageUrl && (
          <div className="relative w-[85px] h-[95px]">
            <img
              src={item.ImageUrl}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
              alt=""
            />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-between h-full">
          <h3
            className="font-bold text-[1rem]"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '1',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item.Name}
          </h3>
          <p
            className="text-[0.9rem]"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '4',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item.Description?.replace(/<[^>]+>/g, '')}
          </p>
          {!isSmallScreen && counterAndPrice}
        </div>
      </div>
      {isSmallScreen && counterAndPrice}
      {dynamic && (
        <CircleButton
          className="absolute bg-white top-[5px] right-[5px] text-[1.3rem] shadow-lg font-bold border-[1px] border-solid border-[#cfcfcf] p-2"
          size={30}
          icon={<RxCross1 />}
          variant="icon"
          onClick={handleCancel}
        />
      )}
    </div>
  )
}

export default BusketBox
