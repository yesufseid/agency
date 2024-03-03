import yellowCar from "../../assets/website/team.png";

export default function Image() {
  return (
    <>
      <div data-aos="zoom-in" className="order-1 sm:order-2 relative flex justify-center ">
            <img
              src={yellowCar}
              alt=""
              className="w-full sm:w-[280px] md:w-[430px]"
            />
            <div
              data-aos="slide-right"
              className="absolute bottom-0 right-28 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm ">⭐Projects</p>
              <h1 className="font-bold">
                600+ <span className="font-normal">Done</span>
              </h1>
            </div>
          </div>
    </>
  )
}
