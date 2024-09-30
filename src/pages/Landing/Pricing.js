import { VscError } from 'react-icons/vsc'
import { BsCheck2Circle } from 'react-icons/bs'
import { Button } from '../../common'
import Slide from '../../components/Slide/Slide'
import RectangleButton from '../../common/RectangleButton'
import { useTranslation } from 'react-i18next'

const dots = Array.from({ length: 10 }, (_, i) => i + 1)

const Pricing = ({ id, handleClick }) => {
  const { t } = useTranslation()
  return (
    <div id={id} className="relative">
      <div
        className="w-full h-[fit-content] bg-center bg-no-repeat bg-cover xl:hidden flex py-[100px] overflow-hidden"
        style={{
          backgroundImage: 'url("/assets/images/price_bg.png")',
          backgroundPositionX: '70%',
        }}
      >
        <div className="w-full h-full top-0 left-0 text-white flex flex-col justify-start items-start xl:px-[150px] md:px-[30px] px-4">
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="uppercase md:text-[60px] text-[40px] font-bold">
              {t('homepage.pricing_title')}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              erat varius, tincidunt neque a, pellentesque nisi. Etiam vitae
              lectus metus. Aenean placerat enim sapien,
            </p>
          </div>
          <div>
            <Slide selectedIndex={0}>
              <div
                className="p-5 h-[490px] min-w-[350px]"
                onClick={handleClick}
              >
                <div className="bg-white rounded-lg shadow-lg h-full p-10 relative">
                  <p className="text-black opacity-50">Free</p>
                  <h3 className="text-[30px] font-bold text-black mt-[12px]">
                    0$
                  </h3>
                  <div className="absolute top-[10px] right-[10px] w-[30%]">
                    <img
                      src="/assets/images/Ellipse 21.svg"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-3 mt-[27px] items-center">
                    <div className="text-[#D20E0E]">
                      <VscError />
                    </div>
                    <p className="text-black opacity-30">
                      {t('homepage.pricing_sms')}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-[11px] items-center">
                    <div className="text-[#D20E0E]">
                      <VscError />
                    </div>
                    <p className="text-black opacity-30">
                      {t('homepage.pricing_logo')}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-[11px] items-start">
                    <div className="text-[#1a960f] pt-1">
                      <BsCheck2Circle />
                    </div>
                    <p className="text-black w-[150px]">
                      {t('homepage.pricing_pos')}
                    </p>
                  </div>
                  <RectangleButton
                    text={t('homepage.get_started')}
                    className="absolute bottom-[50px] left-[30px]"
                  ></RectangleButton>
                </div>
              </div>
              <div
                className="p-5 h-[490px] min-w-[350px]"
                onClick={handleClick}
              >
                <div className="bg-white rounded-lg shadow-lg h-full p-10 relative">
                  <p className="text-black opacity-50">Standard</p>
                  <h3 className="text-[30px] font-bold text-black mt-[12px]">
                    20$ Free
                  </h3>
                  <div className="absolute top-[10px] right-[10px] w-[30%]">
                    <img
                      src="/assets/images/Ellipse 22.svg"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-3 mt-[27px] items-center">
                    <div className="text-[#1a960f]">
                      <BsCheck2Circle />
                    </div>
                    <p className="text-black opacity-30">
                      {t('homepage.pricing_sms')}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-[11px] items-center">
                    <div className="text-[#1a960f]">
                      <BsCheck2Circle />
                    </div>
                    <p className="text-black opacity-30">
                      {t('homepage.pricing_logo')}
                    </p>
                  </div>
                  <div className="flex gap-3 mt-[11px] items-start">
                    <div className="text-[#1a960f] pt-1">
                      <BsCheck2Circle />
                    </div>
                    <p className="text-black w-[150px]">
                      {t('homepage.pricing_admin')}
                    </p>
                  </div>
                  <RectangleButton
                    className="absolute bottom-[50px] left-[30px]"
                    text={t('homepage.get_started')}
                  ></RectangleButton>
                </div>
              </div>
              <div
                className="p-5 h-[490px] min-w-[350px]"
                onClick={handleClick}
              >
                <div className="bg-white rounded-lg shadow-lg h-full p-10 relative">
                  <p className="text-black opacity-50">Customes</p>
                  <h3 className="text-[30px] font-bold text-black mt-[12px]">
                    Customize
                  </h3>
                  <div className="absolute top-[10px] right-[10px] w-[30%]">
                    <img
                      src="/assets/images/Ellipse 23.svg"
                      className="w-full h-full"
                      alt=""
                    />
                  </div>
                  <div className="flex gap-3 mt-[11px] items-start">
                    <div className="text-[#1a960f] pt-1">
                      <BsCheck2Circle />
                    </div>
                    <p className="text-black w-[150px]">
                      {t('homepage.pricing_custom')}
                    </p>
                  </div>
                  <RectangleButton
                    className="absolute bottom-[50px] left-[30px]"
                    text={t('homepage.get_started')}
                  ></RectangleButton>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/price_bg.png"
        className="xl:flex hidden w-full"
      />
      <div className="xl:flex hidden absolute w-full h-full top-0 left-0 text-white flex-col justify-center items-center xl:px-[150px] md:px-[30px] px-4">
        <h2 className="uppercase md:text-[60px] text-[40px] font-bold">
          Our Pricing
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu erat
          varius, tincidunt neque a, pellentesque nisi. Etiam vitae lectus
          metus. Aenean placerat enim sapien,
        </p>
        <div>
          <Slide selectedIndex={1}>
            <div className="p-5 h-[490px] min-w-[350px]" onClick={handleClick}>
              <div className="bg-white rounded-lg shadow-lg h-full p-10 relative">
                <p className="text-black opacity-50">Free</p>
                <h3 className="text-[30px] font-bold text-black mt-[12px]">
                  0$
                </h3>
                <div className="absolute top-[10px] right-[10px] w-[30%]">
                  <img
                    src="/assets/images/Ellipse 21.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-3 mt-[27px] items-center">
                  <div className="text-[#D20E0E]">
                    <VscError />
                  </div>
                  <p className="text-black opacity-30">SMS Notification</p>
                </div>
                <div className="flex gap-3 mt-[11px] items-center">
                  <div className="text-[#D20E0E]">
                    <VscError />
                  </div>
                  <p className="text-black opacity-30">Logo Icon</p>
                </div>
                <div className="flex gap-3 mt-[11px] items-start">
                  <div className="text-[#1a960f] pt-1">
                    <BsCheck2Circle />
                  </div>
                  <p className="text-black w-[150px]">
                    It includes POS integration
                  </p>
                </div>
                <RectangleButton
                  text="Get started"
                  className="absolute bottom-[50px] left-[30px]"
                ></RectangleButton>
              </div>
            </div>
            <div className="p-5 h-[490px] min-w-[350px]" onClick={handleClick}>
              <div className="bg-white rounded-lg shadow-lg h-full p-10 relative">
                <p className="text-black opacity-50">Standard</p>
                <h3 className="text-[30px] font-bold text-black mt-[12px]">
                  20$ Free
                </h3>
                <div className="absolute top-[10px] right-[10px] w-[30%]">
                  <img
                    src="/assets/images/Ellipse 22.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-3 mt-[27px] items-center">
                  <div className="text-[#1a960f]">
                    <BsCheck2Circle />
                  </div>
                  <p className="text-black opacity-30">SMS Notification</p>
                </div>
                <div className="flex gap-3 mt-[11px] items-center">
                  <div className="text-[#1a960f]">
                    <BsCheck2Circle />
                  </div>
                  <p className="text-black opacity-30">Logo Icon</p>
                </div>
                <div className="flex gap-3 mt-[11px] items-start">
                  <div className="text-[#1a960f] pt-1">
                    <BsCheck2Circle />
                  </div>
                  <p className="text-black w-[150px]">
                    Admin Configuration Available
                  </p>
                </div>
                <RectangleButton
                  className="absolute bottom-[50px] left-[30px]"
                  text="Get started"
                ></RectangleButton>
              </div>
            </div>
            <div className="p-5 h-[490px] min-w-[350px]" onClick={handleClick}>
              <div className="bg-white rounded-lg shadow-lg h-full p-10 relative">
                <p className="text-black opacity-50">Customes</p>
                <h3 className="text-[30px] font-bold text-black mt-[12px]">
                  Customize
                </h3>
                <div className="absolute top-[10px] right-[10px] w-[30%]">
                  <img
                    src="/assets/images/Ellipse 23.svg"
                    className="w-full h-full"
                  />
                </div>
                <div className="flex gap-3 mt-[11px] items-start">
                  <div className="text-[#1a960f] pt-1">
                    <BsCheck2Circle />
                  </div>
                  <p className="text-black w-[150px]">
                    For this package, large partners can have a custom
                    agreement.
                  </p>
                </div>
                <RectangleButton
                  className="absolute bottom-[50px] left-[30px]"
                  text="Get started"
                ></RectangleButton>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  )
}

export default Pricing
