import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsTiktok } from 'react-icons/bs'
import CircleIcon from '../../common/CircleIcon'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import RectangleButton from '../../common/RectangleButton'
import { useTranslation } from 'react-i18next'

const ContactUs = ({ id }) => {
  const { t } = useTranslation()
  const [state, setState] = useState({})
  const [errors, setErrors] = useState({})

  const emailPattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/
  const phonePattern = /^\+?[0-9]{10,13}$/

  const validateForm = () => {
    const validationErrors = {}

    if (!state.from_name) validationErrors.from_name = 'Name is mandatory!'

    if (!state.role) validationErrors.role = 'Role is mandatory!'

    if (!state.phone) {
      validationErrors.phone = 'Phone Number is mandatory'
    } else if (!phonePattern.test(state.phone)) {
      validationErrors.phone = 'Invalid Phone Number'
    }

    if (!state.email) {
      validationErrors.email = 'Email Address is mandatory'
    } else if (!emailPattern.test(state.email)) {
      validationErrors.email = 'Invalid Email Address'
    }

    if (!state.message) validationErrors.message = 'Please enter a message'

    if (!state.condition)
      validationErrors.condition = 'You must accept the Terms&Conditions!'

    setErrors(validationErrors)

    return Object.keys(validationErrors).length === 0
  }

  const handleUpdate = (e) => {
    if (e.target.name === 'condition') {
      setState((prv) => ({
        ...prv,
        [e.target.name]: e.target.checked,
      }))
    } else {
      setState((prv) => ({
        ...prv,
        [e.target.name]: e.target.value,
      }))
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: undefined,
    }))
  }

  const handleSubmit = () => {
    const isFormValid = validateForm()

    if (!isFormValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: 'You must complete all mandatory (*) fields!',
      }))
    } else {
      fetch('/api/become-partner-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
      })
        .then((res) => {
          toast.success('Successfully sent', {
            position: 'bottom-right',
          })
          setState({})
        })
        .catch((err) => {
          toast.error('Error occurred!', {
            position: 'bottom-right',
          })
        })
    }
  }

  return (
    <div id={id} className="relative overflow-x-clip">
      <img
        src="/assets/images/contact_img01.png"
        alt="contact img"
        className="absolute my-auto lg:-right-[200px] md:-right-[300px] -right-[100px] md:h-full h-[200px] md:top-auto -top-[50px]"
      />
      <div className="p-4 xl:px-[150px] md:px-[30px] text-center mt-[100px]">
        <div className="w-full text-black flex flex-col md:flex-row items-center gap-[50px] md:px-[30px] px-4 justify-between">
          <div className="md:hidden">
            <h2 className="xxs:text-[28px] sm:text-[45px] md:text-[55px] text-[40px] font-bold md:leading-[80px] leading-[49px]">
              {t('homepage.contactus_title')}
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[43px] w-full md:w-[320px]  md:order-1 order-2">
            <div className="hidden md:flex">
              <h2 className="md:text-[55px] text-[40px] font-bold md:leading-[80px] leading-[49px]">
                {t('homepage.contactus_title')}
              </h2>
            </div>
            <div className="flex flex-col gap-[10px] items-center md:items-start">
              <div className="flex gap-[13px]">
                <img
                  src="/assets/images/phone_icon.png"
                  className="w-[25px] h-[25px]"
                  alt=""
                />
                <p className="text-base not-italic font-normal leading-[28px]">
                  123-456-7890
                </p>
              </div>
              <div className="flex gap-[13px] items-center md:items-start">
                <img
                  src="/assets/images/email_icon.png"
                  className="w-[25px] h-[25px]"
                  alt=""
                />
                <p className="text-base not-italic font-normal leading-[28px]">
                  info@example.com
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <CircleIcon Icon={AiFillFacebook} />
              <CircleIcon Icon={AiOutlineTwitter} />
              <CircleIcon Icon={AiFillYoutube} />
              <CircleIcon Icon={AiOutlineInstagram} />
              <CircleIcon Icon={BiLogoLinkedin} />
              <CircleIcon Icon={BsTiktok} />
            </div>
          </div>
          <div className="w-full max-w-[800px] flex flex-col items-center md:items-start justify-center md:order-2 order-1">
            <div className="flex flex-row gap-3 w-full h-[55px]">
              <div
                className="w-1/2 border-b text-start"
                style={{
                  borderColor: errors.from_name ? '#DC143C' : '#FFB800',
                }}
              >
                <input
                  placeholder="Name *"
                  className="outline-none p-3"
                  name="from_name"
                  value={state.from_name}
                  onChange={handleUpdate}
                />
              </div>
              <div
                className="w-1/2 border-b text-start"
                style={{ borderColor: errors.role ? '#DC143C' : '#FFB800' }}
              >
                <input
                  placeholder="Role *"
                  className="outline-none p-3"
                  name="role"
                  value={state.role}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div className="flex flex-row gap-3 w-full h-[55px]">
              <div
                className="w-1/2 border-b text-start"
                style={{ borderColor: errors.email ? '#DC143C' : '#FFB800' }}
              >
                <input
                  placeholder="Email *"
                  className="outline-none p-3"
                  name="email"
                  value={state.email}
                  onChange={handleUpdate}
                />
              </div>
              <div
                className="w-1/2 border-b text-start"
                style={{ borderColor: errors.phone ? '#DC143C' : '#FFB800' }}
              >
                <input
                  placeholder="Phone Number *"
                  className="outline-none p-3"
                  name="phone"
                  value={state.phone}
                  onChange={handleUpdate}
                />
              </div>
            </div>
            <div
              className="w-full border-b text-start"
              style={{ borderColor: errors.message ? '#DC143C' : '#FFB800' }}
            >
              <textarea
                className="p-3 w-full min-h-[126px] outline-none bg-transparent"
                placeholder="Message Us *"
                name="message"
                value={state.message}
                onChange={handleUpdate}
              />
            </div>
            {errors.message && (
              <p className="text-red-500 font-bold mt-1">{errors.message}</p>
            )}
            <div className="w-full p-3 text-start flex gap-3">
              <input
                type="checkbox"
                name="condition"
                checked={state.condition}
                onChange={handleUpdate}
              />
              <p className="text-base not-italic font-normal">
                {t('homepage.contactus_agree')}
              </p>
            </div>
            {errors.condition && (
              <p className="text-red-500 font-bold">{errors.condition}</p>
            )}
            <div>
              <RectangleButton
                text="Submit"
                onClick={handleSubmit}
              ></RectangleButton>
              {errors.general && (
                <p className="text-red-600 font-bold uppercase mt-4">
                  {errors.general}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
