import { useTranslation } from 'react-i18next'

const HowItWorks = () => {
  const { t } = useTranslation()

  return (
    <div className="relative p-4 xl:px-[250px] md:px-[80px] text-center mt-[100px] overflow-x-hidden">
      <div className="absolute -right-[100px] md:-right-[350px] -top-[150px] md:-top-[0px] w-[400px] h-[400px] md:w-[1000px] md:h-[1000px]">
        <img src="/assets/images/how01.png" />
      </div>
      <h2 className="uppercase md:text-[60px] text-[40px] font-bold">
        {t('homepage.how_title')}
      </h2>
      <p>{t('homepage.how_text')}</p>
      <div className="flex md:flex-row flex-col items-center mt-[50px]">
        <div className="w-1/2 text-left md:flex flex-col hidden">
          <h2 className="uppercase md:text-[40px] text-[30px] not-italic font-semibold leading-[50px]">
            {t('homepage.how_card1_title')}
          </h2>
          <p className="mt-[15px]">{t('homepage.how_card1_text')}</p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/assets/images/Group 201.png" alt="" />
        </div>
        <div className="text-left md:hidden flex-col flex p-10">
          <h2 className="uppercase text-[20px] not-italic font-semibold leading-[30px]">
            {t('homepage.how_card2_title')}
          </h2>
          <p className="mt-[15px] text-[12px]">
            {t('homepage.how_card2_text')}
          </p>
        </div>
      </div>
      <div className="flex justify-center md:px-[150px] px-[100px]">
        <img src="/assets/images/Vector 2.png" alt="" />
      </div>
      <div className="relative flex md:flex-row flex-col items-center mt-[50px]">
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/assets/images/Group 145.png" alt="" />
        </div>
        <div className="w-full md:w-1/2 text-left flex-col flex md:p-0 p-10 md:px-10">
          <h2 className="uppercase md:text-[40px] text-[20px] not-italic font-semibold md:leading-[50px] leading-[30px]">
            {t('homepage.how_card3_title')}
          </h2>
          <p className="mt-[15px] text-[12px] md:text-[16px]">
            {t('homepage.how_card3_text')}
          </p>
        </div>
        <div className="absolute -left-[300px] md:-left-[550px] xl:-left-[650px] -top-[150px] md:-top-[0px] w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
          <img src="/assets/images/value_extra.png" alt="" />
        </div>
      </div>
      <div className="flex justify-center md:px-[150px] px-[100px]">
        <img src="/assets/images/Vector 3.png" alt="" />
      </div>
      <div className="flex md:flex-row flex-col items-center mt-[50px]">
        <div className="w-1/2 text-left md:flex flex-col hidden">
          <h2 className="uppercase md:text-[40px] text-[30px] not-italic font-semibold leading-[50px]">
            {t('homepage.how_card1_title')}
          </h2>
          <p className="mt-[15px]">
            Sky is the limit: Access one of our cool feature to help your
            business: international translations, SMS notifications, nutritional
            values calculator, personalized menu holders and much more
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/assets/images/Group 47.png" alt="" />
        </div>
        <div className="text-left md:hidden flex-col flex p-10">
          <h2 className="uppercase text-[20px] not-italic font-semibold leading-[30px]">
            Updates Can Be Done At Any Time
          </h2>
          <p className="mt-[15px] text-[12px]">
            Sky is the limit: Access one of our cool feature to help your
            business: international translations, SMS notifications, nutritional
            values calculator, personalized menu holders and much more
          </p>
        </div>
      </div>
      <div className="flex justify-center md:px-[150px] px-[100px]">
        <img src="/assets/images/Vector 2.png" alt="" />
      </div>
      <div className="relative flex md:flex-row flex-col items-center mt-[50px]">
        <div className="md:w-1/2 w-full flex justify-center">
          <img src="/assets/images/Group 45.png" alt="" />
        </div>
        <div className="w-full md:w-1/2 text-left flex-col flex md:p-0 p-10 md:px-10">
          <h2 className="uppercase md:text-[40px] text-[20px] not-italic font-semibold md:leading-[50px] leading-[30px]">
            A fast&easy digital menu
          </h2>
          <p className="mt-[15px] text-[12px] md:text-[16px]">
            At the end, you will have a custom QR code for you menu tailored
            exactly on you needs, configured by you or with help from us.
          </p>
        </div>
        <div className="absolute -right-[170px] md:-right-[550px] -top-[200px] md:top-auto md:bottom-[0px] bottom-auto w-[400px] h-[300px] md:w-[850px] md:h-[450px]">
          <img
            src="/assets/images/how02.png"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
