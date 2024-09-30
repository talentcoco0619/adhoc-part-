import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BurgerMenuIcon } from './Header01'
import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { BsCart4, BsPersonPlus } from 'react-icons/bs'
import { Button, TextInput } from '../../common'
import useViewportWidth from '../../hooks/useViewportWidth'
import { ProductBusketContext } from '../../layouts/ProductLayout'
import { toast } from 'react-hot-toast'
import useValidProductURL from '../../hooks/useValidProduct'
import { formatPrice } from '../../utils/number'

export const languages = [
  {
    title: 'Romania',
    path: '/assets/images/ro.png',
    value: 'ro',
  },
  {
    title: 'English',
    path: '/assets/images/en.png',
    value: 'en',
  },
]

const cleanData = (data) => {
  const res = data.reduce((result, item) => {
    if (item.IsCategory) {
      return [
        ...result,
        { id: item.ID, name: item.Name },
        ...cleanData(item.Items),
      ]
    } else {
      return [
        ...result,
        { id: item.ID, name: item.Name, price: item.Price, product: item },
      ]
    }
  }, [])
  return res
}

const Header02 = () => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language.slice(0, 2))
  const navigate = useNavigate()
  const menuTimeoutRef = useRef(null)
  const searchTimeoutRef = useRef(null)
  const validURL = useValidProductURL()
  const [search, setSearch] = useState('')
  const viewportWidth = useViewportWidth()
  const isLargeScreen = viewportWidth >= 640
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [subMenuIndex, setSubMenuIndex] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const { busket, data, setProduct, setShowDialog } =
    useContext(ProductBusketContext)

  const handleMenuStatus = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const handleGotoHome = () => {
    navigate('/')
  }

  const toggleMenu = (subIndex) => {
    if (subMenuIndex !== subIndex) {
      setMenuOpen(true)
      setSubMenuIndex(subIndex)
    } else {
      setMenuOpen((prevState) => !prevState)
    }
  }

  const handleGotoCart = (e) => {
    e.stopPropagation()

    if (validURL) {
      navigate('/food-ordering')
    } else {
      toast.error(t('header.functionality_unavailable'), {
        position: 'bottom-right',
      })
    }
  }

  const busketHeaderButton = () => (
    <li
      className={`cursor-pointer relative transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] ${
        isMenuOpen && subMenuIndex === 2 ? 'bg-gray-100' : ''
      }`}
      onClick={() => toggleMenu(2)}
    >
      <BsCart4 className="w-[30px] h-[30px]" />
      {busket && busket.length !== 0 && (
        <span className="absolute left-[5px] top-[5px] bg-[#FF0000] text-white rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]">
          {busket.length}
        </span>
      )}

      {isMenuOpen && subMenuIndex === 2 && (
        <div className="absolute mt-[20px] bg-white rounded-[10px] shadow-md p-[10px] -right-[40px] w-[300px] border-[1px] border-solid border-[#e5e5e5]">
          <ul className="flex flex-col gap-[10px]">
            {busket.length === 0 ? (
              <li>
                <p className="text-black text-[12px]">
                  You have no items in your shopping cart
                </p>
              </li>
            ) : (
              <>
                {busket.map((x) => (
                  <li key={x.id} className="flex justify-between items-center">
                    <p className="text-black text-[18px]">{x.item.Name}</p>
                    <p className="text-black text-[18px] font-bold">{x.qty}</p>
                  </li>
                ))}
                <li key={null} className="flex justify-center">
                  <Button
                    text={t('header.go_to_cart')}
                    variant="outline"
                    onClick={handleGotoCart}
                  />
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </li>
  )

  const handleChangeLanguage = (e, v) => {
    i18n.changeLanguage(v)
    setLanguage(v)
    sessionStorage.setItem('language', v)
  }

  useEffect(() => {
    const storedLanguage = sessionStorage.getItem('language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const languageHeaderButton = () => (
    <li
      className={`cursor-pointer relative transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] ${
        isMenuOpen && subMenuIndex === 4 ? 'bg-gray-100' : ''
      }`}
      onClick={() => toggleMenu(4)}
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

      {isMenuOpen && subMenuIndex === 4 && (
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
  )

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleClearSearch = () => {
    setSearch('')
  }

  useEffect(() => {
    // Clear any existing timeout when the effect runs
    if (menuTimeoutRef.current !== null) {
      clearTimeout(menuTimeoutRef.current)
    }

    if (isMenuOpen) {
      menuTimeoutRef.current = setTimeout(() => {
        setMenuOpen(false)
      }, 5000)
    }

    // Cleanup
    return () => {
      if (menuTimeoutRef.current !== null) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [isMenuOpen, subMenuIndex])

  useEffect(() => {
    if (search) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    // When the modal is hidden or the component is unmounted, remove the class
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [search])

  const filteredData = data
    ? cleanData(data).filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : []

  const handleSearchItemClick = (id, product) => {
    if (product) {
      setProduct(product)
      setShowDialog(true)
    } else {
      const element = document.getElementById(id)
      element.scrollIntoView()
    }
    setSearch('')
    setShowSearch(false)
  }

  const handleSearchBoxBlur = () => {
    // Clear any existing timeout when the effect runs
    if (searchTimeoutRef.current !== null) {
      clearTimeout(searchTimeoutRef.current)
    }

    searchTimeoutRef.current = setTimeout(() => {
      setShowSearch(false)
    }, 3000)
  }

  const handleSearchBoxFocus = () => {
    // Clear any existing timeout when the effect runs
    if (searchTimeoutRef.current !== null) {
      clearTimeout(searchTimeoutRef.current)
    }
  }

  return (
    <div className="h-[80px] fixed p-[5px] w-full z-[1]">
      <div className="flex justify-between items-center backdrop-blur-md shadow-lg rounded-[10px] bg-[#ffffff5e] px-[30px] py-[15px]">
        <img
          className="cursor-pointer"
          src="/assets/images/adhoc_text.png"
          alt="adhoc logo"
          width={100}
          onClick={handleGotoHome}
        />
        {isLargeScreen ? (
          <ul className="flex gap-[20px] items-center justify-center">
            <li
              className={`cursor-pointer relative transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] ${
                isMenuOpen && subMenuIndex === 1 ? 'bg-gray-100' : ''
              }`}
              onClick={() => toggleMenu(1)}
            >
              <AiOutlineHeart className="w-[30px] h-[30px]" />

              {isMenuOpen && subMenuIndex === 1 && (
                <div className="absolute mt-[20px] bg-white rounded-[10px] shadow-md p-[10px] right-[0px] w-[300px] border-[1px] border-solid border-[#e5e5e5]">
                  <ul className="flex flex-col gap-[10px]">
                    <li>
                      <p className="text-black text-[12px]">
                        Add your favourite food, restaurants or another
                      </p>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            {busketHeaderButton()}
            <li
              className={`relative cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] ${
                isMenuOpen && subMenuIndex === 3 ? 'bg-gray-100' : ''
              }`}
              onClick={() => toggleMenu(3)}
            >
              <AiOutlineUser className="w-[30px] h-[30px]" />

              {isMenuOpen && subMenuIndex === 3 && (
                <div className="absolute mt-[20px] bg-white rounded-[10px] shadow-md p-[10px] right-[0px] w-[300px] border-[1px] border-solid border-[#e5e5e5]">
                  <ul className="flex flex-col gap-[10px]">
                    <li>
                      <p className="text-black text-[12px]">
                        Log in to your Adhoc account and have full access to the
                        entire shopping list
                      </p>
                    </li>
                    <li className="flex justify-around">
                      <Button text="Login" variant="outline" />
                      <Button text="New account" variant="outline" />
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        ) : (
          <ul className="flex gap-[10px] items-center justify-center">
            <li
              className={`cursor-pointer relative transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] text-[#ffb800] p-[10px]`}
              onClick={() => {
                if (!showSearch) {
                  handleSearchBoxBlur()
                }
                setShowSearch(!showSearch)
                setSearch('')
              }}
            >
              <AiOutlineSearch className="w-[30px] h-[30px]" />
            </li>
            {busketHeaderButton()}
            {languageHeaderButton()}
          </ul>
        )}
      </div>

      {/* {!isLargeScreen && isOpen && (
        <div className="p-[10px] fixed top-0 w-full left-0">
          <div
            id="mobile_menu"
            className={`bg-[#ffffffe0] backdrop-blur-md rounded-[10px] shadow-md p-[20px] transition-opacity duration-300 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <ul className="flex flex-col gap-[5px] text-center">
              <li className="flex justify-between mb-[20px]">
                <img
                  src="/assets/images/adhoc_text.png"
                  width={100}
                  alt="adhoc logo"
                />
                <button
                  className="shadow transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-[50%] p-[10px]"
                  onClick={handleMenuStatus}
                >
                  <RxCross2 />
                </button>
              </li>
              <li
                className={`cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] flex items-center justify-start gap-[50px]`}
              >
                <AiOutlineHeart className="w-[30px] h-[30px]" /> View favorites
              </li>
              <li
                className={`relative cursor-pointer transition duration-300 ease-in-out ${
                  busket.length === 0
                    ? 'opacity-50 pointer-events-none'
                    : 'hover:bg-gray-100'
                } rounded-[10px] p-[10px] text-[#ffb800] flex items-center justify-start gap-[50px]`}
                onClick={handleGotoCart}
              >
                <BsCart4 className="w-[30px] h-[30px]" /> Go to cart
                {busket.length !== 0 && (
                  <span className="absolute left-[5px] top-[5px] bg-[#FF0000] text-white rounded-full w-[15px] h-[15px] flex justify-center items-center text-[10px]">
                    {busket.length}
                  </span>
                )}
              </li>
              <li
                className={`cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] flex items-center justify-start gap-[50px]`}
              >
                <AiOutlineUser className="w-[30px] h-[30px]" /> Login
              </li>
              <li
                className={`cursor-pointer transition duration-300 ease-in-out hover:bg-gray-100 rounded-[10px] p-[10px] text-[#ffb800] flex items-center justify-start gap-[50px]`}
              >
                <BsPersonPlus className="w-[30px] h-[30px]" /> New account
              </li>
            </ul>
          </div>
        </div>
      )} */}

      {!isLargeScreen && showSearch && (
        <div className="mt-[5px] mx-auto w-[95%]">
          <TextInput
            value={search}
            onChange={handleChangeSearch}
            className="flex shadow-lg border"
            icon={<AiOutlineSearch />}
            placeholder="Search in the menu"
            action={<RxCross1 />}
            handleAction={handleClearSearch}
            onBlur={handleSearchBoxBlur}
            onFocus={handleSearchBoxFocus}
          />
          {search && search.length > 3 && (
            <div className="w-[90%] shadow-lg mx-auto mt-[3px] bg-white rounded-[10px] max-h-[300px] overflow-y-auto border p-[10px]">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSearchItemClick(item.id, item.product)}
                  >
                    <div className="flex justify-between p-[10px]">
                      <h3>{item.name}</h3>
                      {item.price ? (
                        <h4 className="font-bold">
                          {formatPrice(item.price)}
                          <small>RON</small>
                        </h4>
                      ) : (
                        <h4 className="font-bold">Category</h4>
                      )}
                    </div>
                    <div className="mx-auto w-[90%] h-[2px] bg-[#ffb800]"></div>
                  </div>
                ))
              ) : (
                <div className="flex justify-between p-[10px]">
                  <h3>No matched data</h3>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header02
