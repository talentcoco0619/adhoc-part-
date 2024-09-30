import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const Show404 = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleGotoHome = useCallback(() => {
    navigate('/')
  }, [])
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/assets/images/404.png" alt="404 logo" />
      <p className="text-[1.5rem] font-extrabold mb-[50px] p-[15px]">
        {t('404.title')}
        Something went wrong, our team of monkeys are on it ..
      </p>
      <Button onClick={handleGotoHome} text={t('404.back_btn')} />
    </div>
  )
}

export default Show404
