import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HeaderPopupMenu = ({ setShowPopup }) => {
  const { t } = useTranslation()

  return (
    <div
      className="fixed z-50 top-0 right-0 w-full h-full bg-[#00000091]"
      onClick={() => setShowPopup(false)}
    >
      <div
        className="absolute xxs:w-[180px] xs:w-[200px] sm:w-[250px] w-full top-0 left-0 bg-white shadow-lg border flex flex-col
                h-full transform translate-x-0 ease-in-out duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex justify-center items-center mt-4">
          <img
            className="w-1/2"
            src="/assets/images/logo_dark.png"
            alt="Scaneaza Meniu Cod QR, Meniu Digital"
          />
        </div>
        <hr className="w-full mt-4"></hr>
        <div
          className="mt-6 text-center uppercase hover:bg-[#FFB800] duration-300 w-full"
          style={{ borderColor: '#FFB800' }}
          onClick={() => setShowPopup(false)}
        >
          <Link to="/#home" className="w-full">
            {t('header.home')}
          </Link>
        </div>
        <div
          className="mt-6 text-center uppercase hover:bg-[#FFB800] duration-300 w-full"
          style={{ borderColor: '#FFB800' }}
          onClick={() => setShowPopup(false)}
        >
          <Link to="/#about" className="w-full">
            {t('header.about')}
          </Link>
        </div>
        <div
          className="mt-6 text-center uppercase hover:bg-[#FFB800] duration-300 w-full"
          style={{ borderColor: '#FFB800' }}
          onClick={() => setShowPopup(false)}
        >
          <Link to="/#features" className="w-full">
            {t('header.features')}
          </Link>
        </div>
        <div
          className="mt-6 text-center uppercase hover:bg-[#FFB800] duration-300 w-full"
          style={{ borderColor: '#FFB800' }}
          onClick={() => setShowPopup(false)}
        >
          <Link to="/#prices" className="w-full">
            Prices
          </Link>
        </div>
        <div
          className="mt-6 text-center uppercase hover:bg-[#FFB800] duration-300 w-full"
          style={{ borderColor: '#FFB800' }}
          onClick={() => setShowPopup(false)}
        >
          <Link to="/#contact" className="w-full">
            {t('header.contact')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderPopupMenu
