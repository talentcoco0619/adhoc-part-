import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoFacebook } from 'react-icons/bi'
import { PiTwitterLogoThin, PiInstagramLogoLight } from 'react-icons/pi'
const Footer01 = () => {
  const { t } = useTranslation()
  return (
    <div className="bg-[#ffb800] p-[50px]">
      <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row justify-center items-center gap-[20px]">
        <div className="flex sm:w-full md:w-1/2 flex-col sm:flex-row md:flex-row xl:flex-row justify-around">
          <div className="flex flex-col gap-[5px] mb-4 md:mb-0 w-[200px]">
            <h2 className="text-[1.3rem] font-extrabold mb-[10px]">Info</h2>
            <Link>{t('footer.become')}</Link>
            <Link>{t('footer.career')}</Link>
          </div>
          <div className="flex flex-col gap-[5px] w-[200px]">
            <h2 className="text-[1.3rem] font-extrabold mb-[10px]">General</h2>
            <Link to="/terms">{t('footer.terms')}</Link>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </div>
        </div>
        <div className="flex sm:w-full md:w-1/2 flex-col sm:flex-row md:flex-row xl:flex-row justify-around">
          <div className="flex flex-col gap-[5px] mb-4 md:mb-0 w-[200px]">
            <h2 className="text-[1.3rem] font-extrabold mb-[10px]">Contact</h2>
            <Link to="/support">{t('footer.help')}</Link>
          </div>
          <div className="flex flex-col gap-[5px] w-[200px]">
            <h2 className="text-[1.3rem] font-extrabold mb-[10px]">
              Follow us
            </h2>
            <div className="flex gap-[10px] text-[2.5rem]">
              <Link>
                <PiInstagramLogoLight />
              </Link>
              <Link>
                <BiLogoFacebook />
              </Link>
              <Link>
                <PiTwitterLogoThin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px] flex justify-around flex-col sm:flex-row items-center gap-[50px]">
        <div>
          <img
            src="/assets/images/adhoc_text.png"
            width={200}
            alt="adhoc logo"
          />
          <p className="mt-[5px] text-[10px]">{t('footer.rights')}</p>
        </div>
        <div className="flex items-center gap-[30px]">
          <a href="https://anpc.ro/ce-este-sal/">
            <img
              src="/assets/images/anpc_alter.png"
              alt="Solutionare alternativa"
              className="logo"
            />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/main/?event=main.home2.show">
            <img
              src="/assets/images/anpc_online.png"
              alt="Solutionare online"
              className="logo"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer01
