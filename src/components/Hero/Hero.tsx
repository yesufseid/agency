import Text from "./text"
import Image from "./Image"
export default function Hero() {
  return (
    <div className="py-20 dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="sm:px-20 px-2  grid grid-cols-1 sm:grid-cols-2 ">
        <div className="order-2 sm:order-1">
        <Text />
        </div>
        <div className=" order-1 sm:order-2 ">
           <Image /> 
        </div>
        </div>
    </div>
  )
}
