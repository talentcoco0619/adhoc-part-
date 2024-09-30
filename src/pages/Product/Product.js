import { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductLayout, {
  ProductBusketContext,
} from '../../layouts/ProductLayout'
import ProductBreadcrumbs from './ProductBreadcrumbs'
import ProductBrand from './ProductBrand'
import ProductCategory from './ProductCategory'

const Product = () => {
  const { productId } = useParams()
  const url = new URL(window.location)
  const uuid = url.searchParams.toString().slice(0, -1)

  const navigate = useNavigate()
  const { setShowHeader, setProductId, setUuid } =
    useContext(ProductBusketContext)

  useEffect(() => {
    setShowHeader(true)
  }, [])

  useEffect(() => {
    setProductId(productId)
    setUuid(uuid)
    sessionStorage.setItem('productId', JSON.stringify(productId))
    sessionStorage.setItem('uuid', JSON.stringify(uuid))


  }, [productId, uuid])

  return (
    <div className="p-[20px]">
      <ProductBrand />
      <ProductCategory restId={productId} />
    </div>
  )
}

export default Product
