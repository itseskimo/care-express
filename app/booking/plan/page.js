"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {format} from 'date-fns'
import {Calendar} from 'react-date-range';
import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';
import Head from '../../head'

const page = () => {

const router = useRouter();

const [careType,setCareType]=useState('')
const [selectTime,setSelectTime]=useState('')

const [hours,setHours]=useState('40 hours')
const [cost,setCost]=useState('39,90 zł / h')
const [calendarDate,setCalendarDate]=useState('')
const [togglecalendar,setToggleCalendar]=useState(false)
const [date, setDate] = useState(null);
console.log(calendarDate,selectTime,careType)

function formSubmit(e){
  e.preventDefault();
  if(calendarDate !== '' && selectTime !== '' && careType !== ''){
  localStorage.setItem('hours', hours)
  localStorage.setItem('cost', cost)
  localStorage.setItem('careType', careType)
  localStorage.setItem('calendarDate', calendarDate)
  router.push('/booking/contact')
  }else{
    alert('Select Care Start Date to proceed')
  }
}

function calendar(){
 const calendarCalc=['null',"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

 const calendar= document.getElementById('extractCalendarTime')
 let dateCalc=`${calendar.value.substring(3,5)}`
 let monthCalc = calendarCalc[calendar.value.substring(0,1) === '0' ? calendar.value.substring(1,2) : calendar.value.substring(0,2)] 
 let yearCalc= `${calendar.value.substring(6,10)}`
 const finalDate=`${dateCalc}` + `${monthCalc}` + `${yearCalc}`
//  setCalendarDate(finalDate)
setCalendarDate(calendar.value)

 setToggleCalendar(!togglecalendar)
}

useEffect(()=>{

// setToggleCalendar(false)

if(localStorage.getItem('careType')){
  let careType =  localStorage.getItem('careType')
  setCareType(careType)
}else{
  setCareType('nanny')
}

if(localStorage.getItem('hours')){
  let hours =  localStorage.getItem('hours')
  setSelectTime(hours)
}else{
  setSelectTime('40 hours')
}

},[])


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
            <Head title='Select Plan'/>

    <Navbar color={'bg-blue'} {...navDetails}/>
 

   
  {/* ----------------------------------------------------------------------------------------------------------------- */}
  <main className='bg-specialbg overflow-hidden'>
  <main className='mx-4 sm:mx-14 '>
  {/* ------------RESPONSIBLE FOR MARGIN---------------- */}


  <BookingHeader active={0}/>

  <form className='bg-white h-max rounded-[16px] mt-10 ' onSubmit={formSubmit}>

  <main className='mx-28 py-10'>

  <div>

  <h6 className='font-semibold tracking-[0.02em] text-[16px]'>Select Care Type</h6>
  <section className='mt-2 flex flex-wrap gap-8'  >

    <div className='border-[1px] border-solid border-gray-300	 rounded-[12px] relative cursor-pointer w-[196px] h-[180px]' id='nanny' onClick={(e)=>setCareType(e.target.id)}>
      <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'nanny' ? 'block' : 'hidden'}`} >
      <img src='../images/booking/check.png' className=' absolute top-[50%]  left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none'/>
      </nav>
      <img src='../images/booking/mom-son-cycle.png' className='select-none pointer-events-none'/>
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none' >Nanny Express</h6>
    </div>


    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='senior' onClick={(e)=>setCareType(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'senior' ? 'block' : 'hidden'}`}>
      <img src='../images/booking/check.png' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none'/>
    </nav>
      <img src='../images/booking/nanny.png' className='pt-[10px] select-none pointer-events-none'/>
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none'>Senior Express</h6>
    </div>


    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='pet' onClick={(e)=>setCareType(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'pet' ? 'block' : 'hidden'}`}>
      <img src='../images/booking/check.png' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none' />
    </nav>
      <img src='../images/booking/pet.png' className='pt-[4px] select-none pointer-events-none'/>
      <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none' >Pet Express</h6>
    </div>


    <div className='border-[1px] border-solid border-gray-300	w-max rounded-[12px] relative cursor-pointer' id='special' onClick={(e)=>setCareType(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'special' ? 'block' : 'hidden'}`} >
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
    
    <div className={`border-[1px] border-solid ${selectTime === '10 hours'? 'border-blue' : 'border-gray-300' } 	w-[196px] h-[180px] rounded-[12px] relative cursor-pointer`} id='10 hours' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9  rounded-[12px] select-none pointer-events-none' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >10 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >55 zł / h</h6>
      </section>
        <img src='../images/booking/check.png' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectTime === '10 hours'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === '20 hours'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='20 hours' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9 select-none pointer-events-none rounded-[12px]' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >20 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >45 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectTime === '20 hours'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === '40 hours'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='40 hours' onClick={extractText}>
      <nav className='flex bg-green w-max rounded-lg py-1 px-2 mt-2 ml-2 select-none pointer-events-none' >
      <img src='../images/booking/Star.svg' className='pr-2 select-none pointer-events-none' />
      <h6 className='text-xs font-bold text-white select-none pointer-events-none' >MOST POPULAR</h6>
      </nav>
      <section className='font-semibold flex flex-col pl-2 pt-[6px] select-none pointer-events-none rounded-[12px]' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >40 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >39,90 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute select-none pointer-events-none  bottom-3 left-3 ${selectTime === '40 hours'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === '80 hours'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='80 hours' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9 select-none pointer-events-none rounded-[12px]' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >80 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >37,90 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute select-none pointer-events-none bottom-3 left-3 ${selectTime === '80 hours'? 'block' : 'hidden'}`} />
    </div>
    
    <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectTime === '160 hours'? 'border-blue' : 'border-gray-300' } rounded-[12px] relative cursor-pointer`} id='160 hours' onClick={extractText}>
      <section className='font-semibold flex flex-col pl-2 pt-9 rounded-[12px] select-none pointer-events-none' >
      <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none'>160 hours</h6>
      <h6 className=' font-bold text-2xl select-none pointer-events-none' >35,90 zł / h</h6>
      </section>
      <img src='../images/booking/check.png' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectTime === '160 hours'? 'block' : 'hidden'}`} />
    </div>
    
  </section>
</div>

{/* ------------------------------------------------------------------------------------ */}

<div>
  <h6 className='font-bold mt-5'>When would you like for the care to begin ?</h6>
  <section className='mt-2 '>
    
  <div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[80%] lg:w-[50%]'>
  <div className='relative flex '>
  <img src='../images/booking/calendar.svg' className='absolute  top-3 right-3 pointer-events-none select-none'/>
  <input style={{border:'1px solid #ABABAB'}}
   className='outline-none bg-inputbg w-full py-[10px] rounded-[8px] pl-3 cursor-pointer' 
   name='createEmail'
   type='email'
   readOnly
   placeholder='Care Start Date'
   value={date === null ? '' : `${format(date, "MM/dd/yyyy")}` }
   required
   onClick={calendar}
   id='extractCalendarTime'
   />
  </div>
</div>

{togglecalendar &&
<section onClick={calendar}>

<Calendar 
showMonthAndYearPickers={false} 
onChange={item => setDate(item)}
date={date}  
className='shadow-xl absolute z-[1]'
minDate={new Date()}
/>
</section>

}


  </section>
</div>

{/* ------------------------------------------------------------------------------------ */}
<div className='flex justify-end'>
<input type='submit' className='bg-blue rounded-[50px] px-9 py-[8px] text-white cursor-pointer text-[18px] font-semibold mt-10' value='Next'/>
</div>
</main>

</form>


</main>
</main>

{/* ----------------------------------------------------------------------------------------------------------------- */}


 <Footer {...footerDetails}/>

    </>
  )
}

export default page
