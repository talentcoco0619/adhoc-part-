import React from 'react'

const RectangleButton = ({
                    className,
                    text,
                    variant = 'solid',
                    icon,
                    onClick,
                    disabled = false,
                }) => {
    let classNames = ''
    let disabledStyles = disabled ? 'opacity-50 pointer-events-none' : ''

    switch (variant) {
        case 'solid':
            classNames = `bg-[#FFB800] text-black h-[50px] flex-shrink-0 rounded-xl font-normal py-2 px-6 transition duration-300 ease-in-out hover:bg-yellow-600 ${className} ${disabledStyles}`
            break

        case 'outline':
            classNames = `border border-[2px] border-[#FFB800] h-[50px] text-black flex-shrink-0 rounded-xl font-normal py-2 px-6 bg-transparent hover:bg-[#FFB800] hover:text-white transition duration-200 ${className} ${disabledStyles}`
            break

        case 'icon':
            classNames = `bg-[#FFB800] text-black h-[50px] flex-shrink-0 rounded-xl font-normal py-2 px-6 transition duration-300 ease-in-out hover:bg-yellow-600 ${className} ${disabledStyles}`
            break

        default:
            classNames = `bg-[#FFB800] text-black h-[50px] flex-shrink-0 rounded-xl font-normal py-2 px-6 transition duration-300 ease-in-out hover:bg-yellow-600 ${className} ${disabledStyles}`
    }

    return (
        <button
            className={classNames}
            onClick={disabled ? null : onClick}
            disabled={disabled}
        >
            {variant === 'icon' && icon ? (
                <span className="flex items-center justify-center gap-[10px]">
          {text} {icon}
        </span>
            ) : (
                text
            )}
        </button>
    )
}

export default RectangleButton
