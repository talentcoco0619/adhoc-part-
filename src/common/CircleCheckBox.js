const CircleCheckBox = ({
  className,
  onChange,
  checked = false,
  disabled = false,
}) => {
  let classNames = `cursor-pointer transition duration-200 ease-in-out focus-visible:shadow-lg border-[2px] border-solid border-[#ffb800] rounded-[50%] w-[25px] h-[25px] ${className} ${
    checked ? 'bg-[#ffb800]' : 'bg-white'
  }`

  // Additional styling when disabled
  if (disabled) {
    classNames += ' cursor-not-allowed opacity-50'
  }

  const handleChange = () => {
    if (disabled) {
      return
    }

    if (checked) {
      onChange(false)
    } else {
      onChange(true)
    }
  }

  return <div className={classNames} onClick={handleChange}></div>
}

export default CircleCheckBox
