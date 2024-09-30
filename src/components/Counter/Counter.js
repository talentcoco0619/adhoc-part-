import { useEffect, useState } from 'react'
import CircleButton from '../../common/CircleButton'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const Counter = ({
  className,
  onChange,
  value,
  size = 40,
  fontSize = 1.5,
  min = 1,
  max = 99,
}) => {
  const handleMinus = () => {
    if (value > 0) onChange(value - 1)
  }
  const handlePlus = () => {
    onChange(value + 1)
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <CircleButton
        size={size}
        variant="icon"
        icon={<AiOutlineMinus />}
        className="bg-white"
        onClick={handleMinus}
        disabled={value === min}
      />
      <h3 className={`font-bold text-[${fontSize}rem] mx-[10px] select-none`}>
        {value}
      </h3>
      <CircleButton
        size={size}
        variant="icon"
        icon={<AiOutlinePlus />}
        disabled={value === max}
        onClick={handlePlus}
      />
    </div>
  )
}

export default Counter
