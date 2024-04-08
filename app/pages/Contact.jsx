'use client'
import { useRef } from 'react'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'


const Contact = () => {
  const [ result , setResult ] = useState(false);
  const [ forMessage , setFormMessage ] = useState('')
  const form = useRef();
  const Result = ()=>{
    return(
      <p className='text-md font-mono text-[#008CC1] mt-3'>{forMessage}</p>
    );
  }

  const formik = useFormik({
    initialValues : {
      name : "" ,
      email : "" ,
      message : ""
    } ,
    validationSchema : Yup.object({
      name : Yup.string().max(15,"Name Must be Less than 15 Characters").min(5,"Name Must be More than 5 Characters") ,
      email : Yup.string().email("Invalid Email") ,
      message : Yup.string().required("Required")
    }),
    onSubmit : (values) => {
        const { name , email , message } = values
        const telegram_bot_id = '6627587122:AAFaRteE0bB7b9xL-mgPcJPniTCuY2PoXh8';
        const chat_id = 345492972
        const telegramApiUrl = `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`;
    
        const messageContent = `This message is from:\nDawit's contact form \n Name: ${name} \n Email: ${email} \n Message: ${message}`;
    
        const formData = {
          chat_id: chat_id,
          text: messageContent,
        };
    
        axios
          .post(telegramApiUrl, formData)
          .then((response) => {
            console.log(response.data);
            setFormMessage('Thanks! I will contact you shortly.');
          })
          .catch((error) => {
            console.error(error);
            setFormMessage('Oops! An error occurred.');
          });
        setResult(true)
        setTimeout(()=>{
          formik.values.name = ""
          formik.values.email =""
          formik.values.message= ""
          setResult(false)
        },5000)
      
    }

  })
  
  return (
   
    <div name="Contact" className='dark:bg-slate-900'>
            <div className='mb-20 md:mb-10 max-w-screen-md p-4 flex flex-col mx-auto md:items-start items-center justify-center' >  
            <div className='flex flex-col items-center justify-center'>
                 <h1 className='md:text-5xl text-4xl text-center font-mono font-bold md:mb-3 mb-2 dark:text-slate-100'>Contact Me</h1>
                 <div className='border-[3px] border-[#FF9909] w-24 mb-3 shadow'></div> 
                 <p className='text-xl font-mono font-extralight mb-2 dark:text-slate-100'>Feel free to contact me</p>
                </div>  
          <div className='flex items-center justify-center md:mx-0 p-8 mb-20 gap-20'>
      <form ref={form} onSubmit={formik.handleSubmit} className='w-full text-left'>
      
      <input type='text'  name='name' value={formik.values.name} placeholder="Name" onChange={formik.handleChange} className='w-full focus:outline-none border-2 border-cyan-500 dark:bg-[#2F4858] dark:text-slate-100 text-xl px-2 md:py-2 py-3 my-2' />
      <input type='email' name='email' value={formik.values.email} placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full focus:outline-none dark:bg-[#2F4858] dark:text-slate-100  text-xl  border-2 border-cyan-500 px-2 md:py-2 py-3 my-2' />
      {formik.touched.email && formik.errors.email ? <p className='text-sm text-red-500 font-sans mb-2'>{formik.errors.email}</p>: null}
      <textarea placeholder='Message' name='message' value={formik.values.message} onChange={formik.handleChange} rows={6}  className='w-full focus:outline-none px-2 border-2 dark:bg-[#2F4858] dark:text-slate-100  text-xl my-2 border-cyan-500'/>
      <button type='submit' className='w-full flex items-center justify-center text-2xl mt-4 bg-cyan-500 py-3 font-mono text-white hover:bg-cyan-600 hover:scale-105  duration-500 hover:rounded-lg'>Send</button>
      {
        result && <Result />
      }
      </form>
     </div>
     </div>
     </div>
   
  )
}

export default Contact