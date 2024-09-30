import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import useViewportWidth from '../../hooks/useViewportWidth'
import { languages } from './Header02'
import { useEffect } from 'react'

export const BurgerMenuIcon = () => {
  return (
    <svg
      width="38"
      height="29"
      viewBox="0 0 38 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.5"
        y1="1.5"
        x2="36.5"
        y2="1.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="8.5"
        y1="14.5"
        x2="36.5"
        y2="14.5"
        stroke="#FFB800"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="1.5"
        y1="27.5"
        x2="36.5"
        y2="27.5"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

const Header01 = () => {
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language.slice(0, 2))

  const viewportWidth = useViewportWidth()
  const isLargeScreen = viewportWidth >= 1024

  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuStatus = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const handleChangeLanguage = (e, v) => {
    i18n.changeLanguage(v)
    setLanguage(v)
    sessionStorage.setItem('language', v)
  }

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const languageHeaderButton = () =>
    languages ? (
      <li
        className={`cursor-pointer relative transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800]`}
        onClick={() => toggleMenu()}
      >
        <div
          className="w-[30px] border-[2px] border-solid border-[#ffb800] rounded-full h-[30px]"
          style={{
            backgroundImage: `url(${
              languages.find((x) => x.value === language).path
            })`,
            backgroundSize: '100% 100%',
          }}
        ></div>

        {isMenuOpen && (
          <div className="absolute mt-[20px] bg-white rounded-[10px] shadow-md p-[10px] right-[0px] w-[200px] border-[1px] border-solid border-[#e5e5e5]">
            <ul className="flex flex-col gap-[10px]">
              {languages.map((x) => (
                <li
                  key={x.value}
                  className="flex justify-between items-center"
                  onClick={(e) => handleChangeLanguage(e, x.value)}
                >
                  <p className="text-black text-[18px]">{x.title}</p>
                  <img src={x.path} className="w-[30px]" />
                </li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ) : null

  useEffect(() => {
    const storedLanguage = sessionStorage.getItem('language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  return (
    <div className="h-[80px] p-[5px] fixed w-full">
      <div className="flex justify-between items-center p-[20px] backdrop-blur-md shadow-lg rounded-[10px] bg-[#ffffff5e]">
        <img
          src="/assets/images/adhoc_text.png"
          width={100}
          alt="Scaneaza Meniu Cod QR, Meniu Digital"
        />
        {isLargeScreen ? (
          <ul className="flex gap-[20px]">
            <li
              className={`cursor-pointer ${
                location.pathname === '/' ? 'text-[#ffbd21]' : ''
              } transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[5px] px-[10px]`}
            >
              <Link to="/">{t('header.home')}</Link>
            </li>
            <li
              className={`cursor-pointer ${
                location.pathname === '/about' ? 'text-[#ffbd21]' : ''
              } transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[5px] px-[10px]`}
            >
              <Link to="/about">{t('header.about')}</Link>
            </li>
            <li
              className={`cursor-pointer ${
                location.pathname === '/contact' ? 'text-[#ffbd21]' : ''
              } transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[5px] px-[10px]`}
            >
              <Link to="/contact">{t('header.contact')}</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-[20px] items-center justify-center">
            {languageHeaderButton()}
            <li className="flex items-center">
              <button onClick={handleMenuStatus}>
                <BurgerMenuIcon />
              </button>
            </li>
          </ul>
        )}
      </div>
      {!isLargeScreen && isOpen && (
        <div className="p-[10px] fixed top-0 left-0 w-full lg:hidden block">
          <div
            id="mobile_menu"
            className={`bg-[white] rounded-[10px] shadow-md p-[20px] transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ul className="flex flex-col gap-[5px] text-center">
              <li className="flex justify-between">
                <img
                  src="/assets/images/adhoc_text.png"
                  width={100}
                  alt="Scaneaza Meniu Cod QR, Meniu Digital"
                />
                <button
                  className="shadow transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-[50%] p-[10px]"
                  onClick={handleMenuStatus}
                >
                  <RxCross2 />
                </button>
              </li>
              <li
                className={`cursor-pointer ${
                  location.pathname === '/' ? 'text-[#ffbd21]' : ''
                } transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px]`}
              >
                <Link to="/">{t('header.home')}</Link>
              </li>
              <li
                className={`cursor-pointer ${
                  location.pathname === '/about' ? 'text-[#ffbd21]' : ''
                } transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px]`}
              >
                <Link to="/about">{t('header.about')}</Link>
              </li>
              <li
                className={`cursor-pointer ${
                  location.pathname === '/contact' ? 'text-[#ffbd21]' : ''
                } transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px]`}
              >
                <Link to="/contact">{t('header.contact')}</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header01
