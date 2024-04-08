'use client'
import { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineCancel} from 'react-icons/md'
import { FaToggleOff , FaToggleOn } from 'react-icons/fa'
import { useEffect } from 'react'
import Image from 'next/image'

let nav = [
        {name : "Home" , condition : false},
        {name : "About" , condition : false},
        {name : "Services" , condition : false},
        {name : "Portfolio" , condition : false},
        {name : "Contact" , condition : false},
]

const Navbar = () => {
  const [ status , setStatus ] = useState("")
  const [ open , setOpen ] = useState(false)
  const [ isMouseEntered , setIsMouseEntered ] = useState(false)
  const [theme, setTheme] = useState(
        typeof localStorage !== "undefined" && localStorage.getItem("theme")
          ? localStorage.getItem("theme")
          : "light"
      );  
      const element = typeof document !== 'undefined' ? document.documentElement : null;
        const handleSetActive = (to) => {
   setStatus(to)
   setOpen(false)
  }
  useEffect(()=>{
      switch(theme){
        case "dark" : 
        element.classList.add("dark") 
        localStorage.setItem("theme" , "dark")
        break ;
        case "light" : 
        element.classList.remove("dark")
        localStorage.setItem("theme","light")
        break ;
        default : 
        localStorage.removeItem("theme")
        break ;
      }
  },[theme])

  const mouseEnter = 'w-full duration-500 h-[5px] bg-[#FF9909]'
  const mouseLeave = 'w-0 duration-500 h-[5px] bg-[#FF9909]'

  return (
        <div className=''>
    <div className='fixed z-50 bg-transparent flex items-center md:justify-around justify-between md:mx-0 md:px-12 px-2 w-screen h-16   md:shadow-none duration-200'>
        <h1 className='md:text-4xl text-3xl font-semibold font-signiture text-[#FF9909] sm:hidden lg:flex'>Dave</h1>
        <ul className={`md:static absolute z-[-1] md:z-auto md:opacity-100  transition-all duration-500 ease-in ${open ? 'top-[64px] opacity-100 text-white' : 'opacity-0 top-[-600px]'}  bg-[#2F4858] md:bg-white dark:bg-slate-900 max-h-screen  md:pl-0 pl-7 left-0 w-full md:w-auto md:h-auto flex md:flex-row flex-col gap-12 sm:gap-4 md:gap-16 md:text-xl text-2xl md:pt-0 pt-7 font-normal font-josefin`}>
       {
        nav.map((link , index)=>(
                <li key={index} onMouseEnter={()=> {
                        setIsMouseEntered(true)
                        nav.map((link , i) => {
                                if(index === i){
                                        link.condition = true
                                }
                        })
                       
                        }} onMouseLeave={()=> {
                                setIsMouseEntered(false)
                                nav.map((link , i) => {
                                        if(index === i){
                                                link.condition = false
                                        }
                                })
                               
                                }} className={`cursor-pointer ${status === link.name ? 'text-[#FF9909]': 'md:text-black text-white dark:text-slate-100'}`}>
                <Link activeClass="active"
        to={link.name}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={500}
        delay={1000}
        isDynamic={true}
        onSetActive={handleSetActive}
        ignoreCancelEvents={false}
        spyThrottle={500}>
                {link.name}
                <div className={`${isMouseEntered && link.condition ? mouseEnter : mouseLeave}`}></div>
                </Link>
                </li>
        ))
       }
              <li className='md:hidden'>
              <button className='duration-300 hover:text-[#FF9909] group' onClick={()=> {
                        setTheme(theme === "light" ? "dark" : "light") 
                        setOpen(!open)}}>
               <span className='flex items-center justify-center gap-4 h-8 w-8 dark:text-[#FF9909]'>
               {
                        theme === "light" ? <FaToggleOff size={25} /> : <FaToggleOn size={25} />

                } 
                <p className='text-2xl md:text-lg rounded dark:text-slate-100 md:text-black font-mono dark:group-hover:text-black'>Toggle</p>
               </span>
                </button>
              </li>
        
        </ul>
        <button className='duration-300 hover:text-[#FF9909] group hidden md:block' onClick={()=> {
                        setTheme(theme === "light" ? "dark" : "light") 
                        setOpen(!open)}}>
               <span className='flex items-center justify-center gap-4 md:gap-2 h-8 w-8 dark:text-[#FF9909]'>
               {
                        theme === "light" ? <Image src="/images/light.svg" alt='icon' width={25} height={25} /> : <Image src="/images/dark.svg" alt='icon' width={25} height={25} className='text-[#FF9909]' />

                } 
               </span>
                </button>
        <div onClick={()=> setOpen(!open)} className='md:hidden flex hover:drop-shadow-lg hover:rounded-full p-3 hover:rotate-90 hover:scale-105 duration-300 cursor-pointer dark:text-slate-100 '>
         {
                open ? <MdOutlineCancel size={35}  /> : <AiOutlineMenu size={35} />  
          }
        </div>
    </div>
    
    </div>
  )
}

export default Navbar