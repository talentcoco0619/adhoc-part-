import { TextInput } from '../../common'
import {
  AiOutlineSearch,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai'
import useValidProductURL from '../../hooks/useValidProduct'

const ProductBrand = () => {
  const validURL = useValidProductURL()
  return (
    <div className="mb-[60px]">
      <div
        style={{
          backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)
      ), url('/assets/images/product/res_img.png')`,
        }}
        className="relative bg-cover bg-center sm:h-[350px] h-[150px] w-full rounded-[20px] m-auto flex flex-col gap-[10px] items-center justify-start"
      >
        <div className="w-[120px] border-[5px] border-solid border-[#ffb800] rounded-[50%] sm:block hidden mt-[30px]">
          <img src="/assets/images/product/chief.png" className="w-full" />
        </div>
        <h2 className="text-white sm:text-[2rem] text-[1.5rem] font-medium select-none mt-[30px]">
          From 11:00 - 17:00
        </h2>
        <TextInput
          className="max-w-[550px] min-w-[300px] w-[50vw] sm:flex hidden"
          icon={<AiOutlineSearch />}
          placeholder="Search in the menu"
        />
        <div className="absolute bottom-[-60px] w-[80%] max-w-[700px] min-h-[100px] bg-white rounded-[20px] shadow-md flex items-center justify-around flex-col">
          <div className="flex sm:items-center items-end md:justify-around justify-between w-full p-[15px] py-[5px]">
            <div className="flex flex-col md:flex-row items-center justify-center text-xs gap-[5px]">
              <span className="flex items-center gap-[10px]">
                <b className="text-[1.5rem]">4.9</b>
                <div>
                  <img src="/assets/images/icons/star.png" />
                </div>
              </span>
              <b>(154) Reviews</b>
            </div>
            <div className="text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-[5px]">
              {validURL ? (
                <span className="text-[#ffb800] text-[1.75rem]">
                  <AiOutlineCheckCircle />
                </span>
              ) : (
                <span className="text-[red] text-[1.75rem]">
                  <AiOutlineCloseCircle />
                </span>
              )}
              <b>Online payment</b>
            </div>
            <div className="gap-[10px] items-center h-[30px] sm:flex hidden">
              <img src="/assets/images/icons/netopia.svg" className="h-full" />
              <img
                src="/assets/images/icons/mastercard.png"
                className="h-full"
              />
            </div>
          </div>
          <div className="flex gap-[10px] items-center h-[30px] sm:hidden justify-around w-full mb-[10px]">
            <img src="/assets/images/icons/netopia.svg" className="h-full" />
            <img src="/assets/images/icons/mastercard.png" className="h-full" />
          </div>
        </div>
        <div className="absolute bottom-0 w-[80px] border-[5px] border-solid border-[#ffb800] rounded-[50%] sm:hidden block">
          <img src="/assets/images/product/chief.png" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default ProductBrand
