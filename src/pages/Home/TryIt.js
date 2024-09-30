import { useTranslation } from 'react-i18next'
import { Button } from '../../common'

const TryIt = () => {
  const { t } = useTranslation()
  return (
    <div className="mt-[20px]">
      <h2 className="text-[1.75rem] font-extrabold mb-[20px]">
        {t('homepage.how')}
      </h2>
      <div className="flex flex-col justify-center items-center gap-[10px] md:flex-row md:justify-center">
        <div className="max-w-[160px]">
          <img src="/assets/images/HowItWorks1.png" className="w-full" />
          <p>{t('homepage.scan')}</p>
        </div>
        <div className="max-w-[160px]">
          <img src="/assets/images/HowItWorks2.png" className="w-full" />
          <p>{t('homepage.browse')}</p>
        </div>
        <div className="max-w-[160px]">
          <img src="/assets/images/HowItWorks3.png" className="w-full" />
          <p>{t('homepage.order')}</p>
        </div>
        <div className="max-w-[160px]">
          <img src="/assets/images/HowItWorks4.png" className="w-full" />
          <p>{t('homepage.pay')}</p>
        </div>
      </div>
      <Button text={t('homepage.try')} className="w-[200px] mt-[25px]" />
    </div>
  )
}

export default TryIt
