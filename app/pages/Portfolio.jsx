"use client"
import { HoverEffect } from '../components/ServiceCard'
import { RevealList } from "next-reveal"

const Portfolio = () => {
  const data = [
    {
      img :  "/images/online-pharmacy.png",
      title : "Online Pharmacy",
      description : "convenient and accessible platform for purchasing medications and healthcare products.",
      link : "https://github.com/DawitMac/online-pharmacy"
  },
  {
      img :  "/images/dashboard(2).png" ,
      title : "Admin Dashboard" ,
      description : 'Powerful admin dashboard for efficient management and control.',
      link : "https://github.com/DawitMac/admin_dashboard"
  },
  {
      img :  "/images/mobile-app.png" ,
      title : 'E-commerce' ,
      description : 'Dynamic e-commerce platform for seamless online shopping.',
      link : "https://github.com/DawitMac/my-Commerce"
  },
  {
    img :  "/images/strategic-plan.png" ,
    title : 'Tic Tac Toe' ,
    description : 'Classic tic-tac-toe game for fun and strategic challenges.',
    link : "https://github.com/DawitMac/admin_dashboard"
},
 {
    img :  "/images/shopping.png" ,
    title : 'Online Exam' ,
    description : 'An online exam platform for convenient and secure remote testing.',
    link : "https://github.com/DawitMac/exam"
},
{
  img :  "/images/exam(1).png" ,
  title : 'Todo List' ,
  description : 'Simple todo list with local storage for easy task management.',
  link : "https://github.com/DawitMac/todo-list"
},
  ]
 
  return (
    <div name="Portfolio" className='dark:bg-slate-900'>
      <div  className='mb-20 md:mb-10 max-w-screen-md flex flex-col items-start justify-center mx-auto'>
        <div className='flex flex-col items-start justify-center md:mx-0 mx-8'>
          <div className='flex flex-col items-center justify-center gap-4'>
              <h1 className='md:text-5xl text-4xl font-semibold font-mono dark:text-slate-100'>Portfolio</h1>
              <div className='flex items-center justify-center border-[3px] border-[#FF9909] w-24 mb-10'></div> 
          </div>
        </div>
        <div className=''>
        <RevealList interval={60} delay={500}>
             <HoverEffect items={data} />
                </RevealList>
            </div>
      </div>
    </div>
  )
}

export default Portfolio