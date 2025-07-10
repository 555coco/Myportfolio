import React, { useEffect, useState } from 'react'
import Loader from "./Loader"
import { IoLogoWechat } from "react-icons/io5"
import { FaPhone } from "react-icons/fa"
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'
import { MdOutlineEmail } from "react-icons/md"

const Contact = () => {
  const [loading,setLoading] = useState(true)
  const [text, setText] = useState('')
  const [form,setForm] = useState({
    formName:'',
    formSubject:'',
    formEmail:'',
    message:''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await emailjs.send(
        "service_xyojmjk",
        "template_bp1moit",
        {
          formName:form.formName,
          formSubject:form.formSubject,
          formEmail:form.formEmail,
          message:form.message
        },
        "1DHv65We8uBSGjryk"
      )
      setForm({formName:'',formEmail:'',formSubject:'',message:''})
      toast.success("Send the Message successfully")
    } catch(error){
      toast.error("something has wrong")
      }
    }

  const handleChange = (e) => {
      setForm({...form,[e.target.name]:e.target.value})
  }

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false) ,2500)
    return () => clearTimeout(timer)
  },[loading])

  if(loading) {
    return <Loader />
  }
  return (
      <div className='min-h-screen grid grid-cols-2 bg-[#1D232A] overflow-hidden'>
        <div className='hidden md:block relative top-30 left-10'>
          <h1 className='text-4xl font-bold text-yellow-400'>Contact Me</h1>
          <p className='mt-8'>很感谢您看到现在，如果你有想问我的问题，欢迎您联系我</p>
          <p className='mt-3 overflow-hidden'>Thank you for reading this. If you have any questions or want to ask me any questions, please feel free to contact me.</p>
          <div className='flex items-center mt-15 gap-30 justify-center'>
            <div className='tooltip tooltip-bottom'>
              <div className='tooltip-content'>
                <div className='font-bold text-2xl text-yellow-400'>huangwy0820</div>
              </div>
              <button className='btn border-green-300 h-25 rounded-xl border border-3 hover:bg-yellow-500 '>
                <div>
                  <IoLogoWechat className='text-8xl text-green-300' />
                </div>
              </button>
            </div>
            <div className='tooltip tooltip-bottom'>
              <div className='tooltip-content'>
                <div className='font-bold text-2xl text-yellow-400'>13922534696</div>
              </div>
              <button className='btn border-white h-25 rounded-xl border border-3 hover:bg-yellow-500 '>
                <div>
                  <FaPhone className='text-8xl text-white' />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className='mt-17 flex flex-col'>
          <div className='ml-10 mb-4 flex items-center'>
            <MdOutlineEmail className='text-yellow-400 text-7xl'/>
            <h1 className='ml-2 text-yellow-300'>你也可以在下方表格填写内容并发送信息到我的邮箱</h1>
          </div>
          <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
              <div className='flex gap-4'>
                <input type='text' placeholder='Name' name='formName' className='input w-60' value={form.formName} onChange={handleChange} required/>
                <input type='text' placeholder='Email' name='formEmail' className='input w-60' value={form.formEmail} onChange={handleChange} required/>
              </div>
              <input type='text' placeholder='Subject(主题)' name='formSubject' className='input w-125 mt-5' value={form.formSubject} onChange={handleChange} required/>
              <input type='text' placeholder='Content(内容)' name='message' className='input w-125 mt-5 h-60' value={form.message} onChange={handleChange} required/>
              <div className='flex w-full  justify-end mt-4 mr-4'><button className='btn hover:text-yellow-400' type='submit'>Send the message</button></div>
          </form>
        </div>
      </div>
  )

}


export default Contact