import { useContext } from 'react'
import { formatPrice } from '../../utils/number'
import { ProductContext } from './ProductCategory'

const MAX_LENGTH = 150

const BucketsBox = ({ product, unit }) => {
  const { setProduct, setShowDialog } = useContext(ProductContext)

  const handleSelect = () => {
    setProduct(product)
    setShowDialog(true)
  }

  return (
    <div
      className="w-full cursor-pointer border border-gray-200 bg-white rounded-[10px] shadow p-[10px] flex flex-col justify-center"
      onClick={handleSelect}
    >
      {product.Description && product.Description.length > MAX_LENGTH && (
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
          {product.Name}
        </h3>
      )}
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between h-full">
          {(!product.Description ||
            product.Description.length <= MAX_LENGTH) && (
            <h3
              className="font-bold text-[1rem] pr-[10px]"
              style={{
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: product.Description ? '1' : '3',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {product.Name}
            </h3>
          )}
          <p
            className="text-[0.85rem] pr-[10px] text-ellipsis"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '4',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {product.Description?.replace(/<[^>]+>/g, '')}
          </p>
          <h4 className="font-bold text-[1.3rem]">
            {formatPrice(product.Price)} <small>{unit}</small>
          </h4>
        </div>
        {product.ImageUrl && (
          <div className="relative w-[80px] h-[80px]">
            <img
              src={product.ImageUrl}
              className="absolute top-0 left-0 w-full h-full object-cover rounded-[10px]"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default BucketsBox
