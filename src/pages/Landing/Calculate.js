import { useTranslation } from 'react-i18next'
import RectangleButton from '../../common/RectangleButton'

const Calculate = () => {
  const { t } = useTranslation()
  return (
    <div className="relative mt-[30px] md:mt-[90px] bg-[#3D3D3D] min-h-[460px] md:h-[587px]">
      <div
        className="w-full h-full bg-center bg-no-repeat bg-cover xl:hidden flex"
        style={{
          backgroundImage: 'url("/assets/images/calculate_bg.png")',
          backgroundPositionX: '70%',
          opacity: '0.07',
        }}
      ></div>
      <img
        src="/assets/images/calculate_bg.png"
        className="xl:flex hidden w-full opacity-[0.07]"
        alt=""
      />
      <img
        src="/assets/images/calculate_img01.png"
        alt="calculate img"
        className="absolute md:-top-[180px] -top-[70px] -left-[250px] md:-left-[400px] md:w-[620px] w-[350px] "
      />
      <div className="absolute w-full h-full top-0 left-0 text-white flex items-center justify-center px-4 font-[Poppins]">
        <div className="flex flex-col text-center items-center gap-5">
          <div>
            <h2 className="md:text-[55px] text-[30px] font-bold md:leading-[80px] not-italic leading-[40px] max-w-[355px] md:max-w-[947px] uppercase">
              {t('homepage.calculate_title')}
            </h2>
          </div>
          <p className="md:max-w-[546px] max-w-[336px]">
            {t('homepage.calculate_text')}
          </p>
          <RectangleButton
            size="large"
            text={t('homepage.calculate_btn')}
          ></RectangleButton>
        </div>
      </div>
    </div>
  )
}

export default Calculate
