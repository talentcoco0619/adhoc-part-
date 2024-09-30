import { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const Expander = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="expander">
      <button
        className={`font-bold p-3 text-[20px] flex justify-between w-full ${
          !isOpen ? 'border-black border-b-[1px]' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? <BiChevronDown /> : <BiChevronUp />}
      </button>
      {isOpen && <div className="flex flex-col p-3 gap-3">{children}</div>}
    </div>
  )
}

export default Expander
