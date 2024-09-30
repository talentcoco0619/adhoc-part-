import { useNavigate } from 'react-router-dom'
import { Button } from '../../common'
import { AiOutlineLeft } from 'react-icons/ai'

const Header03 = ({ title, showBack }) => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className="fixed top-0 left-0 w-full z-[9] shadow">
      <div className="relative h-[80px] flex justify-center items-center bg-[#FFB800]">
        {showBack && (
          <Button
            className="bg-white absolute left-[10px] px-[8px]"
            text="Back"
            variant="icon"
            icon={<AiOutlineLeft />}
            onClick={handleGoBack}
          />
        )}
        <h3 className="flex justify-center items-center text-xl font-bold">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default Header03
