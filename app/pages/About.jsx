"use client"
import Image from 'next/image'
import { RevealWrapper } from  'next-reveal'
import { Suspense } from 'react'
//import dave2 from '../images/dave2.jpg'

const About = () => {
  return (
    <div name="About" className='mb-20 md:mb-10 max-w-screen-lg mx-auto flex items-center justify-center dark:bg-slate-900'>
        <div className='flex flex-col w-full md:flex-row items-center justify-around max-w-screen-lg mx-auto overflow-hidden'>
        <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='bottom' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} className='overflow-hidden'>
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
            <Image width={550} height={550} src='/images/david1.png' alt="about" className='md:h-[550px] hidden md:block h-auto mx-auto w-auto md:w-full ' />
            </Suspense>
            </RevealWrapper>
            <RevealWrapper rotate={{x:  12,y:40,z:0}} origin='right' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}} className='overflow-x-hidden'>
            <div className='flex flex-col items-center md:gap-5  mx-auto max-w-xl md:mt-0'>
              <h1 className='md:text-5xl text-4xl font-semibold font-serif mb-4 dark:text-slate-100'>About</h1>
              <div className='border-[3px] border-[#FF9909] w-24 md:mb-10 mb-5'></div>
              <p className='md:text-xl text-md font-mono text-start leading-8 mx-6 md:mx-0 dark:text-slate-100'>As a full stack developer, I have the ability to create and manage every
                  aspect of a web application, from the front-end user interface to the back-end
                  server and database. With my skills in both client-side and server-side
                  technologies, I can develop and deploy dynamic, scalable, and responsive
                  web applications that meet the needs of businesses and users alike. Whether
                  it&apos;s building a beautiful and intuitive user interface or configuring a complex
                  server infrastructure, I have the expertise to bring a project to life from start to finish.</p>
            </div>
            </RevealWrapper>
        </div>
    </div>
  )
}

export default About

