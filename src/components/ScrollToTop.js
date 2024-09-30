import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BiUpArrowCircle } from 'react-icons/bi'
const ScrollToTop = (props) => {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const visible = currentScrollPos > 150
      setVisible(visible)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {props.children}
      {visible && (
        <span
          className="shadow-lg fixed bottom-5 right-5 text-2xl cursor-pointer text-white bg-[#FFBB00] rounded-[50%]"
          onClick={handleClick}
        >
          <BiUpArrowCircle className="w-[45px] h-[45px]" />
        </span>
      )}
    </>
  )
}

export default ScrollToTop
