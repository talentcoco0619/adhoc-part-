const CheckBox = ({ className, variant = 'solid', ...props }) => {
  let classNames = ''

  switch (variant) {
    case 'solid':
      classNames = `cursor-pointer shadow transition duration-200 ease-in-out focus-visible:shadow-lg border-[1px] border-solid border-[#efefef] w-[20px] h-[20px] ${className}`
      break
  }

  return (
    <input
      type="checkbox"
      className={classNames}
      {...props}
      style={{
        outline: 'none',
      }}
    />
  )
}

export default CheckBox
