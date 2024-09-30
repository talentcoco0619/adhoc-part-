import { useTranslation } from 'react-i18next'
import RectangleButton from '../../common/RectangleButton'

const MadeMind = ({ handleClick }) => {
  const { t } = useTranslation()
  return (
    <div className="relative bg-[#3D3D3D] h-[240px] md:h-[400px]">
      <div
        className="w-full h-[240px] md:h-[400px] bg-center bg-no-repeat bg-cover xl:hidden flex"
        style={{
          backgroundImage: 'url("/assets/images/Group 239.png")',
          backgroundPositionX: '70%',
        }}
      ></div>
      <img
        src="/assets/images/Group 239.png"
        className="xl:flex hidden w-full md:h-full"
        alt=""
      />
      <div className="absolute w-full h-full top-0 left-0 text-black flex items-center xl:px-[150px] font-[Poppins] md:px-[30px] px-4">
        <div className="flex flex-col items-start gap-5">
          <div>
            <h3 className="xxs:w-[250px] xs:w-[350px] sm:w-[450px] md:text-[55px] text-[30px] font-bold w-[332px] md:w-[630px] md:leading-[80px] leading-[49px] uppercase">
              {t('homepage.mademind_title')}
            </h3>
          </div>
          <RectangleButton
            size="large"
            text={t('homepage.get_started')}
            onClick={handleClick}
          ></RectangleButton>
        </div>
      </div>
    </div>
  )
}

export default MadeMind
