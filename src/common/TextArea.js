const TextArea = ({ className, variant = 'solid', ...props }) => {
  let classNames = ''

  switch (variant) {
    case 'solid':
      classNames = `shadow text-black py-2 px-6 rounded-[10px] transition duration-200 ease-in-out focus-visible:shadow-lg border-[1px] border-solid border-[#efefef] ${className}`
      break
  }

  return (
    <textarea
      className={classNames}
      {...props}
      style={{
        outline: 'none',
      }}
    />
  )
}

export default TextArea
