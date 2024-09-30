import { Button } from '../../common'
import ProductLayout from '../../layouts/ProductLayout'

const WrongIcon = () => {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="90" cy="90" r="90" fill="#FFF3D3" />
      <circle
        cx="90.0002"
        cy="90.0002"
        r="66.8"
        stroke="#FFB800"
        strokeWidth="5"
        strokeDasharray="20 20"
      />
      <path
        d="M117.001 63.5957L63.5956 117.001"
        stroke="#F20000"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <path
        d="M63.6104 63.5957L117.016 117.001"
        stroke="#F20000"
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  )
}

const WentWrong = () => {
  return (
    <ProductLayout footer={true}>
      <div className="flex flex-col justify-center items-center">
        <div className="p-[50px]">
          <WrongIcon />
        </div>
        <h2 className="text-[2.75rem] font-extrabold mb-[20px]">
          Oops! Something went wrong...
        </h2>
        <p className="text-[1.5rem] mb-[20px]">
          Tip: Try using a different payment option
        </p>
        <div className="flex justify-center gap-[50px]">
          <Button variant="outline" text="Back to my order" />
          <Button text="Contact us" />
        </div>
      </div>
    </ProductLayout>
  )
}

export default WentWrong
