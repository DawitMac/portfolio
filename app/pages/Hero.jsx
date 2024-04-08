import Image from 'next/image'
import {FiArrowRight} from 'react-icons/fi'
import { Link } from 'react-scroll'
import { CldImage } from 'next-cloudinary';
import { RevealWrapper } from  'next-reveal'
import { Suspense } from 'react';

const Hero = () => {
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
    <div name="Home" className='mb-20 md:mb-10 max-w-screen-lg mx-auto flex items-center justify-center dark:bg-slate-900 pt-28 '>
    <div className='flex flex-col w-full md:flex-row items-center justify-around max-w-screen-lg mx-auto overflow-hidden sm:ml-40'>
      <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='left' delay={200} duration={1000} distance='50px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} className='flex overflow-x-hidden w-full'>
        <div className='flex flex-col  justify-center items-center h-full w-auto sm:min-w-fit text-center sm:items-start  md:text-start mx-auto'>
          <p className='text-xl sm:text-md font-semibold sm:ml-2 text-[#FF9909] mb-1'>Hello</p>
          <span className='text-4xl sm:text-5xl font-bold dark:text-slate-100  mb-3'>
            I'm <span className='text-[#FF9909]'>Dawit Mekonen</span>
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
  )
}

export default Hero

