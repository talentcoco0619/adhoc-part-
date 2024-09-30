import React from 'react'

const CircleButton = ({
  className,
  text,
  variant = 'solid',
  icon,
  size,
  onClick,
  disabled = false,
  ...props
}) => {
  let classNames = ''
  let disabledStyles = disabled ? 'opacity-50 pointer-events-none' : ''

  switch (variant) {
    case 'solid':
      classNames = `flex justify-center items-center bg-[#FFB800] border-[1px] border-[#FFB800] text-black font-extrabold p-2 rounded-[50vh] transition duration-300 ease-in-out hover:bg-yellow-600 ${className} ${disabledStyles}`
      break

    case 'outline':
      classNames = `flex justify-center items-center border border-[1px] border-[#FFB800] text-black font-extrabold p-2 rounded-[50vh] bg-transparent hover:bg-[#FFB800] hover:text-white transition duration-200 ${className} ${disabledStyles}`
      break

    case 'icon':
      classNames = `${className} flex justify-center items-center bg-[#FFB800] border-[1px] border-[#FFB800] text-black font-extrabold p-1 rounded-[50vh] transition duration-300 ease-in-out hover:bg-yellow-600  ${disabledStyles}`
      break
  }

  return (
    <button
      className={classNames}
      onClick={disabled ? null : onClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      disabled={disabled}
      {...props}
    >
      {variant === 'icon' && icon ? icon : text}
    </button>
  )
}

export default CircleButton
