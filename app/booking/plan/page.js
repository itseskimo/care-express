"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import { Calendar } from 'react-date-range';
import {useState} from 'react'
import Link from 'next/link'

const page = () => {

const [careType,setCareTye]=useState('')
const [selectTime,setSelectTime]=useState('')
const [hours,setHours]=useState('')
const [cost,setCost]=useState('')
const [date, setDate] = useState(null);



function saveData(){
  localStorage.setItem('hours', hours)
  localStorage.setItem('cost', cost)
  localStorage.setItem('careType', careType)
}


function extractText(e){
  setSelectTime(e.target.id)

   let text=e.target.innerText.split('\n')

   if(text[0]=== 'MOST POPULAR'){
    setHours(text[1])
    setCost(text[2])
   }else{
    setHours(text[0])
    setCost(text[1])
   }
}

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

    <Navbar color={'bg-blue'} {...navDetails}/>
 

   
  {/* ----------------------------------------------------------------------------------------------------------------- */}
  <main className='bg-specialbg overflow-hidden'>
  <main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}


  <BookingHeader active={0}/>

  <section className='bg-white h-max rounded-[16px] mt-10'>

  <main className='mx-28 py-10'>

  <div>

  <h6 className='font-semibold tracking-[0.02em] text-[16px]'>Select Care Type</h6>
  <section className='mt-2 flex flex-wrap gap-8'  >

    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='Nanny' onClick={(e)=>setCareTye(e.target.id)}>
      <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'Nanny' ? 'block' : 'hidden'}`} >
      <img src='../images/booking/check.png' className=' absolute top-[50%]  left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none'/>
      </nav>
      <img src='../images/booking/mom-son-cycle.png' className='select-none pointer-events-none'/>
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none' >Nanny Express</h6>
    </div>

  


    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='Senior' onClick={(e)=>setCareTye(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'Senior' ? 'block' : 'hidden'}`}>
      <img src='../images/booking/check.png' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none'/>
    </nav>
      <img src='../images/booking/nanny.png' className='pt-[10px] select-none pointer-events-none'/>
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none'>Senior Express</h6>
    </div>


    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='Pet' onClick={(e)=>setCareTye(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'Pet' ? 'block' : 'hidden'}`}>
      <img src='../images/booking/check.png' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none' />
    </nav>
      <img src='../images/booking/pet.png' className='pt-[4px] select-none pointer-events-none'/>
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none' >Pet Express</h6>
    </div>


    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='Special' onClick={(e)=>setCareTye(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'Special' ? 'block' : 'hidden'}`} >
      <img src='../images/booking/check.png' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none' />
    </nav>
      <img src='../images/booking/special.png' className='pt-[4px] select-none pointer-events-none' />
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none'>Special Express</h6>
    </div>
  </section>
</div>

{/* --------------------------------------------------------------------------------------- */}

<div>
  <h6 className='font-semibold tracking-[0.02em] text-[16px] my-5'>Choose Plan</h6>
  <section className='mt-2 flex flex-wrap gap-8' >
    
    <div className={`border-[1px] border-solid ${selectTime === 'hours10'? 'border-blue' : 'border-gray-300' } 	w-[196px] h-[180px] rounded-[12px] relative cursor-pointer`} id='hours10' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9  rounded-[12px] select-none pointer-events-none' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >10 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >55 zł / h</h6>
      </section>
        <img src='../images/booking/check.png' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectTime === 'hours10'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === 'hours20'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='hours20' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9 select-none pointer-events-none rounded-[12px]' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >20 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >45 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectTime === 'hours20'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === 'hours40'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='hours40' onClick={extractText}>
      <nav className='flex bg-green w-max rounded-lg py-1 px-2 mt-2 ml-2 select-none pointer-events-none' >
      <img src='../images/booking/Star.svg' className='pr-2 select-none pointer-events-none' />
      <h6 className='text-xs font-bold text-white select-none pointer-events-none' >MOST POPULAR</h6>
      </nav>
      <section className='font-semibold flex flex-col pl-2 pt-[6px] select-none pointer-events-none rounded-[12px]' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >40 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >39,90 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute select-none pointer-events-none  bottom-3 left-3 ${selectTime === 'hours40'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === 'hours80'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='hours80' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9 select-none pointer-events-none rounded-[12px]' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >80 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >37,90 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute select-none pointer-events-none bottom-3 left-3 ${selectTime === 'hours80'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === 'hours160'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='hours160' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9 rounded-[12px] select-none pointer-events-none' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none'>160 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >35,90 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectTime === 'hours160'? 'block' : 'hidden'}`} />
    </div>
    
  </section>
</div>

{/* ------------------------------------------------------------------------------------ */}

<div>
  <h6 className='font-bold mt-5'>When would you like for the care to begin ?</h6>
  <section className='mt-2 '>

    <div className='border-[1px] border-solid flex items-center justify-between border-gray-300 text-xs py-[10px] rounded-[12px] w-[46%] bg-inputbg'>
    <h6 className='pl-3 font-semibold tracking-[0.02em] text-[16px] text-gray-300'>{date === null ? 'Care Start Date' : `${format(date, "MM/dd/yyyy")}`}</h6>
    <img src='../images/booking/calendar.svg' className='pr-3'/>
    </div>

<Calendar 
showMonthAndYearPickers={false} 
onChange={item => setDate(item)}
date={date}  
className='shadow-xl'
/>













  </section>
</div>

{/* ------------------------------------------------------------------------------------ */}
<div className='flex justify-end'>
<Link href={{pathname:'./booking/contact'}}><button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' onClick={saveData} >Next</button></Link>
</div>
</main>

</section>



</main>
</main>
{/* ----------------------------------------------------------------------------------------------------------------- */}



    
{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </>
  )
}

export default page
