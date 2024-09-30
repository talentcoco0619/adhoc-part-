const TextInput = ({
  className,
  icon,
  action,
  handleAction,
  variant = 'solid',
  ...props
}) => {
  let inputClassNames = ''

  switch (variant) {
    case 'solid':
      inputClassNames = `flex-1 bg-transparent text-black py-2 px-4 rounded-[10px] transition duration-200 ease-in-out m-0`
      break
  }

  return (
    <div
      className={`flex shadow items-center border border-gray-100 rounded-[10px] bg-white ${className}`}
    >
      {icon && (
        <span className="text-[#ffb800] text-[1.7rem] pl-3">{icon}</span>
      )}
      <input
        className={inputClassNames}
        {...props}
        style={{
          outline: 'none',
        }}
      />
      {action && (
        <span
          className="cursor-pointer text-[#ffb800] text-[1.2rem] pr-3"
          onClick={handleAction}
        >
          {action}
        </span>
      )}
    </div>
  )
}

export default TextInput
