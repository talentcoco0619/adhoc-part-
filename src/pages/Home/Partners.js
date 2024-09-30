import { useTranslation } from 'react-i18next'

const Partners = () => {
  const { t } = useTranslation()
  return (
    <div className="p-[50px]">
      <div className="rounded-[20px] shadow-md p-[30px] bg-white border-[1px] border-solid border-[#e5e5e5]">
        <h2 className="text-[1.75rem] font-extrabold">
          {t('homepage.partners')}
        </h2>
        <p className="mb-[20px] text-[10px]">{t('homepage.partners_sub')}</p>
        <div className="flex flex-col justify-center items-center gap-[100px] md:flex-row md:justify-center">
          <div>
            <img
              src="/assets/images/image 53.png"
              className="w-full"
              alt="little hanai"
            />
          </div>
          <div>
            <img
              src="/assets/images/image 54.png"
              className="w-full"
              alt="klausen burger"
            />
          </div>
          <div>
            <img
              src="/assets/images/image 55.png"
              className="w-full"
              alt="meron home of coffee"
            />
          </div>
          <div>
            <img
              src="/assets/images/image 56.png"
              className="w-full"
              alt="tucano coffee"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
