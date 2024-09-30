import { useTranslation } from 'react-i18next'

const TryMe = () => {
  const { t } = useTranslation()
  return (
    <div className="relative overflow-x-clip">
      <div className="p-4 xl:px-[150px] md:px-[30px] text-center mt-[100px]">
        <img
          src="/assets/images/choose_img1.png"
          alt="choose img"
          className="absolute md:-top-[250px] -top-[100px] md:-right-[300px] -right-[150px] md:w-[600px] w-[300px]"
        />
        <div className="flex flex-col md:flex-row">
          <div className="xxs:hidden sm:flex md:w-1/2  lg:flex-row w-full flex justify-center md:order-1 order-2">
            <img src="/assets/images/Group 173.png" alt="trymePhone" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center justify-center gap-[10px] md:order-2 order-1">
            <h2 className="uppercase md:text-[60px] text-[40px] font-bold font-[Poppins] leading-[75px] not-italic">
              {t('homepage.try_title')}
            </h2>
            <p className="text-[#464646] text-center font-[Poppins] md:text-base not-italic font-normal md:leading-[27px] text-sm  leading-[24px]">
              {t('homepage.try_text')}
            </p>
            <div className="w-[273px] h-[268px] flex-shrink-0">
              <img
                src="/assets/images/QR_code.png"
                alt="QR code"
                className="w-full h-full"
              />
            </div>
            <div className="flex md:flex-row flex-col  text-center font-[Poppins] md:text-base not-italic font-normal md:leading-[27px] text-sm  leading-[24px]">
              <p className="text-[#464646] md:pr-1">
                {t('homepage.try_subtext')}
              </p>
              <a href="#" className="text-[#FFB800]">
                {t('homepage.try_link')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[30px] md:gap-[40px] lg:gap-[56px] p-4 xl:px-[150px] md:px-[30px] mt-[100px] justify-center items-center opacity-50">
        <img
          src="/assets/images/posist.png"
          className="w-[151px] flex-shrink-0 hidden md:flex"
        />
        <img
          src="/assets/images/spoton.png"
          className="w-[189px] flex-shrink-0 hidden lg:flex"
        />
        <img
          src="/assets/images/e_logo.png"
          className="w-[56px] flex-shrink-0 hidden lg:flex"
        />
        <img
          src="/assets/images/oracle.png"
          className="w-[172px] flex-shrink-0"
        />
        <img
          src="/assets/images/gofrugai.png"
          className="w-[182px] flex-shrink-0"
        />
        <img
          src="/assets/images/ebriza.png"
          className="w-[82px] flex-shrink-0"
        />
      </div>
    </div>
  )
}

export default TryMe
