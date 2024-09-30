import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineCreditCard, AiOutlineWallet } from 'react-icons/ai'
import CircleCheckBox from '../../common/CircleCheckBox'
import { LiaWalletSolid } from 'react-icons/lia'
const PaymentSelector = ({ method, setMethod }) => {
  const { t } = useTranslation()

  const handleChangePayment = (payment) => {
    setMethod(payment)
  }

  return (
    <div>
      <h3 className="text-[1.5rem] font-extrabold mt-[15px]">
        {t('product.payment')}
      </h3>
      <div className="flex flex-col mt-[10px] shadow rounded-[15px] border-solid border-[1px] border-[#ffb800]">
        <div
          className={`cursor-pointer relative p-[20px] w-full flex items-center justify-between`}
          onClick={() => handleChangePayment('cash')}
        >
          <div className="flex gap-[10px]">
            <CircleCheckBox
              checked={method === 'cash'}
              onChange={(checked) => handleChangePayment('cash')}
            />
            <h4 className="font-bold text-[1.1rem]">{t('product.cash')}</h4>
          </div>
          <span className="text-[2rem] ">
            <div className="pr-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="37"
                viewBox="0 0 34 37"
                fill="none"
                style={{ height: 25 }}
              >
                <path
                  d="M27 7V4.97719C27 2.98405 25.0923 1.54506 23.1758 2.09262L4.43522 7.44708C3.26459 7.78154 2.41219 8.79033 2.27774 10.0004L2 12.5"
                  stroke="#FFB800"
                  strokeWidth="3"
                />
                <path
                  d="M29 35.5H5C3.34315 35.5 2 34.1569 2 32.5V13C2 11.3431 3.34315 10 5 10H29C30.6569 10 32 11.3431 32 13V32.5C32 34.1569 30.6569 35.5 29 35.5Z"
                  stroke="#FFB800"
                  strokeWidth="3"
                />
                <circle cx="24.5" cy="22.5" r="2.5" fill="#FFB800" />
              </svg>
            </div>
          </span>
        </div>
        <div className="w-[90%] h-[2px] bg-[#ffb800] mx-auto"></div>
        <div
          className={`cursor-pointer relative p-[20px] w-full flex items-center justify-between`}
          onClick={() => handleChangePayment('online')}
        >
          <div className="flex gap-[10px]">
            <CircleCheckBox
              checked={method === 'online'}
              onChange={(checked) => handleChangePayment('online')}
            />
            <h4 className="font-bold text-[1.1rem]">{t('product.online')}</h4>
          </div>
          <span className="text-[2rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
              style={{ height: 20 }}
            >
              <path
                d="M35 2H5C3.34315 2 2 3.34315 2 5V25C2 26.6569 3.34315 28 5 28H35C36.6569 28 38 26.6569 38 25V5C38 3.34315 36.6569 2 35 2Z"
                stroke="#FFB800"
                strokeWidth="3"
              />
              <path d="M2 8.5H38" stroke="#FFB800" strokeWidth="3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default PaymentSelector
