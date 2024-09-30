import { useTranslation } from 'react-i18next'
import { Button } from '../../common'

const Integrate = () => {
  const { t } = useTranslation()
  return (
    <div className="p-[50px]">
      <h2 className="text-[1.75rem] font-extrabold">
        {t('homepage.integrate')}
      </h2>
      <p className="text-[10px]">{t('homepage.integrate_sub')}</p>
      <div className="max-w-[200px] flex flex-col justify-center items-center m-auto">
        <img
          src="/assets/images/image 52.png"
          className="w-full"
          alt="integrate image"
        />
        <Button variant="outline" text={t('homepage.learn_more')} />
      </div>
    </div>
  )
}

export default Integrate
