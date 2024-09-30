import CircleButton from '../../common/CircleButton'
import { AiOutlineLeft } from 'react-icons/ai'
import { formatPrice } from '../../utils/number'
import { Button, CheckBox, TextArea } from '../../common'
import Counter from '../Counter/Counter'
import { useTranslation } from 'react-i18next'
import { useContext, useEffect, useRef, useState } from 'react'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import { toast } from 'react-hot-toast'
import { comparer } from '../../utils/filter'
import uuid from 'react-uuid'
import CircleCheckBox from '../../common/CircleCheckBox'
import useViewportWidth from '../../hooks/useViewportWidth'

const Modifier = ({ modifier, onChange, initialValue }) => {
  const [selectedItems, setSelectedItems] = useState(initialValue || [])

  const setDefaultModifiers = () => {
    let results = []
    const sortedByPriceItems = [...modifier?.Items]?.sort((a, b) => {
      return a?.Price > b?.Price ? 1 : -1
    })
    for (let i = 0; i < modifier?.Min; i++) {
      results?.push(sortedByPriceItems[i])
    }
    setSelectedItems(results)
    onChange(results)
  }

  const onSelectItem = (checked, item) => {
    let currentSelected = [...selectedItems]
    if (checked) {
      currentSelected.push(item)
    } else {
      currentSelected = currentSelected?.filter((modfy) => modfy.ID !== item.ID)
    }
    setSelectedItems(currentSelected)
    onChange(currentSelected)
  }

  useEffect(() => {
    if (modifier?.Min > 0) {
      setDefaultModifiers()
    }
  }, [modifier])

  return (
    <div className="flex flex-col gap-[5px] py-[0]">
      <h3 className="font-bold text-[1.3rem]">{modifier?.Name}</h3>
      <p>
        Select between {modifier?.Min} and {modifier?.Max} options
      </p>
      {modifier?.Items?.map((item, index) => {
        return (
          <div key={index} className="flex gap-[10px] items-center">
            <CircleCheckBox
              checked={
                selectedItems.find((elmnt) => elmnt?.ID === item?.ID) !==
                undefined
              }
              onChange={(checked) => onSelectItem(checked, item)}
              disabled={
                selectedItems.find((elmnt) => elmnt?.ID === item?.ID) ===
                  undefined && selectedItems.length >= modifier?.Max
              }
            />
            <div className="flex flex-1 justify-between w-full">
              <span className="flex-1">{item?.Name}</span>
              <span className="font-bold w-[fit-content]">
                {item?.Price.toFixed(2)} <span>RON</span>
              </span>
            </div>
          </div>
        )
      })}
      <span className="w-full [border-bottom:3px_solid_#ffc700] my-4" />
    </div>
  )
}

const ProductDialog = ({ show, setShow, product, unit = 'RON' }) => {
  const { t } = useTranslation()
  const [counter, setCounter] = useState(1)
  const [comment, setComment] = useState('')
  const [modifiers, setModifiers] = useState([])
  const { busket, setBusket } = useContext(ProductBusketContext)
  const [widthClass, setWidthClass] = useState('w-[fit-content]')
  const containerRef = useRef(null)
  const h3Ref = useRef(null)
  const h4Ref = useRef(null)
  const viewportWidth = useViewportWidth()

  const handleClose = () => {
    setCounter(1)
    setComment('')
    setModifiers([])
    setShow(false)
  }

  const handleCounterChange = (v) => {
    setCounter(v)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleAddToBusket = () => {
    const existItem = busket.find((x) => x.item.ID === product.ID)
    if (existItem !== undefined) {
      setBusket((prv) =>
        (prv ?? []).map((x) => {
          if (x.id === existItem.id) {
            return {
              ...x,
              comment,
              modifiers,
              qty: counter,
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
          qty: counter,
          comment,
          modifiers,
          id,
        },
      ])
    }
    toast.success('Successfully Added new product to your cart.', {
      position: 'bottom-right',
    })
    handleClose()
  }

  const handleModifierChange = (v) => {
    setModifiers([...new Set([...v, ...modifiers])])
  }

  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    // When the modal is hidden or the component is unmounted, remove the class
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [show])

  useEffect(() => {
    if (containerRef.current && h3Ref.current && h4Ref.current && show) {
      const containerWidth = containerRef.current.clientWidth
      const h3Width = h3Ref.current.clientWidth
      const h4Width = h4Ref.current.clientWidth

      if (h3Width + h4Width > containerWidth) {
        setWidthClass('w-full')
      } else {
        setWidthClass('w-[fit-content]')
      }
    }
  }, [viewportWidth, show])

  useEffect(() => {
    if (show && product) {
      const existItem = busket.find((x) => x.item.ID === product.ID)
      if (existItem !== undefined) {
        setComment(existItem.comment)
        // setModifiers(existItem.modifiers)
        setCounter(existItem.qty)
      }
    } else {
      setCounter(1)
      setComment('')
      setModifiers([])
    }
  }, [product, show])

  return show ? (
    <div className="fixed w-full h-full bg-[#878787c2] left-0 top-0 z-10 backdrop-blur-sm flex justify-center items-center">
      <div className="relative sm:w-[600px] w-[95%] bg-white rounded-lg shadow-lg sm:h-[90%] h-[95%]">
        <div className="relative h-[180px] flex items-center">
          {product.ImageUrl ? (
            <img
              src={product.ImageUrl}
              alt="product image kfc"
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
            />
          ) : (
            <h2 className="m-auto text-center text-[1.8rem] font-bold">
              No Image Provided
            </h2>
          )}
          <div className="absolute inset-x-0 bottom-0 h-[50px] bg-gradient-to-t from-white to-transparent"></div>
          <div
            ref={containerRef}
            className={`absolute bottom-0 flex w-full items-end justify-between flex-wrap backdrop-blur-sm bg-[#00000096]`}
          >
            <div className={`${widthClass}`}>
              <h3
                ref={h3Ref}
                className={`font-bold text-[1.5rem] px-[5px] text-white text-left w-[fit-content]`}
              >
                {product.Name}
              </h3>
            </div>
            <div className={`${widthClass} flex justify-end`}>
              <h4
                ref={h4Ref}
                className={`font-bold text-white text-[1.5rem] px-[5px] text-right w-[fit-content]`}
              >
                {formatPrice(product.Price)} <small>{unit}</small>
              </h4>
            </div>
          </div>
        </div>
        <CircleButton
          className="absolute top-[15px] left-[15px]"
          size={40}
          icon={<AiOutlineLeft />}
          variant="icon"
          onClick={handleClose}
        />
        <div className="p-[20px] h-[calc(100%_-_260px)] overflow-y-scroll">
          <div className="flex-1 flex flex-col h-full">
            <p>{product.Description?.replace(/<[^>]+>/g, '')}</p>
            {product?.Modifiers?.length > 0 && (
              <div>
                <div className="flex flex-col gap-[5px] py-[0]">
                  <span className="w-full [border-bottom:3px_solid_#ffc700] my-4" />
                </div>
                {product?.Modifiers?.map((modifier, idx) => {
                  return (
                    <Modifier
                      key={idx}
                      modifier={modifier}
                      onChange={handleModifierChange}
                    />
                  )
                })}
              </div>
            )}
            <TextArea
              placeholder="Special mentions..."
              className="w-full mt-[20px] min-h-[100px]"
              onChange={handleCommentChange}
              value={comment}
            />
            <Counter
              className="pt-[50px] pb-[30px]"
              value={counter}
              onChange={handleCounterChange}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[80px] absolute bottom-0 w-full">
          <Button text={t('product.add')} onClick={handleAddToBusket} />
        </div>
      </div>
    </div>
  ) : null
}

export default ProductDialog
