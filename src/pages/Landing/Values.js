import { useTranslation } from 'react-i18next'

const Values = () => {
  const { t } = useTranslation()
  return (
    <div className="relative">
      <div className="p-4 xl:px-[150px] md:px-[30px] text-center mt-[100px]">
        <h2 className="uppercase md:text-[60px] text-[40px] font-bold">
          {t('homepage.values_title')}
        </h2>
        <div className="flex mt-[100px] flex-wrap">
          <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-1 py-10">
            <div className="relative bg-white rounded-lg shadow-lg h-full">
              <div className="absolute -top-[33px] flex justify-center w-full">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/value01.png"
                    alt={t('homepage.values_card1_title')}
                  />
                </div>
              </div>
              <div className="md:p-10 p-5 pt-[50px]">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.values_card1_title')}
                </h3>
                <p>{t('homepage.values_card1_text')}</p>
              </div>
            </div>
          </div>
          <div className=" xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-1 py-10">
            <div className="relative bg-white rounded-lg shadow-lg h-full">
              <div className="absolute -top-[33px] flex justify-center w-full">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/value02.png"
                    alt={t('homepage.values_card2_title')}
                  />
                </div>
              </div>
              <div className="md:p-10 p-5 pt-[50px]">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.values_card2_title')}
                </h3>
                <p>{t('homepage.values_card2_text')}</p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-1 py-10">
            <div className="relative bg-white rounded-lg shadow-lg h-full">
              <div className="absolute -top-[33px] flex justify-center w-full">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/value03.png"
                    alt={t('homepage.values_card3_title')}
                  />
                </div>
              </div>
              <div className="md:p-10 p-5 pt-[50px]">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.values_card3_title')}
                </h3>
                <p>{t('homepage.values_card3_text')}</p>
              </div>
            </div>
          </div>
          <div className=" xl:w-1/4 md:w-1/2 sm:w-1/2 w-1/2 p-1 py-10">
            <div className="relative bg-white rounded-lg shadow-lg h-full">
              <div className="absolute -top-[33px] flex justify-center w-full">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/value04.png"
                    alt={t('homepage.values_card4_title')}
                  />
                </div>
              </div>
              <div className="md:p-10 p-5 pt-[50px]">
                <h3 className="font-bold mt-[15px] mb-[20px]">
                  {t('homepage.values_card4_title')}
                </h3>
                <p>{t('homepage.values_card3_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:bottom-[150px] bottom-auto md:top-auto -top-[100px] md:-left-[450px] -left-[200px] md:w-[650px] md:h-[450px] w-[300px] h-[200px] flex justify-end">
        <img className="h-full" src="/assets/images/value_extra.png" alt="" />
      </div>
    </div>
  )
}

export default Values
