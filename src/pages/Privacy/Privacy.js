import React, { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../common'
import { AiOutlineLeft } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Footer from '../Landing/Footer'
import HeaderDark from '../Landing/HeaderDark'

export const Privacy = () => {
  const { t } = useTranslation()
  const [privacyPolicy, setprivacyPolicy] = useState('')

  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (navigator.language === 'ro') {
      fetch('/api/privacy-policy-ro')
        .then((response) => response.json())
        .then((data) => {
          const paragraphs = data.privacyPolicy.split('\n')
          setprivacyPolicy(paragraphs)
        })
        .catch((error) => console.error(error))
    } else {
      fetch('/api/privacy-policy-en')
        .then((response) => response.json())
        .then((data) => {
          const paragraphs = data.privacyPolicy.split('\n')
          setprivacyPolicy(paragraphs)
        })
        .catch((error) => console.error(error))
    }
  }, [])

  return (
    <div>
      <HeaderDark />

      <div className="flex justify-center mt-16">
        <div className="xxs:pr-12 xxs:pl-12 md:pr-46 md:pl-46 lg:pr-60 lg:pl-60 d-flex flex-col">
          <p className="xxs:text-[25px] sm:text-[36px] lg:text-[55px] font-extrabold mt-12">
            {t('footer.privacy')}
          </p>

          <div className="w-full mt-2">
            {Array.isArray(privacyPolicy) &&
              privacyPolicy.map((paragraph, index) => (
                <p key={index} className="mt-3">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Privacy
