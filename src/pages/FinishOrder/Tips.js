import { useTranslation } from 'react-i18next'
import { Button, TextInput } from '../../common'
import { useState, useEffect } from 'react'

const Tips = () => {
  const { t } = useTranslation()
  const [percent, setPercent] = useState(0)
  const handleSelect = (v) => {
    setPercent(v)
  }
  return (
    <div>
      <div className="mt-[50px] mb-[50px]">
        <h3 className="text-[1.5rem] font-extrabold mt-[15px]">
          {t('product.tips')}
        </h3>
        <h4>{t('product.tips_description')}</h4>
        <div className="flex justify-between">
          <Button
            className={`mt-[10px] ${
              percent === 0 ? 'bg-[#ffb800]' : 'bg-white'
            } border-[#ebebeb91] shadow-lg`}
            text="0%"
            onClick={() => handleSelect(0)}
          />
          <Button
            className={`mt-[10px] ${
              percent === 5 ? 'bg-[#ffb800]' : 'bg-white'
            } border-[#ebebeb91] shadow-lg`}
            text="5%"
            onClick={() => handleSelect(5)}
          />
          <Button
            className={`mt-[10px] ${
              percent === 10 ? 'bg-[#ffb800]' : 'bg-white'
            } border-[#ebebeb91] shadow-lg`}
            text="10%"
            onClick={() => handleSelect(10)}
          />
          <Button
            className={`mt-[10px] ${
              percent === null ? 'bg-[#ffb800]' : 'bg-white'
            } border-[#ebebeb91] shadow-lg`}
            text="_"
            onClick={() => handleSelect(null)}
          />
        </div>
      </div>
    </div>
  )
}

export default Tips
