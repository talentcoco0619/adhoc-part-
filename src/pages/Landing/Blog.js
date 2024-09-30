import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import RectangleButton from '../../common/RectangleButton'
import { BsArrowRight } from 'react-icons/bs'

const Blog = () => {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="p-4 xl:px-[150px] md:px-[30px] text-center mt-[100px]">
        <h2 className="uppercase md:text-[60px] text-[40px] font-bold font-[Poppins] leading-[75px] not-italic">
          {t('homepage.blog_title')}
        </h2>
        <div className="flex mt-[50px] w-full justify-center overflow-x-hidden">
          <div className="hidden md:flex items-center p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <circle
                cx="22.5"
                cy="22.5"
                r="22"
                transform="matrix(-1 0 0 1 45 0)"
                stroke="black"
              />
              <path
                d="M12.6464 23.3536C12.4512 23.1583 12.4512 22.8417 12.6464 22.6464L15.8284 19.4645C16.0237 19.2692 16.3403 19.2692 16.5355 19.4645C16.7308 19.6597 16.7308 19.9763 16.5355 20.1716L13.7071 23L16.5355 25.8284C16.7308 26.0237 16.7308 26.3403 16.5355 26.5355C16.3403 26.7308 16.0237 26.7308 15.8284 26.5355L12.6464 23.3536ZM32 23.5L13 23.5L13 22.5L32 22.5L32 23.5Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 p-3 py-10">
              <div className="w-full">
                <div className="flex justify-start">
                  <div className="relative w-full flex-shrink-0 mb-[50px]">
                    <img
                      src="/assets/images/blog01.png"
                      alt="Blog 01"
                      className="rounded-[15px] w-full"
                    />
                    <div
                      className="absolute bg-white rounded-[10px] w-4/5 -bottom-[50px] shadow-lg flex items-center flex-col justify-center p-[19px] h-[148px]"
                      style={{ left: '10%', right: '10%' }}
                    >
                      <h4 className="w-full text-left font-bold text-[16px] mb-[19px]">
                        {t('homepage.blog_card1_title')}
                      </h4>
                      <Link
                        to="/blog/what-is-a-digital-menu"
                        className="flex items-center w-full text-left text-[#FFB800]"
                      >
                        {t('homepage.learn_more')} <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-1/3 p-3 py-10">
              <div className="w-full">
                <div className="flex justify-start">
                  <div className="relative w-full flex-shrink-0 mb-[50px]">
                    <img
                      src="/assets/images/blog02.png"
                      alt="Blog 02"
                      className="rounded-[15px] w-full"
                    />
                    <div
                      className="absolute bg-white rounded-[10px] w-4/5 -bottom-[50px] shadow-lg flex items-center flex-col justify-center p-[19px] h-[148px]"
                      style={{ left: '10%', right: '10%' }}
                    >
                      <h4 className="w-full text-left font-bold text-[16px] mb-[19px]">
                        {t('homepage.blog_card2_title')}
                      </h4>
                      <Link
                        to="/blog/explicatii-ordin-anpc-2022"
                        className="flex items-center w-full text-left text-[#FFB800]"
                      >
                        {t('homepage.learn_more')} <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-full md:w-1/3 p-3 py-10">
              <div className="w-full">
                <div className="flex justify-start">
                  <div className="relative mb-[50px] w-full flex-shrink-0">
                    <img
                      src="/assets/images/blog03.png"
                      alt="Blog 03"
                      className="rounded-[15px] w-full"
                    />
                    <div
                      className="absolute bg-white rounded-[10px] w-4/5 -bottom-[50px] shadow-lg flex items-center flex-col justify-center p-[19px] h-[148px]"
                      style={{ left: '10%', right: '10%' }}
                    >
                      <h4 className="w-full text-left font-bold text-[16px] mb-[19px]">
                        {t('homepage.blog_card3_title')}
                      </h4>
                      <Link
                        to="/blog/what-is-a-pos-system"
                        className="flex items-center w-full text-left text-[#FFB800]"
                      >
                        {t('homepage.learn_more')} <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 45 45"
              fill="none"
            >
              <circle cx="22.5" cy="22.5" r="22" stroke="black" />
              <path
                d="M32.3536 23.3536C32.5488 23.1583 32.5488 22.8417 32.3536 22.6464L29.1716 19.4645C28.9763 19.2692 28.6597 19.2692 28.4645 19.4645C28.2692 19.6597 28.2692 19.9763 28.4645 20.1716L31.2929 23L28.4645 25.8284C28.2692 26.0237 28.2692 26.3403 28.4645 26.5355C28.6597 26.7308 28.9763 26.7308 29.1716 26.5355L32.3536 23.3536ZM13 23.5L32 23.5L32 22.5L13 22.5L13 23.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <RectangleButton
          icon={<BsArrowRight />}
          text={t('homepage.blog_see')}
          className="h-[41px] rounded-lg border-[#46464687] border-solid bg-[#FFF] border border-[1px] hover:bg-[#808080] hover:text-white transition duration-200"
          variant="icon"
        />
      </div>
    </div>
  )
}

export default Blog
