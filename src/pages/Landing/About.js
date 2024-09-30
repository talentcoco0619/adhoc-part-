import { useTranslation } from 'react-i18next'
const About = ({ id }) => {
  const { t } = useTranslation()
  return (
    <div
      id={id}
      className="relative flex justify-center gap-[50px] w-full p-2 overflow-x-clip mt-[100px]"
    >
      <div className="w-1/2 md:flex hidden h-full justify-end">
        <div className="h-full">
          <img
            src="/assets/images/about.png"
            alt="about logo"
            className="max-w-[450px]"
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full flex md:justify-start justify-center">
        <div className="xxs:mt-5">
          <h2 className="uppercase xxs:-mt-6 xxs:text-[35px] md:text-[60px] text-[40px] font-bold text-center md:text-left mb-[30px]">
            {t('homepage.about_title')}
          </h2>
          <div className="flex gap-[20px] xxs:mt-6 sm:mt-0">
            <div className="p-5 bg-primary rounded-md w-[95px] h-[95px] xxs:w-[53px] xxs:h-[53px] sm:w-[95px] sm:h-[95px]">
              <img
                className="w-full h-full"
                src="/assets/images/target.png"
                alt={t('homepage.about_mission')}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-[#000] font-[Poppins] text-xl not-italic font-semibold leading-[27px]">
                {t('homepage.about_mission')}
              </h4>
              <p className="max-w-[385px] text-[#464646] font-[Poppins] text-sm not-italic font-normal leading-[27px] xxs:mt-1 sm:mt-0">
                {t('homepage.about_mission_text')}
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] mt-[20px] xxs:mt-6">
            <div className="p-5 bg-primary rounded-md xxs:w-[53px] xxs:h-[53px] sm:w-[95px] sm:h-[95px]">
              <img
                className="w-full h-full"
                src="/assets/images/vision.png"
                alt={t('homepage.about_vision')}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-[#000] font-[Poppins] text-xl not-italic font-semibold leading-[27px]">
                {t('homepage.about_vision')}
              </h4>
              <p className="max-w-[385px] text-[#464646] font-[Poppins] text-sm not-italic font-normal leading-[27px] xxs:mt-1">
                {t('homepage.about_vision_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute xxs:-top-[80px] sm:top-[350px] md:-bottom-[200px] bottom-[400px] right-0 md:w-[450px] md:h-[450px] w-[250px] h-[250px] flex justify-end">
        <img
          className="xxs:hidden xs:block sm:block md:block lg:block xl:block h-full"
          src="/assets/images/about_extra.png"
          alt="About extra"
        />
        <img
          className="xs:hidden sm:hidden md:hidden lg:hidden xl:hidden h-full"
          src="/assets/images/about_extra_small.png"
          alt="About extra"
        />
      </div>
    </div>
  )
}

export default About
