import { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import HeaderPopupMenu from './HeaderPopupMenu'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HeaderDark = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('En')
  const { i18n, t } = useTranslation()

  const languages = [
    { code: 'En', flag: '/assets/images/en.png' },
    { code: 'Ro', flag: '/assets/images/ro.png' },
  ]

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode.toLowerCase())
    setSelectedLanguage(langCode)
    setShowMenu(false)
  }

  return (
    <div className="w-full">
      <header className="absolute top-0 left-0 h-[80px] p-4 xl:px-[150px] md:px-[30px] flex justify-between items-center w-full bg-[#263238]">
        <div className="h-full">
          <a href="/">
            <img
              className="xxs:w-full xxs:h-full sm:w-full sm:h-full lg:w-full lg:h-full"
              src="/assets/images/logo.png"
              alt="Scaneaza Meniu Cod QR, Meniu Digital"
            />
          </a>
        </div>
        <div className="md:flex hidden">
          <ul className="flex justify-center gap-7 text-white">
            <li className="cursor-pointer">
              <Link to="/#home">{t('header.home')}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/#about">{t('header.about')}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/#features">{t('header.features')}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/#services">{t('header.services')}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/#blog">{t('header.blog')}</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/#contact">{t('header.contact')}</Link>
            </li>
          </ul>
        </div>
        <div className="md:flex hidden">
          <button className="text-white gap-3 items-center p-1 px-3 flex">
            <BiUser />
            Login
          </button>
          <div className="border-r-[1px] border-white p-1 px-2"></div>
          <div className="relative inline-block ml-6">
            <button
              className="text-white border border-white p-1 px-2 rounded-md flex items-center"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={
                  languages.find((lang) => lang.code === selectedLanguage).flag
                }
                alt="Selected Flag"
                className="inline-block w-5 h-5 mr-2 rounded-full"
              />
              <FiChevronDown />
            </button>
            {showMenu && (
              <div className="absolute z-0 mt-2 shadow-lg bg-white rounded-md">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`cursor-pointer p-2 px-3 flex text-black text-[10px] items-center ${
                      selectedLanguage === lang.code ? 'bg-primary' : ''
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <img
                      src={lang.flag}
                      alt={`${lang.code} Flag`}
                      className="inline-block w-5 h-5 mr-2 rounded-full"
                    />
                    {lang.code}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden flex">
          <div className="relative inline-block ml-6">
            <button
              className="text-white border border-white p-1 px-2 rounded-md flex items-center"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={
                  languages.find((lang) => lang.code === selectedLanguage).flag
                }
                alt="Selected Flag"
                className="inline-block w-5 h-5 mr-2 rounded-full"
              />
              <FiChevronDown />
            </button>
            {showMenu && (
              <div className="absolute z-0 mt-2 shadow-lg bg-white rounded-md">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`cursor-pointer p-2 px-3 flex text-black text-[10px] items-center ${
                      selectedLanguage === lang.code ? 'bg-primary' : ''
                    }`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <img
                      src={lang.flag}
                      alt={`${lang.code} Flag`}
                      className="inline-block w-5 h-5 mr-2 rounded-full"
                    />
                    {lang.code}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button className="text-white p-1 ml-3">
            <BiUser />
          </button>
          <div className="relative ml-3">
            <button
              className="text-white p-1"
              onClick={() => setShowDropdownMenu(!showDropdownMenu)}
            >
              <AiOutlineMenu />
            </button>
            {showDropdownMenu && (
              <HeaderPopupMenu setShowPopup={setShowDropdownMenu} />
            )}
          </div>
        </div>
      </header>
    </div>
  )
}

export default HeaderDark
