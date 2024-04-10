'use client'

import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import { RevealWrapper } from  'next-reveal'
import { Suspense } from 'react';
import React , { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineCancel} from 'react-icons/md'
import { FaToggleOff , FaToggleOn } from 'react-icons/fa'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

let nav = [
        {name : "Home" , condition : false},
        {name : "About" , condition : false},
        {name : "Services" , condition : false},
        {name : "Portfolio" , condition : false},
        {name : "Contact" , condition : false},
]

const Hero = () => {
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
  const data = [
    {
      name : "Github" ,
      icon : "/images/github.png" ,
      link : "https://github.com/DawitMac" ,
      style : "rounded-tr-lg"
    } ,
    {
      name : "Telegram" ,
      icon : "/images/telegram.png" ,
      link : "https://t.me/DawitMac"
    } ,
    {
      name : "Gmail" ,
      icon : "/images/gmail.png" ,
      link : "mailto:mekonendawit5@gmail.com"
    },
    {
      name : "Resume" ,
      icon : "/images/curriculum-vitae.png" ,
      link : '/Dawit Mekonen - CV.pdf',
      style : "rounded-br-lg" ,
      download : true
    }
  ]
  
  return (
    <div>
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
   
    <div name="Home" className='mb-20 md:mb-10 max-w-screen-lg mx-auto flex items-center justify-center dark:bg-slate-900 pt-28 '>
    <div className='flex flex-col w-full md:flex-row items-center justify-around max-w-screen-lg mx-auto overflow-hidden sm:ml-40'>
      <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='left' delay={200} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} className='flex overflow-x-hidden w-full'>
        <div className='flex flex-col  justify-center items-center h-full w-auto sm:min-w-fit text-center sm:items-start  md:text-start mx-auto'>
          <p className='text-xl sm:text-md font-semibold sm:ml-2 text-[#FF9909] mb-1'>Hello</p>
          <span className='text-4xl sm:text-5xl font-bold dark:text-slate-100  mb-3'>
            I&apos;m <span className='text-[#FF9909]'>Dawit Mekonen</span>
          </span>
          <p className='md:text-xl text-lg md:mb-6 mb-3 max-w-3xl text-gray dark:text-slate-100 leading-8'>
           A Freelance Website Designer and <br /> Full Stack Developer
         </p>
         <Link activeClass="active"
      to="Portfolio"
      spy={false}
      smooth={true}
      hashSpy={false}
      offset={0}
      duration={500}
      delay={200}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}>
              <button className='flex items-center animate-bounce duration-200 delay-150 justify-center gap-3 md:px-4 px-2 md:py-2 py-1 bg-gradient-to-tr from-[#8E5B9A] to-[#4A5883] rounded-lg text-white md:text-lg text-lg font-semibold shadow group md:mb-0 my-3 mb-4 sm:mb-0'>
          Portfolio <span className='group-hover:rotate-90 duration-500'><FiArrowRight size={23} /></span>
          </button>
              </Link>
         
      </div>
      </RevealWrapper>
      <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} >
   
<Suspense fallback={
                        <div className="grid h-36 w-36 place-items-center rounded-lg bg-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-12 w-12 text-gray-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                    }>
        <Image width={500} height={500} src="/images/david.png" alt="hero" className='md:h-[500px] h-auto mx-auto w-auto md:w-[700px] ' />
        </Suspense>
      </RevealWrapper>
      </div>
     <div className='hidden md:flex fixed top-[35%] left-0 ml-0  flex-col items-start'>
      {
        data.map((item , index) => (
          <a key={index} href={item.link} download={item.download} target='_tab' rel="noreferrer" className={"flex items-center justify-between px-4 w-40 h-[50px] dark:bg-black/80 bg-black/30 text-white ml-[-95px] hover:ml-[0px] duration-300 shadow-lg" + " " + item.style}>
            <p className='font-semibold font-mono text-md'>{item.name}</p>
            <Image width={10} height={10} src={item.icon} alt='logo' className='h-10 w-10 p-1 bg-white rounded-full'/>
          </a>
        ))
      }
     </div>
      </div>
      </div>
  )
}

export default Hero

