import React, { createContext, useEffect, useState } from 'react'
import Header02 from '../components/Header/Header02'
import Footer01 from '../components/Footer/Footer01'
import Footer from '../pages/Landing/Footer'

export const ProductBusketContext = createContext()

const ProductLayout = ({ footer = true, children }) => {
  const [busket, setBusket] = useState([])
  const [showHeader, setShowHeader] = useState(true)
  const [data, setData] = useState()
  const [product, setProduct] = useState()
  const [productId, setProductId] = useState()
  const [uuid, setUuid] = useState()
  const [loading, setLoading] = useState(true)
  const [showDialog, setShowDialog] = useState(false)
  const [method, setMethod] = useState(
    sessionStorage.getItem('method') ?? 'cash'
  )
  const [invoice, setInvoice] = useState({
    name: '',
    cui: '',
    address: '',
    regNo: '',
    bank: '',
    iban: '',
  })

  const getCompleteInvoice = () => {
    const items = busket.map((x) => ({
      productId: x.item.ID,
      type: 'Product',
      quantity: x.qty,
      modifiers: x.modifiers,
      comment: x.comment,
    }))

    return {
      organizationId: productId,
      order: {
        tableIds: [uuid],
        items,
      },
      payment: method,
    }
  }

  useEffect(() => {
    if (loading) {
      try {
        const savedBusketString = sessionStorage.getItem('busket')
        const productIdString = sessionStorage.getItem('productId')
        const uuidString = sessionStorage.getItem('uuid')
        if (
          typeof savedBusketString === 'string' &&
          typeof productIdString === 'string' &&
          typeof uuidString === 'string'
        ) {
          setBusket(JSON.parse(savedBusketString))
          setProductId(JSON.parse(productIdString))
          setUuid(JSON.parse(uuidString))
        }

        setLoading(false)
      } catch (e) {
        setBusket([])
        setLoading(false)
      }
    }
  }, [loading])

  useEffect(() => {
    if (loading === false) {
      if (busket !== null && busket !== undefined) {
        sessionStorage.setItem('busket', JSON.stringify(busket))
      }
    }
  }, [busket, loading])

  useEffect(() => {
    sessionStorage.setItem('method', method)
  }, [method])

  return (
    <ProductBusketContext.Provider
      value={{
        busket,
        setBusket,
        setShowHeader,
        productId,
        setProductId,
        uuid,
        setUuid,
        loading,
        invoice,
        setInvoice,
        getCompleteInvoice,
        data,
        setData,
        product,
        setProduct,
        showDialog,
        setShowDialog,
        method,
        setMethod,
      }}
    >
      <div className="flex flex-col">
        {showHeader && <Header02 />}
        <main className="container flex-grow mt-[80px] m-auto">{children}</main>
        {footer && <Footer showSalad={false} />}
      </div>
    </ProductBusketContext.Provider>
  )
}

export default ProductLayout
