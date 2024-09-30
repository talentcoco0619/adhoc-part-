import { useTranslation } from 'react-i18next'
import { Button } from '../../common'
import Features from './Features'
import TryIt from './TryIt'
import BeAPartner from './BeAPartner'
import HomeLayout from '../../layouts/HomeLayout'
import Partners from './Partners'
import Integrate from './Integrate'
const Home = () => {
  const { t } = useTranslation()

  const handleGoToBecome = () => {
    const element = document.getElementById('become')
    element.scrollIntoView()
  }
  return (
    <HomeLayout>
      <div className="text-center m-auto p-[10px]">
        <div
          style={{ backgroundImage: `url('/assets/images/cover.png')` }}
          className="bg-cover bg-center sm:h-[350px] h-[150px] w-full rounded-[20px] m-auto flex flex-col gap-[10px] items-center justify-center"
        >
          <h2 className="text-white text-[1.5rem] font-medium select-none">
            {t('homepage.ordering')}
          </h2>
          <Button
            onClick={handleGoToBecome}
            text={t('homepage.become')}
            className="w-[200px]"
          />
        </div>
        <TryIt />
        <Features />
        <BeAPartner />
      </div>
    </HomeLayout>
  )
}

export default Home
