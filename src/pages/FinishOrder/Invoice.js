import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, TextInput } from '../../common'
import { AiOutlineLeft } from 'react-icons/ai'
import CircleButton from '../../common/CircleButton'
import { useContext } from 'react'
import { ProductBusketContext } from '../../layouts/ProductLayout'

export const InvoiceDialog = ({ show, setShow }) => {
  const { t } = useTranslation()
  const { invoice, setInvoice } = useContext(ProductBusketContext)

  const handleClose = () => {
    setShow(false)
  }

  const handleChange = ({ target: { name, value } }) => {
    setInvoice((prv) => ({
      ...prv,
      [name]: value,
    }))
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

  return show ? (
    <div className="fixed w-full h-full bg-[#ffffff21] left-0 top-0 z-10 backdrop-blur-sm flex justify-center items-center">
      <div className="relative sm:w-[600px] w-full bg-white sm:rounded-lg rounded-none shadow-lg sm:h-[90%] h-full">
        <div className="relative h-[80px] flex sm:justify-center justify-end items-center bg-[#FFB800] sm:rounded-lg rounded-none sm:rounded-br-none sm:rounded-bl-none">
          <Button
            className="bg-white absolute left-[20px]"
            text="Back"
            variant="icon"
            icon={<AiOutlineLeft />}
            onClick={handleClose}
          />
          <h3 className="flex justify-center items-center text-xl font-bold sm:m-0 mr-[20px]">
            {t('invoice.add')}
          </h3>
        </div>
        <div className="p-[10px]">
          <h4 className="font-bold mt-[15px] ml-[10px]">{t('invoice.name')}</h4>
          <TextInput
            name="name"
            value={invoice.name}
            placeholder={t('invoice.name')}
            onChange={handleChange}
          />
          <h4 className="font-bold mt-[15px] ml-[10px]">{t('invoice.cui')}</h4>
          <TextInput
            name="cui"
            value={invoice.cui}
            placeholder={t('invoice.cui')}
            onChange={handleChange}
          />
          <h4 className="font-bold mt-[15px] ml-[10px]">
            {t('invoice.address')}
          </h4>
          <TextInput
            name="address"
            value={invoice.address}
            placeholder={t('invoice.address')}
            onChange={handleChange}
          />
          <h4 className="font-bold mt-[15px] ml-[10px]">
            {t('invoice.reg_no')}
          </h4>
          <TextInput
            name="regNo"
            value={invoice.regNo}
            placeholder={t('invoice.reg_no')}
            onChange={handleChange}
          />
          <h4 className="font-bold mt-[15px] ml-[10px]">{t('invoice.bank')}</h4>
          <TextInput
            name="bank"
            value={invoice.bank}
            placeholder={t('invoice.bank')}
            onChange={handleChange}
          />
          <h4 className="font-bold mt-[15px] ml-[10px]">{t('invoice.iban')}</h4>
          <TextInput
            name="iban"
            value={invoice.iban}
            placeholder={t('invoice.iban')}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  ) : null
}

const Invoice = () => {
  const { t } = useTranslation()
  const [show, setShow] = useState(false)

  const handleShowInvoice = () => {
    setShow(true)
  }

  return (
    <div className="mt-[50px] mb-[50px]">
      <h3 className="text-[1.5rem] font-extrabold mt-[15px]">
        {t('product.invoice')}
      </h3>
      <h4>{t('product.need_invoice')}</h4>
      <Button
        className="w-full mt-[10px]"
        variant="outline"
        text={t('product.add_invoice')}
        onClick={handleShowInvoice}
      />
      <InvoiceDialog show={show} setShow={setShow} />
    </div>
  )
}

export default Invoice
