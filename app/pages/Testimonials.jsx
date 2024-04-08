'use client'
import { useState , useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';
import { Suspense } from 'react';

const people = [
    {
      id: 1,
      image: "/images/leul.jpg",
      name: 'Luel Mekonen',
      quote:
      "I am incredibly happy with the work Dawit did for me. He took my ideas and turned them into something amazing. His professionalism and attention to detail made the whole process effortless. I highly recommend his services!"    },
    {
      id: 2,
      image: "/images/eyasu.jpg",
      name: 'Eyasu Tamiru',
      quote:
      "Working with Dawit was a fantastic experience. He listened to my needs, provided valuable insights, and delivered exceptional results. I couldn't be more pleased with his work and would definitely hire him again."    },
    {
      id: 3,
      image: "/images/rediet.jpg",
      name: 'Rediet',
      quote:
      "I can't thank Dawit enough for his outstanding work. He brought my vision to life with his expertise and creativity. The entire process was smooth, and the final outcome exceeded my expectations. I highly recommend Dawit for any project you have in mind."    },
    {
      id: 4,
      image: "/images/aman.jpg",
      name: 'Amanuel Alemayehu',
      quote:
      "Working with Dawit was a breath of fresh air. His professionalism and skillset made the entire project a breeze. He understood my requirements perfectly and delivered exceptional results. I'm thrilled with his work and would wholeheartedly recommend Dawit to anyone in need of his services."
    },
  ];

const Testimonials = () => {
   const [ client , setClient ] = useState(people)
   const [ index , setIndex ] = useState(0)

   useEffect(()=>{
    
      let lastPerson = people.length - 1
      if(index < 0 ){
        setIndex(lastPerson)
      } 
      if( index > lastPerson){
        setIndex(0)
      }
    
      },[index])
    
      useEffect(()=>{
       
       let slider = setInterval(()=>{
        setIndex(index + 1)
       },5000)
       return ()=> clearInterval(slider)
      },[index])

        const activeSlide = 'opacity-100 translate-x-0'
        const nextSlide = 'translate-x-[100%]'
        const lastSlide = 'translate-x-[-100%]'

  return (
    <div className = 'mx-auto md:h-screen  max-w-screen-lg flex flex-col items-center justify-center mb-10'>
      <div className='flex flex-col items-start justify-center'>
      <div className='flex flex-col items-center justify-center gap-2 mx-4 md:mx-0'>
              <h1 className='md:text-5xl text-4xl text-center font-mono font-bold md:mb-3 mb-2 dark:text-slate-100'>What Client&apos;s Say</h1>
              <div className='flex items-center justify-center border-[3px] border-[#FF9909] w-24 md:mb-10 mb-0'></div> 
          </div>
      </div>
     
      <div className='relative flex w-full md:px-0 md:w-[60vw] max-w-screen-lg md:h-[400px] h-screen items-center overflow-hidden md:mt-[1rem] mt-[1rem] mx-auto my-0'>
         {
         
           client.map(({id , name , title , image , quote} , personIndex ) => {
            let position = 'nextSlide'
            if(index === personIndex){
              position = 'activeSlide'
            }
            if(personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)){
              position = 'prevSlide'
            }
            return(
              <div key={id} className={`absolute w-full flex flex-col items-center justify-center gap-10 opacity-0 transition-all ease-in duration-500 ${ position === 'activeSlide' ? activeSlide : position === 'nextSlide' ? nextSlide : lastSlide }`}>
                <div className='flex flex-col items-center justify-center gap-3'>
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
            <Image width={100} height={100} src={image} alt={name} className='rounded-full md:w-[100px] md:h-[100px] w-[150px] h-[150px] shadow-lg border-4 border-solid border-gray-300 object-cover' />
            </Suspense>
               <p className='text-3xl  text-center capitalize text-[#FF9909] mt-[0.3rem]'>{name}</p>
                <p className='text-center max-w-[35em] text-lg font-mono my-auto md:mt-[2rem] mt-[1rem]  leading-8 mx-6 md:mx-0 text-gray dark:text-slate-100'>{quote}</p>
                <FaQuoteRight size={55} className="mt-[1rem] text-[#FF9909]" />
                </div>
                

              </div>
            )
           })
         }
          <button onClick={()=> setIndex(index + 1)} className='bg-gray-500 text-white absolute top-[200px] left-0 text-sm grid place-items-center mr-8 border border-transparent hover:bg-purple-500 transition-all rounded-lg hover:shadow-sm ease-in duration-500 md:translate-y-[-50%] translate-y-[50%] md:mx-0 mx-8'><FiChevronLeft size={30}/></button>
                 <button onClick={()=> setIndex(index - 1)} className='bg-gray-500 text-white absolute top-[200px] right-0 text-sm grid items-center border border-transparent  hover:bg-purple-500 transition-all rounded-lg hover:shadow-sm ease-in duration-500 md:translate-y-[-50%] translate-y-[50%] md:mx-0 mx-8'><FiChevronRight size={30}/></button>
      </div>
       
    </div>
  )
}

export default Testimonials
