import { useTranslation } from 'react-i18next'
import { Button, CheckBox, TextArea, TextInput } from '../../common'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const BeAPartner = () => {
  const { t } = useTranslation()

  const [data, setData] = useState({
    from_name: '',
    email: '',
    phone: '',
    message: '',
  })

  const onChange = ({ target: { name, value } }) => {
    const newData = { ...data }
    newData[name] = value
    setData(newData)
  }

  const validateForm = () => {
    if (!data.from_name) {
      toast.error('Please enter your name', {
        position: 'bottom-right',
      })
      return false
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      toast.error('Please enter a valid email address', {
        position: 'bottom-right',
      })
      return false
    }
    if (!data.phone || !/^\d{10}$/.test(data.phone)) {
      toast.error('Please enter a valid phone number', {
        position: 'bottom-right',
      })
      return false
    }
    if (!data.message) {
      toast.error('Please enter a message', {
        position: 'bottom-right',
      })
      return false
    }
    return true
  }

  const submitForm = async () => {
    if (validateForm()) {
      try {
        await fetch('/api/become-partner', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        toast.success('Your Message has been received!')
      } catch (error) {
        toast.error('An error has occured, please try to contact us later!')
        console.error(error)
      }
      const resetData = {
        from_name: '',
        email: '',
        phone: '',
        message: '',
      }
      setData(resetData)
    }
  }

  return (
    <div
      id="become"
      className="mt-[50px] border-[#FFBB00] p-[50px] border-dashed border-[3px]"
    >
      <h2 className="text-[1.75rem] font-extrabold mb-[20px]">
        {t('homepage.start')}
      </h2>
      <div className="max-w-[500px] m-auto">
        <TextInput
          name="from_name"
          value={data.from_name}
          placeholder={t('homepage.name')}
          className="w-full mt-[20px]"
          onChange={onChange}
        />
        <TextInput
          name="email"
          value={data.email}
          placeholder={t('homepage.email')}
          className="w-full mt-[20px]"
          onChange={onChange}
        />
        <TextInput
          name="phone"
          value={data.phone}
          placeholder={t('homepage.phone')}
          className="w-full mt-[20px]"
          onChange={onChange}
        />
        <TextArea
          name="message"
          value={data.message}
          placeholder={t('homepage.message')}
          className="w-full mt-[20px] min-h-[100px]"
          onChange={onChange}
        />
        <div className="w-full mt-[20px] flex gap-[20px] items-center">
          <CheckBox
            checked={data?.conditions || false}
            name="conditions"
            onChange={(e) =>
              onChange({
                target: { name: 'conditions', value: e.target.checked },
              })
            }
          />
          <span>{t('homepage.accept')}</span>
        </div>
        <Button
          className="mt-[20px] min-w-[40%]"
          text={t('homepage.send')}
          disabled={!data?.conditions}
          onClick={() => submitForm()}
        />
      </div>
    </div>
  )
}

export default BeAPartner
