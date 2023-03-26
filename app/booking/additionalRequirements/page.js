"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react'
import Head from '../../head'

const page = () => {

  const router = useRouter();

  const [saveCheckBoxesText,setSaveCheckBoxesText]=useState([])
console.log(saveCheckBoxesText)
  function checkboxSaver(id){
     let validator = saveCheckBoxesText.includes(id)
  
     if(validator){
      setSaveCheckBoxesText([...new Set ([...saveCheckBoxesText.filter((item)=> item !== id)])].sort((a,b)=>b.length-a.length))
     }else{
      setSaveCheckBoxesText([...new Set ([id,...saveCheckBoxesText])].sort((a,b)=>b.length-a.length))
     }
  }
  
  function saveAdditionalRequirements(){
    localStorage.setItem('additionalRequirements',additionalRequirements)
    localStorage.setItem('additionalServicesArr', saveCheckBoxesText)
    }


const [additionalRequirements,setAdditionalRequirements]=useState('')
const [hours,setHours]=useState('')
const [cost,setCost]=useState('')


useEffect(()=>{

if(localStorage.getItem('user')){

  let hours= localStorage.getItem('hours')
  setHours(hours)
  let cost= localStorage.getItem('cost')
  setCost(cost)

  if(localStorage.getItem('additionalRequirements')){
  const additionalRequirements=  localStorage.getItem('additionalRequirements')
  setAdditionalRequirements(additionalRequirements)
  }

  if(localStorage.getItem('additionalServicesArr')){
  const saveCheckBoxesText=  localStorage.getItem('additionalServicesArr')
  setSaveCheckBoxesText([...saveCheckBoxesText.split(',')])
  }

}
},[])


  const navDetails={
    clicked:'Booking',
    subcolour:'text-blue',
    border:'rgba(65, 110, 234, 1)',
    background:'bg-black',

    first:{
      id:'#home',
      name:'Home',
    },
    second:{
      id:'#services',
      name:'Our services',
    },
    third:{
      id:'#about',
      name:'About us',
    },
  }


  const footerDetails={
    background:'bg-specialbg',
    border:'1px solid #416EEA',
    buttonColour:'bg-blue',
    subTitle:'text-white',
    underline:'1px solid white',
    InstaIcon:'../images/business/Icons/instagram.svg',
    FbIcon:'../images/business/Icons/facebook.svg',
  }


  return (
    <>
    <div className='bg-specialbg  h-max'>
    <Head title='Additional Requirements'/>

<Navbar color={'bg-blue'} {...navDetails}/>
    <main className='py-8 ml-auto mr-auto w-[92%]'>
    
    <BookingHeader active={2}/>


    <section className='bg-white h-max rounded-[16px] mt-10'>

<main className=' pt-6'>

<section className=' flex items-center justify-between  pb-5 mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 '>

<section className='flex gap-28'>
<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>{hours} hours</h6>
</div>

<div>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>{`${parseInt(hours)*parseInt(cost)} zł`}</h6>
</div>
</section>

  <button className=' shrink-0 border-[1px] border-solid  border-gray-300 flex px-3 xlsm:px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/reports/booking')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>

</section>

</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}

<main className='mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 py-10'>

<h6 className='tracking-[0.02em] text-[16px] font-semibold mb-2'>Additional Services</h6>

<section className='flex flex-col md:flex-row gap-4 md:gap-20 lg:gap-32 xlg:gap-48'>
<div className='flex items-center  cursor-pointer' onClick={()=>checkboxSaver('Language Tutoring')}>
    <input type='checkbox' className='w-4 h-4 mr-2 select-none' checked={saveCheckBoxesText.includes('Language Tutoring')} onChange={(e) =>e.target.checked}></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold whitespace-nowrap'>Language Tutoring</h6>
</div>
<div className='flex items-center cursor-pointer'  onClick={()=>checkboxSaver('VAS #2')}>
    <input type='checkbox' className='w-4 h-4 mr-2 select-none' checked={saveCheckBoxesText.includes('VAS #2')} onChange={(e) =>e.target.checked}></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold whitespace-nowrap'>VAS #2</h6>
</div>
<div className='flex items-center cursor-pointer'  onClick={()=>checkboxSaver('VAS #3')}>
    <input type='checkbox' className='w-4 h-4 mr-2 select-none' checked={saveCheckBoxesText.includes('VAS #3')} onChange={(e) =>e.target.checked}></input>
    <h6 className='tracking-[0.02em] text-[16px] font-semibold whitespace-nowrap'>VAS #3</h6>
</div>

</section>

<h6 className='tracking-[0.02em] text-[16px] font-semibold mt-6 mb-3'>Any special needs or requirements</h6>

<textarea style={{border:'1px solid #ABABAB'}} value={additionalRequirements} onChange={(e)=>setAdditionalRequirements(e.target.value)} placeholder='Tell us anything else we need to know, like allergies etc.' className='resize-none  outline-none bg-inputbg w-full px-4 pt-4  pb-[200px] overflow-hidden rounded-[12px]'></textarea>

<div className='flex justify-between'>
<Link href={{pathname:'/booking/contact'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
<Link href={{pathname:'/booking/summary'}}><button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' onClick={saveAdditionalRequirements}>Next</button></Link>
</div>


</main>



{/* ------------------------------------------------------------------------------------ */}




</section>



    </main>
  </div>

 <Footer {...footerDetails}/>

    </>
  )
}

export default page
