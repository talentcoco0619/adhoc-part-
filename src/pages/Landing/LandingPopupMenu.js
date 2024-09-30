import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import RectangleButton from '../../common/RectangleButton'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const LandingPopupMenu = ({ setShowPopup }) => {
  const { t } = useTranslation()
  const [state, setState] = useState({})
  const [errors, setErrors] = useState({})
  const [acceptTerms, setAcceptTerms] = useState(false)

  const emailPattern = /^[^ ]+@[^]+\.[a-z]{2,3}$/
  const phonePattern = /^\+?[0-9]{10,13}$/

  const handleChangeAcceptTerms = (event) => {
    setAcceptTerms((current) => !current)
  }

  const validateForm = () => {
    const validationErrors = {}

    if (!state.first_name)
      validationErrors.first_name = t('errors.firstNameMandatory')

    if (!state.last_name)
      validationErrors.last_name = t('errors.lastNameMandatory')

    if (!state.phone) {
      validationErrors.phone = t('errors.phoneMandatory')
    } else if (!phonePattern.test(state.phone)) {
      validationErrors.phone = t('errors.phoneInvalid')
    }

    if (!state.email) {
      validationErrors.email = t('errors.emailMandatory')
    } else if (!emailPattern.test(state.email)) {
      validationErrors.email = t('errors.emailInvalid')
    }

    if (!state.role) validationErrors.role = t('errors.roleMandatory')

    if (!state.company_name)
      validationErrors.company_name = t('errors.companyMandatory')

    if (!state.unique_code)
      validationErrors.unique_code = t('errors.uniqueCodeMandatory')

    if (!state.no_regist)
      validationErrors.no_regist = t('errors.registrationMandatory')

    if (!state.location)
      validationErrors.location = t('errors.locationMandatory')

    if (!state.restaurant)
      validationErrors.restaurant = t('errors.restaurantMandatory')

    if (!state.partner_type)
      validationErrors.partner_type = t('errors.partnerTypeMandatory')

    if (!acceptTerms) validationErrors.acceptTerms = t('errors.termsMandatory')

    setErrors(validationErrors)

    return Object.keys(validationErrors).length === 0
  }

  const handleUpdate = (e) => {
    setState((prv) => ({
      ...prv,
      [e.target.name]: e.target.value,
    }))

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
        general: t('errors.mustAllMandatory'),
      }))
    } else {
      fetch('/api/become-partner', {
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

      setErrors((prevErrors) => ({
        ...prevErrors,
        general: undefined,
      }))
    }
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[#00000091] overflow-auto"
      onClick={() => setShowPopup(false)}
    >
      <div
        className="absolute sm:w-[500px] w-full top-0 right-0 bg-white shadow-lg border p-10 flex flex-col "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute sm:hidden top-[20px] right-[20px] shadow transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-lg rounded-[50%] p-[10px]"
          onClick={() => setShowPopup(false)}
        >
          <RxCross2 />
        </button>
        <h3 className="uppercase text-[40px] not-italic font-bold leading-[45px] mb-[25px]">
          {t('register.title')}
        </h3>
        <h5 className="uppercase font-bold text-[1.2rem]">
          {t('register.contact_info')}
        </h5>
        <div
          className="border-b text-start"
          style={{ borderColor: errors.first_name ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.first_name')}
            className="outline-none py-3 w-full"
            name="first_name"
            value={state.first_name}
            onChange={handleUpdate}
          />
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.last_name ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.last_name')}
            className="outline-none py-3 w-full"
            name="last_name"
            value={state.last_name}
            onChange={handleUpdate}
          />
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.phone ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.phone_number')}
            className="outline-none py-3 w-full"
            name="phone"
            value={state.phone}
            onChange={handleUpdate}
          />
        </div>
        {errors.phone === t('errors.phoneInvalid') && (
          <p className="text-red-500 font-bold mt-1">{errors.phone}</p>
        )}
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.role ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.role')}
            className="outline-none py-3 w-full"
            name="role"
            value={state.role}
            onChange={handleUpdate}
          />
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.email ? '#DC143C' : '#FFB800' }}
        >
          <input
            type="email"
            placeholder={t('register.email')}
            className="outline-none py-3 w-full"
            name="email"
            value={state.email}
            onChange={handleUpdate}
          />
        </div>
        {errors.email === t('errors.emailInvalid') && (
          <p className="text-red-500 font-bold mt-1">{errors.email}</p>
        )}
        <h5 className="uppercase font-bold text-[1.2rem] mt-[2rem]">
          {t('register.company_info')}
        </h5>
        <div className="flex gap-3">
          <div
            className="border-b text-start mt-[10px]"
            style={{ borderColor: errors.company_name ? '#DC143C' : '#FFB800' }}
          >
            <input
              placeholder={t('register.company_name')}
              className="outline-none py-3 w-full"
              name="company_name"
              value={state.company_name}
              onChange={handleUpdate}
            />
          </div>
          <div
            className="border-b text-start mt-[10px]"
            style={{ borderColor: errors.unique_code ? '#DC143C' : '#FFB800' }}
          >
            <input
              placeholder={t('register.unique_code')}
              className="outline-none py-3 w-full"
              name="unique_code"
              value={state.unique_code}
              onChange={handleUpdate}
            />
          </div>
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.no_regist ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.reg_number')}
            className="outline-none py-3 w-full"
            name="no_regist"
            value={state.no_regist}
            onChange={handleUpdate}
          />
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.restaurant ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.res_name')}
            className="outline-none py-3 w-full"
            name="restaurant"
            value={state.restaurant}
            onChange={handleUpdate}
          />
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.location ? '#DC143C' : '#FFB800' }}
        >
          <input
            placeholder={t('register.res_location')}
            className="outline-none py-3 w-full"
            name="location"
            value={state.location}
            onChange={handleUpdate}
          />
        </div>
        <div
          className="border-b text-start mt-[10px]"
          style={{ borderColor: errors.partner_type ? '#DC143C' : '#FFB800' }}
        >
          <select
            type="select"
            name="partner_type"
            value={state.partner_type}
            onChange={handleUpdate}
            className="outline-none py-3 w-full custom-select"
          >
            <option value={null} disabled selected>
              {t('register.partner_type')}
            </option>
            <option value="Free">Free</option>
            <option value="Basic">Basic</option>
            <option value="Custom">Custom</option>
          </select>
        </div>
        {/*<div*/}
        {/*    className="border-b text-start mt-[10px]"*/}
        {/*    style={{ borderColor: '#FFB800' }}*/}
        {/*>*/}
        {/*  <select type="select" className="outline-none py-3 w-full custom-select">*/}
        {/*    <option value={null}>Specific *</option>*/}
        {/*  </select>*/}
        {/*</div>*/}
        <div className="w-full py-3 text-start flex items-center gap-3">
          <input
            value={acceptTerms}
            onChange={handleChangeAcceptTerms}
            type="checkbox"
            className="w-[20px] h-[20px]"
            id="reg-terms"
          />
          <label for="reg-terms" className="text-base not-italic font-normal">
            {t('register.agree_text')}
            <Link to="/terms-and-conditions">{t('register.agree_link')}</Link>?
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-red-500 font-bold mt-1">{errors.acceptTerms}</p>
        )}
        <div className="mt-[20px]">
          <RectangleButton text="Submit" onClick={handleSubmit} />
          {errors.general && (
            <p className="text-red-600 font-bold uppercase mt-4">
              {errors.general}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPopupMenu
