import logo from "../../assets/website/Vector.svg"

export default function Logo() {
  return (
    <div className="flex w-full gap-5 capitalize font-serif text-2xl font-semibold  items-center">
            <img src={logo} alt="Logo" />
            <h1 className="w-fit">Digital agency</h1>
    </div>
  )
}
 