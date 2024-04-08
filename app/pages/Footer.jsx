// import github from '../images/github.png'
// import telegram from '../images/telegram.png'
// import cv from '../images/curriculum-vitae.png'
// import phone from '../images/telephone.png'
import Image from 'next/image'
import { Suspense } from 'react'
const Footer = () => {
  return (
    <div className='flex flex-col text-center items-center bg-gray-100 md:p-20 p-10 gap-10 mt-5 dark:bg-black/30 dark:border-t dark:border-slate-100'>
       <h1 className='md:text-7xl text-5xl font-bold text-[rgb(255,153,9)]'>Dawit</h1>
        <p className='md:text-2xl text-xl font-light dark:text-slate-100'>+2519-87-86-31-16 | mekonendawit5@gmail.com</p>
        <div className='grid md:grid-cols-4 grid-cols-2 items-center justify-center gap-16'>
          <a href='https://t.me/DawitMac' target="_tab" className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
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
            <Image width={20} height={20} src='/images/telegram.png' alt='address' className='w-full h-full' />
          </Suspense>
          </a>
          <a href='/CV.pdf' target="_tab"  className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
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
            <Image width={20} height={20} src="/images/curriculum-vitae.png" alt='address' className='w-full h-full'/>
            </Suspense>
          </a>
          <a href='https://github.com/DawitMac' target="_tab"  className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
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
            <Image width={20} height={20} src="/images/github.png" alt='address' className='w-full h-full'/>
            </Suspense>
          </a>
          <a href='tel:+251987863116' target="_tab"  className='h-20 w-20 rounded-full p-3 bg-gray-300 hover:scale-110 duration-500'>
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
            <Image width={20} height={20} src="/images/telephone.png" alt='address' className='w-full h-full'/>
            </Suspense>
          </a>
        </div>
    </div>
  )
}

export default Footer