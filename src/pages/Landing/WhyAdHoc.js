import { useTranslation } from 'react-i18next'
const WhyAdHoc = ({ id }) => {
  const { t } = useTranslation()
  return (
    <div id={id} className="relative">
      <div className="p-4 xl:px-[150px] md:px-[30px] text-center mt-[100px]">
        <h2 className="uppercase md:text-[60px] text-[40px] font-bold">
          {t('homepage.why_title')}
        </h2>
        <div className="flex mt-[50px] flex-wrap">
          <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-3 py-10">
            <div className="relative h-full">
              <div className="flex justify-start w-full">
                <div className="rounded-full relative w-[60px] h-[60px]">
                  <div className="bg-primary rounded-full absolute bottom-0 right-0 w-[40px] h-[40px] -z-[10]"></div>
                  <img
                    src="/assets/images/why01.png"
                    alt={t('homepage.why_card1_title')}
                    className="w-[60px] h-[60px]"
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.why_card1_title')}
                </h3>
                <p>{t('homepage.why_card1_text')}</p>
              </div>
            </div>
          </div>
          <div className=" xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-3 py-10">
            <div className="relative h-full">
              <div className="flex justify-start w-full">
                <div className="rounded-full relative w-[60px] h-[60px]">
                  <div className="bg-primary rounded-full absolute bottom-0 right-0 w-[40px] h-[40px] -z-[10]"></div>
                  <img
                    src="/assets/images/why02.png"
                    alt={t('homepage.why_card2_title')}
                    className="w-[60px] h-[60px]"
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.why_card2_title')}
                </h3>
                <p>{t('homepage.why_card2_text')}</p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-3 py-10">
            <div className="relative h-full">
              <div className="flex justify-start w-full">
                <div className="rounded-full relative w-[60px] h-[60px]">
                  <div className="bg-primary rounded-full absolute bottom-0 right-0 w-[40px] h-[40px] -z-[10]"></div>
                  <img
                    src="/assets/images/why03.png"
                    alt={t('homepage.why_card3_title')}
                    className="w-[60px] h-[60px]"
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.why_card3_title')}
                </h3>
                <p>{t('homepage.why_card3_text')}</p>
              </div>
            </div>
          </div>
          <div className=" xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-3 py-10">
            <div className="relative h-full">
              <div className="flex justify-start w-full">
                <div className="rounded-full relative w-[60px] h-[60px]">
                  <div className="bg-primary rounded-full absolute bottom-0 right-0 w-[40px] h-[40px] -z-[10]"></div>
                  <img
                    src="/assets/images/why04.png"
                    alt={t('homepage.why_card4_title')}
                    className="w-[60px] h-[60px]"
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.why_card4_title')}
                </h3>
                <p>{t('homepage.why_card4_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyAdHoc
