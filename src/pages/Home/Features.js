import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()
  return (
    <div
      className="mt-[50px] bg-cover bg-repeat-space"
      style={{ backgroundImage: `url('assets/images/Vector 55.png')` }}
    >
      <h2 className="text-[1.75rem] font-extrabold mb-[20px]">
        {t('homepage.features')}
      </h2>
      <div className="flex flex-col justify-center items-center gap-[100px] md:flex-row md:justify-center">
        <div className="max-w-[350px]">
          <img
            src="/assets/images/Feature1.png"
            className="w-full"
            alt="feature01 image"
          />
          <p>{t('homepage.rich')}</p>
        </div>
        <div className="max-w-[350px]">
          <img
            src="/assets/images/Feature2.png"
            className="w-full"
            alt="feature02 image"
          />
          <p>{t('homepage.comfortable')}</p>
        </div>
        <div className="max-w-[350px]">
          <img
            src="/assets/images/Feature3.png"
            className="w-full"
            alt="feature03 image"
          />
          <p>{t('homepage.easy')}</p>
        </div>
      </div>
    </div>
  )
}

export default Features
