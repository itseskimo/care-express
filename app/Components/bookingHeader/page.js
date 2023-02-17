"use client"

import React from 'react'
 
const page = ({active}) => {

    const HeaderData=[{
        id:1,
        name:'Select Plan',
    },
    {
        id:2,
        name:'Contact Details',
    },
    {
        id:3,
        name:'Additional Requirements',
    },
    {
        id:4,
        name:'Summary',
    },
    {
        id:5,
        name:'Create Account',
    },
    {
        id:6,
        name:'Payment',
    },
    ]
    


  return (
    <>

<h6 className='mt-20 text-black text-center font-extrabold text-[46px]'>Booking</h6>

<section className='flex items-center justify-center mt-4'>
{HeaderData.map((item,index)=>{
 let number='bg-gray-300'
 let text='text-gray-300'
 let img='../images/booking/Strokelight.svg'
 if(index===active){
      number='bg-black'
      text='text-black'
      img='../images/booking/Stroke.svg'
      
 }
 if(index<active){
    number='bg-black'
    text='text-black'
    img='../images/booking/Stroke.svg'

 }

 if(index < 5){
  return <div key={item.id} className='flex items-center gap-3'>
   <h1 className={`${number} rounded-[50%]   text-white h-6 w-6 flex items-center justify-center text-xs`}>{item.id}</h1>
   <h6 className={`${text} text-sm font-semibold mr-4`}>{item.name}</h6>
   <img src={`${img}`} className={`mr-7`}/>
</div>
}
return <div key={item.id} className='flex items-center gap-3'>
   <h1 className={`${number} rounded-[50%]   text-white h-6 w-6 flex items-center justify-center text-xs`}>{item.id}</h1>
   <h6 className={`${text} text-sm font-semibold mr-4`}>{item.name}</h6>
   </div>
})}
</section>

    </>
  )
}

export default page