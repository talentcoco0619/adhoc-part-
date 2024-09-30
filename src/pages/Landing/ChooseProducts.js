import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import Slide from '../../components/Slide/Slide'
import { useTranslation } from 'react-i18next'
const Choose = () => {
  const { t } = useTranslation()
  return (
    <div className="relative">
      <div className="p-4 xl:px-[150px] md:px-[30px] text-center mt-[100px]">
        <h2 className="uppercase md:text-[60px] text-[40px] font-bold font-[Poppins] leading-[75px] not-italic">
          {t('homepage.choose_title')}
        </h2>
        <div className="flex mt-[50px] w-full overflow-hidden">
          <div className="hidden md:flex items-center p-1">
            <BsArrowLeftCircle size={32} />
          </div>
          <div>
            <Slide selectedIndex={null}>
              <div className="p-3 py-10 min-w-[350px]">
                <div className="w-full">
                  <div className="flex justify-start">
                    <div className="w-full  flex-shrink-0">
                      <img
                        src="/assets/images/choose1.png"
                        alt="Choose 01"
                        className="rounded-[15px] w-full select-none"
                      />

                      <div className="flex flex-col justify-between mt-[15px] gap-5">
                        <h3 className="text-left font-bold">
                          Holder Vertical “L” Plexiglas Personnalizat - A6
                        </h3>
                        <div className="flex flex-row gap-3">
                          <p className="text-[25px] not-italic font-bold leading-[26px]">
                            32 RON
                          </p>
                          <img src="/assets/images/Group 130.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3 py-10 min-w-[350px]">
                <div className="w-full">
                  <div className="flex justify-start">
                    <div className="w-full  flex-shrink-0">
                      <img
                        src="/assets/images/choose2.png"
                        alt="Choose 02"
                        className="rounded-[15px] w-full select-none"
                      />
                      <div className="flex flex-col justify-between mt-[15px] gap-5">
                        <h3 className="text-left font-bold">
                          Stickere laminate Personalizate Rezistente la
                          Intemperli - 10x7 cm
                        </h3>
                        <div className="flex flex-row gap-3">
                          <p className="text-[25px] not-italic font-bold leading-[26px]">
                            30 RON
                          </p>
                          <img src="/assets/images/Group 130.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>

          <div className="hidden md:flex items-center p-1">
            <BsArrowRightCircle size={32} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choose
