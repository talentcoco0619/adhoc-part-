import { RiArrowDropDownLine } from 'react-icons/ri'
import Dropdown from '../../common/Dropdown'
import { useTranslation } from 'react-i18next'
const LandingMenu = () => {
  const { t } = useTranslation()
  return (
    <div className="relative">
      <div
        className="w-full min-h-[768px] bg-center bg-no-repeat bg-cover xl:hidden flex py-[20px] pb-[100px]"
        style={{
          backgroundImage: 'url("/assets/images/landing_menu_bg.png")',
          backgroundPositionX: '30%',
        }}
      >
        <div className="w-full h-[fit-content] top-0 left-0 text-white flex flex-col md:flex-row items-start justify-between xl:px-[150px] md:px-[30px] px-4">
          <div className="md:flex-grow md:flex-shrink md:w-1/2 md:mr-[67px] min-w-[270px] mt-[100px] ml-[30px] mr-[30px]">
            <h2 className="uppercase text-[40px] md:text-[55px] font-bold leading-[60px] font-[Poppins]">
              Why have a qr based menu?
            </h2>
            <div className="flex pt-[46px]">
              <div className="mr-[30px]">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/loadingMenu1.png"
                    alt={t('homepage.landing_menu_card1_title')}
                  />
                </div>
              </div>
              <div className="flex flex-col border-[1px] border-solid border-[#FFB800] rounded-[5px] p-4 w-full">
                <Dropdown
                  title={t('homepage.landing_menu_card1_title')}
                  content={t('homepage.landing_menu_card1_text')}
                />
              </div>
            </div>

            <div className="flex pt-[33px]">
              <div className="mr-[30px]">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/loadingMenu2.png"
                    alt={t('homepage.landing_menu_card2_title')}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <div className="flex justify-between items-center border-b-2 border-[#FFB800] p-4">
                  <h3>{t('homepage.landing_menu_card2_title')}</h3>
                  <RiArrowDropDownLine color="#FFB800" size={32} />
                </div>
              </div>
            </div>

            <div className="flex pt-[33px]">
              <div className="mr-[30px]">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/loadingMenu3.png"
                    alt={t('homepage.landing_menu_card3_title')}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center border-b-2 border-[#FFB800] p-4">
                  <h3>{t('homepage.landing_menu_card3_title')}</h3>
                  <RiArrowDropDownLine color="#FFB800" size={32} />
                </div>
              </div>
            </div>

            <div className="flex pt-[33px]">
              <div className="mr-[30px]">
                <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                  <img
                    src="/assets/images/loadingMenu4.png"
                    alt={t('homepage.landing_menu_card4_title')}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center border-b-2 border-[#FFB800] p-4">
                  <h3>{t('homepage.landing_menu_card4_title')}</h3>
                  <RiArrowDropDownLine color="#FFB800" size={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-grow md:flex-shrink md:w-1/2 mt-[100px]">
            <img src="assets/images/Group 202.png" alt="" />
          </div>
        </div>
      </div>
      <img
        src="/assets/images/landing_menu_bg.png"
        className="xl:flex hidden w-full"
        alt=""
      />
      <div className="absolute xl:flex hidden w-full h-[fit-content] top-0 left-0 text-white flex-col md:flex-row items-start justify-between xl:px-[150px] md:px-[30px] px-4">
        <div className="md:flex-grow md:flex-shrink md:w-1/2 md:mr-[67px] min-w-[270px] mt-[100px] ml-[30px] mr-[30px]">
          <h2 className="uppercase text-[40px] md:text-[55px] font-bold leading-[60px] font-[Poppins]">
            {t('homepage.landing_menu_title')}
          </h2>
          <div className="flex pt-[46px]">
            <div className="mr-[30px]">
              <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                <img
                  src="/assets/images/loadingMenu1.png"
                  alt={t('homepage.landing_menu_card1_title')}
                />
              </div>
            </div>
            <div className="flex flex-col border-[1px] border-solid border-[#FFB800] rounded-[5px] p-4 w-full">
              <Dropdown
                title={t('homepage.landing_menu_card1_title')}
                content={t('homepage.landing_menu_card1_text')}
              />
            </div>
          </div>

          <div className="flex pt-[33px]">
            <div className="mr-[30px]">
              <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                <img
                  src="/assets/images/loadingMenu2.png"
                  alt={t('homepage.landing_menu_card2_title')}
                />
              </div>
            </div>
            <div className="flex flex-col w-full ">
              <div className="flex justify-between items-center border-b-2 border-[#FFB800] p-4">
                <h3>{t('homepage.landing_menu_card2_title')}</h3>
                <RiArrowDropDownLine color="#FFB800" size={32} />
              </div>
            </div>
          </div>

          <div className="flex pt-[33px]">
            <div className="mr-[30px]">
              <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                <img
                  src="/assets/images/loadingMenu3.png"
                  alt={t('homepage.landing_menu_card3_title')}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center border-b-2 border-[#FFB800] p-4">
                <h3>{t('homepage.landing_menu_card3_title')}</h3>
                <RiArrowDropDownLine color="#FFB800" size={32} />
              </div>
            </div>
          </div>

          <div className="flex pt-[33px]">
            <div className="mr-[30px]">
              <div className="bg-primary rounded-full w-[66px] h-[66px] p-4">
                <img
                  src="/assets/images/loadingMenu4.png"
                  alt={t('homepage.landing_menu_card4_title')}
                />
              </div>
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center border-b-2 border-[#FFB800] p-4">
                <h3>{t('homepage.landing_menu_card4_title')}</h3>
                <RiArrowDropDownLine color="#FFB800" size={32} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex-grow md:flex-shrink md:w-1/2 mt-[100px]">
          <img src="assets/images/Group 202.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingMenu
