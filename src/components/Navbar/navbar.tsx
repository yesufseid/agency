import Logo from "./Logo"
import DarkMode from "./DarkMode"
import Link from './Link'
import { useState } from "react"
import ResponsiveMenu from "./ReasponsiveMenu"
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
export default function navbar() {
  const [showMenu, setShowMenu]=useState<boolean>(false)
  return (
    <div className="flex  sm:mx-20 mx-5 py-5 dark:text-white items-center">
        <Logo />
        <Link />
        {/* <DarkMode /> */}
        <button className="flex sm:hidden">
        {showMenu ? (
              <HiMenuAlt1
                onClick={()=>setShowMenu((prev)=>!prev)}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={()=>setShowMenu((prev)=>!prev)}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
        </button>
        <ResponsiveMenu showMenu={showMenu} />
    </div>
  )
}
