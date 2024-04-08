import { RevealList } from "next-reveal"
import ProjectCard from "../components/ProjectCard"

const Services = () => {
  const data = [
    {
      id : 1 ,
      name : "HTML" ,
      icon : "/images/html.png" ,
    } ,
    {
      id : 2 ,
      name : "CSS" ,
      icon : "/images/css-3.png"
    },
    {
      id : 3 ,
      name : "REACT" ,
      icon : "/images/physics.png" ,
    },
    {
      id : 4 ,
      name : "GITHUB" ,
      icon :  "/images/github.png"
    },
    {
      id : 5 ,
      name : "JAVASCRIPT" ,
      icon : "/images/js.png"
    },
    {
      id : 6 ,
      name : "GraphQL" ,
      icon : "/images/GraphQL_Logo.svg.webp"
    },
     {
      id : 7 ,
      name : "NextJs" ,
      icon : "/images/next.png"
    },
    {
      id : 8 ,
      name : "React Native" ,
      icon : "/images/physics.png"
    },
    {
      id : 9 ,
      name : "Typescript" ,
      icon : "/images/typescript.png"
    },
  ]
  return (
    <div name="Services" >
      <div  className='mb-20 md:mb-10   max-w-screen-lg p-4 flex flex-col mx-auto'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex flex-col items-center justify-center gap-4'>
             <h1 className='md:text-5xl text-4xl  font-semibold font-serif dark:text-slate-100'>Services</h1>
              <div className='border-[3px] border-[#FF9909] w-24 mb-3'></div>
          </div>
              <p className='md:text-xl text-lg font-sans mb-8 dark:text-slate-100'>
                This are the technologies i have working with
              </p>
        </div>
                <RevealList interval={60} delay={500}>
             <ProjectCard items={data} />
                </RevealList>
      </div>
    </div>
  )
}

export default Services

//{
//   data.map(({id , name , icon })=>(
    
//       <div key={id} className='md:p-5 px-2 py-3 shadow-xl hover:scale-105 duration-500 cursor-pointer rounded-lg dark:bg-black/30'>
//       <Image width={130} height={130} src={icon} alt="icon" className='mx-auto'/>
//       <p className='md:text-xl text-md font-mono mt-4 dark:text-slate-100'>{name}</p>
//     </div> 
//   ))
// }