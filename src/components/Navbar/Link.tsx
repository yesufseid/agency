import DarkMode from "./DarkMode"
export const navlinks=[
    {
        id: 1,
        name: "About",
        link: "/#about",
      },
      {
        id: 2,
        name: "Services",
        link: "/#services",
      },
      {
        id: 3,
        name: "Projects",
        link: "/#projects",
      },
]


export default function Link() {

  return (
    <div className="flex gap-10 w-full justify-center items-center">
        <div className="sm:flex gap-5 font-serif text-xl my-3 h-10 hidden ">
        {navlinks?.map((link)=>
           <a className="hover:border-b-2 border-primary hover:text-primary transition-colors py-1  duration-500" key={link.id} href={link.link}>
            {link.name}
            </a>
        )}
         <button className="primary-btn">get in teche</button>
        </div>
       
     <DarkMode />
    
    </div>
  )
}
