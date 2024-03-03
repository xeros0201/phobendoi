//@ts-nocheck
import { useRef, useState } from 'react';
import { useEffect } from 'react';
 
 
 
import { useForm } from "react-hook-form";
import { linkTo,RouterButton } from '../../lib/icon';
import { black } from '../../assets/color';

 
 
 
 



function Contact() {
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isSuccess, setIsSuccess] = useState(false)
  const [info, setinfo] = useState(false)
  const [isVeryfy, setIsVeryfy] = useState(false)
  const capchaRef = useRef(null)
 
  function onChange(value) {
 
    if(value){

     return setIsVeryfy(true)
    }
    return setIsVeryfy(false)
  }
 useEffect(()=>{
 
    window.scrollTo({  top: 0})
  
 },[])

 const onLoadCapcha = ( ) =>{
  console.log('Done!!!!');
 }
   const hanleContact = async (data)  =>{
          
      // const res = await createContact(data)
      //  if(res.data.message==="success"){
      //   setinfo(res.data.contact)
      //   setIsSuccess(true)
      //   setTimeout(()=>{
      //     setinfo(false)
      //     setIsSuccess(false)
      //   },30000)
      //  }
      return     
   }
  return (  
  <div className=" bg-primary mb:h-auto h-screen w-screen flex mb:flex-col justify-center font-BVP px-8   " >
        <div className=" mb:h-auto h-[86vh] w-[96vw] justify-between mb:w-screen mb:px-[20px] mb:flex-col  flex " >
          <div className=" flex flex-col justify-between mb:w-full w-[50%] ">
             <div className=' mb:w-full mb:text-[56px] mb:leading-[1.2] w-[70%] capitalize text-96 font-600'>Liên hệ chúng tôi</div>
             <div className=' hidden notmb:block'>
             <div className=" h-fit w-[77%] flex pb-[5vh] font-[400] justify-between ">

               {/*  */}
                <div className='flex flex-col gap-[1rem] w-[45%]  '>
                  <div className='text-[0.875rem]   uppercase'>
                  Văn Phòng
                  </div>
                  <div className=' flex flex-col'>
                  <div className='text-[0.875rem] capitalize '>
                  232/6 Võ Thị Sáu, phường 7, Quận 3 - TP.HCM
                  </div>
                  <div className='text-[0.875rem]'>
                  (+84) 97 411 0770
                  </div >
                  </div>
           
                  <div onClick={()=> window.open( "https://mail.google.com/",'_blank')}  className='cursor-pointer text-[0.875rem] flex gap-[0.2rem] pt-[21px]   items-center  uppercase'>
                    <u>info@phobendoi.art</u> {linkTo({color:black})}
                  </div>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className='flex flex-col gap-[1rem] w-[46%]   '>
                  <div className='text-[0.875rem]   uppercase'>
                  Creative Studio
                  </div>
                  <div className=' flex flex-col'>

                  <div className='text-[0.875rem] capitalize'>
                  Tầng 3 - Trung tâm hoạt động thanh thiếu nhi tỉnh Lâm Đồng, Số 10 Đường Lý Tự Trọng, P. 2, TP. Đà Lạt.
                  </div>
                  <div className='text-[0.875rem]'>
                  (+84) 97 411 0770
                  </div >
                  
                  </div>
                  <div onClick={()=> window.open( "https://www.facebook.com/phobendoi",'_blank')} className=' cursor-pointer text-[0.875rem] flex gap-[0.2rem] items-center  uppercase'>
                    <u>facebook</u> {linkTo({color:black})}
                  </div>

                  </div>
                  {/*  */}            
          </div>
             </div>
          </div>

          <div className=" mb:w-full h-full mb:pt-[3.75rem] pb-[5vh] w-[50%]">
      
      {!isSuccess?<form className='flex  flex-col mb:justify-start mb:gap-[1.25rem] justify-between w-full h-full' onSubmit={handleSubmit((data)=>{
        
        hanleContact(data)
      })}>

                <input {...register("name",{required:"*Đây là trường bắt buộc"})} className="w-[83%] mb:w-full mb:h-[2.188rem] text-[1.125rem] outline-none  border-b bg-primary border-den" placeholder="   Họ và Tên*"></input>
                  <p className='   text-[#FF0000]'>{errors?.name?.message}</p> 
                <input {...register("address",{required:"*Đây là trường bắt buộc"})} className="w-[83%] mb:w-full mb:h-[2.188rem] text-[1.125rem] outline-none  border-b bg-primary border-den" placeholder="   Địa chỉ*"></input>
                <p className='   text-[#FF0000]'>{errors?.address?.message}</p> 
                <input {...register("position",{required:"*Đây là trường bắt buộc"})} className="w-[83%] mb:w-full mb:h-[2.188rem] text-[1.125rem] outline-none  border-b bg-primary border-den" placeholder="   Chức vụ*"></input>
                <p className='   text-[#FF0000]'>{errors?.position?.message}</p> 
                <input {...register("company",{required:"*Đây là trường bắt buộc"})} className="w-[83%] mb:w-full mb:h-[2.188rem] text-[1.125rem] outline-none  border-b bg-primary border-den" placeholder="   Công ty*"></input>
                <p className='   text-[#FF0000]'>{errors?.company?.message}</p> 
                <textarea {...register("message",{required:"*Đây là trường bắt buộc"})} className="w-[83%] mb:w-full mb:h-[7.5rem] rounded-[6px] border-den border px-2 py-2 h-[32.5vh] bg-primary text-[1.125rem] outline-none resize-none"  placeholder="Nội dụng*"></textarea>
                <p className='   text-[#FF0000]'>{errors?.message?.message}</p> 
                <div className=' mb:w-full mb:flex-col justify-between relative mb:gap-[2.5rem] w-[83%] flex'>
 
 
                <button  type='submit' disabled={!isVeryfy}  className='flex gap-[0.5rem] items-center cursor-pointer'> {RouterButton({color:black})} <u className=" font-bold text-[0.875rem]">GỬI LỜI NHẮN</u> </button>

 
                  <div>
                  <div></div>
          
               
                  </div>
 
          
                </div>
      </form>:
      <div className="di">
          <div className=' text-aSubtitle font-title2-caption'>Cám ơn bạn {info?.name} đã để lại thông tin, chúng tôi sẽ liên lạc với bạn trong thời gian ngắn nhất.</div>
          <div>Lời nhắn đã gửi: {info?.message}</div>

      </div>
      }
          </div>

        </div>
        <div className=' notmb:hidden'>
             <div className=" mb:w-full mb:px-[20px] mb:flex-col h-fit w-[77%] gap-[1.25rem] flex pb-[5vh] font-[400] justify-between ">

               {/*  */}
                <div className='flex flex-col gap-[0.313rem] mb:w-full w-[45%]  '>
                  <div className=' text-12px   uppercase'>
                  Văn Phòng
                  </div>
                  <div className=' flex flex-col'>
                  <div className=' text-12px capitalize '>
                  232/6 Võ Thị Sáu, phường 7, Quận 3 - TP.HCM
                  </div>
                  <div className=' text-12px'>
                  (+84) 97 411 0770
                  </div >
                  </div>
           
                  
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className='flex flex-col gap-[0.313rem] mb:w-full w-[46%]   '>
                  <div className=' text-12px   uppercase'>
                  Creative Studio
                  </div>
                  <div className=' flex flex-col'>

                  <div className=' text-12px capitalize'>
                  Tầng 3 - Trung tâm hoạt động thanh thiếu nhi tỉnh Lâm Đồng, Số 10 Đường Lý Tự Trọng, P. 2, TP. Đà Lạt.
                  </div>
                  <div className=' text-12px'>
                  (+84) 97 411 0770
                  </div >
                  
                  </div>
              
                  </div>
                  {/*  */}     
                  <div className='flex flex-col gap-[0.313rem] mb:w-full w-[46%]   '>
           
                  <div onClick={()=> window.open( "https://www.facebook.com/phobendoi",'_blank')} className=' text-12px flex gap-[0.2rem] items-center  uppercase'>
                    <u>facebook</u> {linkTo({color:black})}
                  </div>
                  <div onClick={()=> window.open( "https://mail.google.com/",'_blank')} className=' text-12px flex gap-[0.2rem]  items-center  uppercase'>
                    <u>info@phobendoi.art</u> {linkTo({color:black})}
                  </div>
                  </div>       
          </div>
             </div>
  </div>
  );
}

export default Contact;
