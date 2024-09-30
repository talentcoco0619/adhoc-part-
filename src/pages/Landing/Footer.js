import { Link } from 'react-router-dom'
import Expander from '../../common/Expander'
import { useTranslation } from 'react-i18next'

const Footer = ({ showSalad }) => {
  const { t } = useTranslation()
  return (
    <div
      className="relative w-full py-10 mt-[200px]"
      style={{
        backgroundImage: "url('/assets/images/footerbg.svg')",
        backgroundSize: 'cover',
      }}
    >
      <img
        src="/assets/images/bgmask.png"
        alt="bg mask"
        className="w-full h-full absolute top-0 left-0 object-cover opacity-[0.12] z-0 select-none"
      />
      {showSalad && (
        <img
          src="/assets/images/footer_img01.png"
          alt="footer img"
          className="absolute md:-top-[250px] -top-[100px] md:-left-[300px] -left-[150px] md:w-[600px] w-[300px]"
        />
      )}
      <div className="relative z-10 flex flex-wrap px-4 xl:px-[150px] md:px-[30px] w-full justify-between pt-[100px]">
        <div className="w-full md:w-1/4 flex flex-col gap-5 p-5">
          <div className="flex justify-center">
            <img
              src="/assets/images/logo_dark.png"
              className="md:w-[70%] w-[50%]"
              alt="adhoc dark text"
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-center">
              <img
                src="/assets/images/anpc_alter.png"
                className="w-[70%]"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/images/anpc_online.png"
                className="w-[70%]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:flex hidden justify-center">
          <div className="w-[fit-content] flex flex-col gap-8 p-5">
            <h4 className="text-[18px] font-semibold">{t('footer.info')}</h4>
            <Link>{t('footer.become')}</Link>
            <Link>{t('footer.career')}</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:flex hidden justify-center">
          <div className="w-[fit-content] flex flex-col gap-8 p-5">
            <h4 className="text-[18px] font-semibold">{t('footer.general')}</h4>
            <Link to="/terms-and-conditions">{t('footer.terms')}</Link>
            <Link to="/privacy-policy">{t('footer.privacy')}</Link>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:flex hidden justify-center">
          <div className="w-[fit-content] flex flex-col gap-8 p-5">
            <h4 className="text-[18px] font-semibold">{t('footer.contact')}</h4>
            <Link to="/help">{t('footer.help')}</Link>
            <Link to="/support-si-ajutor">{t('footer.support')}</Link>
          </div>
        </div>
        <div className="md:hidden flex flex-col w-[70%] m-auto gap-10 mb-[30px]">
          <Expander title="Info">
            <Link>{t('footer.become')}</Link>
            <Link>{t('footer.career')}</Link>
          </Expander>
          <Expander title="General">
            <Link to="/terms-and-conditions">{t('footer.terms')}</Link>
            <Link to="/privacy-policy">{t('footer.privacy')}</Link>
          </Expander>
          <Expander title="Contact">
            <Link to="/help">{t('footer.help')}</Link>
            <Link to="/support-si-ajutor">{t('footer.support')}</Link>
          </Expander>
        </div>
      </div>
      <div className="border-black md:border-t-[1px] border-t-[0px] w-[70%] m-auto text-center p-5">
        {t('footer.rights')}
      </div>
    </div>
  )
}

export default Footer
