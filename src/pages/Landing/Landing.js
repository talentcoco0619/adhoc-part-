import { useEffect, useState } from 'react'
import About from './About'
import AdLogos from './AdLogos'
import Blog from './Blog'
import Calculate from './Calculate'
import Choose from './ChooseProducts'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Header from './Header'
import HowItWorks from './HowItWorks'
import LandingMenu from './LandingMenu'
import LandingPopupMenu from './LandingPopupMenu'
import MadeMind from './MadeMind'
import Pricing from './Pricing'
import TryMe from './TryMe'
import Values from './Values'
import WhyAdHoc from './WhyAdHoc'
import RectangleButton from '../../common/RectangleButton'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const Landing = () => {
  const [showPopup, setShowPopup] = useState(false)
  const { t } = useTranslation()

  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0)
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView()
        }
      }, 850)
    }
  }, [pathname, hash, key])

  const handleBecomeAPartner = () => {
    setShowPopup(true)
  }

  return (
    <div>
      <div className="relative" id="home">
        <div
          className="w-full min-h-[668px] bg-center bg-no-repeat bg-cover xl:hidden flex"
          style={{
            backgroundImage: 'url("/assets/images/Vector 5.png")',
            backgroundPositionX: '80%',
          }}
        ></div>
        <img
          src="/assets/images/Vector 5.png"
          className="xl:flex hidden w-full"
          alt=""
        />
        <div className="absolute w-full h-full top-0 left-0 text-white flex items-center xl:px-[150px] md:px-[30px] px-4">
          <div className="flex flex-col items-start gap-5">
            <div>
              <h1 className="md:text-[90px] sm:text-[47px] text-[37px] font-bold md:leading-[80px] leading-[49px] uppercase">
                {t('homepage.hero_title1')}
              </h1>
              <h2 className="md:text-[65px] sm:text-[45px] text-[30px] font-bold md:leading-[80px] leading-[49px] uppercase">
                {t('homepage.hero_title2')}
              </h2>
              <h3 className="md:text-[60px] sm:text-[37px] text-[27px] font-bold md:leading-[80px] leading-[49px] uppercase">
                {t('homepage.hero_title3')}
              </h3>
            </div>
            <p className="md:max-w-[546px] max-w-[336px]">
              {t('homepage.hero_text')}
            </p>
            <RectangleButton
              className="uppercase"
              size="large"
              text={t('homepage.become')}
              onClick={handleBecomeAPartner}
            ></RectangleButton>
          </div>
        </div>
      </div>
      <Header handleClick={handleBecomeAPartner} />
      <AdLogos />
      <About id="about" />
      <Values />
      {/*<div>*/}
      {/*  <img src="/assets/images/landing_ad.png" className="w-full" />*/}
      {/*</div>*/}
      <LandingMenu />
      <WhyAdHoc id="features" />
      <HowItWorks />
      <Pricing id="prices" handleClick={handleBecomeAPartner} />
      <Choose />
      <TryMe />
      <Calculate />
      <MadeMind handleClick={handleBecomeAPartner} />
      <Blog />
      <ContactUs id="contact" />
      <Footer showSalad={true} />
      {showPopup && <LandingPopupMenu setShowPopup={setShowPopup} />}
    </div>
  )
}

export default Landing
