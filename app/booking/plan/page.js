"use client"
import Navbar from '../../Components/navbar/navbar'
import Footer from '../../Components/footer/footer'
import BookingHeader from '../../Components/bookingHeader/page'
import Head from '../../head'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import {Calendar} from 'react-date-range';
import {useState,useEffect, useRef} from 'react'
import {useRouter} from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux'
import { getServicePricing } from '@/redux/actions/page'
import ErrorModal from '../../Components/errorModal/page'


const page = () => {
  const { orders}  = useSelector((state) => state.orders);

  const dispatch= useDispatch()
  const router = useRouter();
  const closeCalendarRef = useRef(null);

  const handleCalendarClose  = (e) => {
    if (!closeCalendarRef.current.contains(e.target)) {
      setToggleCalendar(false);
    }
  }
  

    const [careType,setCareType]=useState('')
    const [selectPlanId,setSelectPlanId]=useState('')
    const [hours,setHours]=useState('')
    const [cost,setCost]=useState('')


    const [togglecalendar,setToggleCalendar]=useState(false)

    const [date, setDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)))
    const [utilityDate, setUtilityDate] = useState('')

    let dateDisplay = utilityDate ? utilityDate : JSON.stringify( date).slice(1,11).split("-").filter(item=>!!item).reverse().join("/")

    const closeErrorRef = useRef(null);
  
    const handleErrorClose = (e) => {   
    if(closeErrorRef.current === e.target) setErrorModal(false) 
    }

  useEffect(()=>{
    if(localStorage.getItem('user')){
        dispatch(getServicePricing())
        
    if(localStorage.getItem('careType')){
      const careType = localStorage.getItem('careType')
      setCareType(careType)
      }  

    if(localStorage.getItem('plan')){
      const plan = localStorage.getItem('plan')
      const hours = localStorage.getItem('hours')
      const cost = localStorage.getItem('cost')
      extractText(plan, hours , cost)
      }

    if(localStorage.getItem('dateDisplay')){
      const dateDisplay = localStorage.getItem('dateDisplay')
      setUtilityDate(dateDisplay)
      }
      }
      document.addEventListener("click", handleErrorClose, true);
      document.addEventListener("click", handleCalendarClose, true);
      return () => {document.removeEventListener("click", handleCalendarClose , true) 
                    document.removeEventListener("click", handleErrorClose , true)
      }
    },[])


    function formSubmit(e){
      e.preventDefault();
      if( selectPlanId && careType){
      localStorage.setItem('hours', hours)
      localStorage.setItem('cost', cost)
      localStorage.setItem('careType', careType)
      localStorage.setItem('dateDisplay', dateDisplay)
      router.push('/booking/contact')
      }else{
      setErrorModal(true)
      }
    }

    
    function calendar(){
      if(dateDisplay === utilityDate)localStorage.removeItem('dateDisplay')
      utilityDate.length > 0 &&  setUtilityDate('')  
      setToggleCalendar(true)
    }

    
    function extractText(id, hours , rpHours){
      localStorage.setItem('plan', id)
      setSelectPlanId(id)
      setHours(hours)
      setCost(rpHours)
    }

    const [errorModal, setErrorModal]= useState(false)


  function careTypeSetter(id){
  setCareType(id)
  let res = orders?.some( order => order['service'] === id )
  if(!res){
  localStorage.removeItem('plan')
  localStorage.removeItem('careType')
  setSelectPlanId('')
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
    <div className='bg-specialbg  h-max' >

    {errorModal && <ErrorModal text='Please Select All Fields!' refState={closeErrorRef}/>}

    <Navbar color={'bg-blue'} {...navDetails}/>

    <Head title='Select Plan'/>
    <main className='py-8 ml-auto mr-auto w-[92%]'>
      

    <BookingHeader active={0}/>


<form className='bg-white h-max rounded-[16px] mt-10 ' onSubmit={formSubmit}>

<main className='mx-32 py-10'>

<div className=''>

<h6 className='font-semibold tracking-[0.02em] text-[16px]'>Select Care Type</h6>
<section className='mt-2 flex flex-wrap gap-9'  >

  <div className={`border-[1px] border-solid w-max rounded-[12px] relative cursor-pointer ${careType === 'nanny'  ? 'border-bookingblue' : 'border-bookingborder	'}`} id='nanny' onClick={(e)=>careTypeSetter(e.target.id)}>
    <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'nanny' ? 'block' : 'hidden'}`} >
    <img src='../images/booking/check.svg' className=' absolute top-[50%]  left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none'/>
    </nav>
    <img src='../images/booking/mom-son-cycle.png' className='select-none pointer-events-none'/>
    <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none' >Nanny Express</h6>
  </div>


  <div className={`border-[1px] border-solid w-max rounded-[12px] relative cursor-pointer ${careType === 'senior' ? 'border-bookingblue' : 'border-bookingborder	'}`} id='senior' onClick={(e)=>careTypeSetter(e.target.id)}>
  <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'senior' ? 'block' : 'hidden'}`}>
    <img src='../images/booking/check.svg' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none'/>
  </nav>
    <img src='../images/booking/nanny.png' className='pt-[10px] select-none pointer-events-none'/>
    <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none'>Senior Express</h6>
  </div>


  <div className={`border-[1px] border-solid w-max rounded-[12px] relative cursor-pointer ${careType === 'pet' ? 'border-bookingblue' : 'border-bookingborder	'}`} id='pet' onClick={(e)=>careTypeSetter(e.target.id)}>
  <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'pet' ? 'block' : 'hidden'}`}>
    <img src='../images/booking/check.svg' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none' />
  </nav>
    <img src='../images/booking/pet.png' className='pt-[4px] select-none pointer-events-none'/>
    <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none' >Pet Express</h6>
  </div>


  <div className={`border-[1px] border-solid w-max rounded-[12px] relative cursor-pointer ${careType === 'special' ? 'border-bookingblue' : 'border-bookingborder	'}`} id='special' onClick={(e)=>careTypeSetter(e.target.id)}>
  <nav className={`bg-grey absolute w-full h-full select-none pointer-events-none rounded-[12px] ${careType === 'special' ? 'block' : 'hidden'}`} >
    <img src='../images/booking/check.svg' className=' absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none' />
  </nav>
    <img src='../images/booking/special.png' className='pt-[4px] select-none pointer-events-none' />
    <h6 className='text-left font-semibold text-[16px] pl-3 py-3 select-none pointer-events-none'>Special Express</h6>
  </div>
</section>
</div>

{/* --------------------------------------------------------------------------------------- */}
<div>
  {orders?.some( order => order['service'] === careType) && <h6 className='font-semibold tracking-[0.02em] text-[16px] my-5'>Choose Plan</h6>}
<section className='mt-2 flex flex-wrap gap-9' >

{orders && orders.map((item)=>{

 if(item.most_popular === false){

  if(item.service === careType){
    return <div key={item._id} className={`border-[1px] border-solid ${selectPlanId === item._id? 'border-blue' : 'border-bookingborder' } 	w-[196px] h-[180px] rounded-[12px] relative cursor-pointer`} onClick={()=>extractText(item._id, item.hours,item.rate_per_hour)}>
    <section className='font-semibold flex flex-col pl-2 pt-9  rounded-[12px] select-none pointer-events-none' >
    <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >{item.hours} hours</h6>
    <h6 className=' font-bold text-2xl select-none pointer-events-none' >{item.rate_per_hour} zł / h</h6>
    </section>
      <img src='../images/booking/check.svg' className={`absolute bottom-3 select-none pointer-events-none left-3 ${selectPlanId === item._id ? 'block' : 'hidden'}`} />
  </div>
  }

 }else{

  if(item.service === careType){

  return <div className={`border-[1px] border-solid 	w-[196px] h-[180px] ${selectPlanId === item._id? 'border-blue' : 'border-bookingborder' } rounded-[12px] relative cursor-pointer`} onClick={()=>extractText(item._id, item.hours,item.rate_per_hour)}>
  <nav className='flex bg-green w-max rounded-lg py-1 px-2 mt-2 ml-2 select-none pointer-events-none' >
  <img src='../images/booking/Star.svg' className='pr-2 select-none pointer-events-none' />
  <h6 className='text-xs font-bold text-white select-none pointer-events-none' >MOST POPULAR</h6>
  </nav>
  <section className='font-semibold flex flex-col pl-2 pt-[6px] select-none pointer-events-none rounded-[12px]' >
  <h6 className='text-2xl font-medium mb-3 select-none pointer-events-none' >{item.hours} hours</h6>
  <h6 className=' font-bold text-2xl select-none pointer-events-none' >{item.rate_per_hour} zł / h</h6>
  </section>
  <img src='../images/booking/check.svg' className={`absolute select-none pointer-events-none  bottom-3 left-3 ${selectPlanId === item._id? 'block' : 'hidden'}`} />
</div>

  }

 
 }

}) }
 
</section>
</div>

{/* ------------------------------------------------------------------------------------ */}

<div>
<h6 className='font-bold mt-6'>When would you like for the care to begin ?</h6>
<section className='mt-2 '>
  
<div className='min-w-[300px] sm:min-w-[330px] lg:max-w-none w-[80%] lg:w-[50%]'>
<div className='relative flex '>

<img src='../images/booking/Calendar.svg' className='absolute  top-3 right-3 pointer-events-none select-none'/>
<input
 className='outline-none bg-inputbg w-full py-[10px] rounded-[8px] pl-3 cursor-pointer border-bookingborder border-[1px] border-solid' 
 readOnly
 placeholder='Care Start Date'
 value={ dateDisplay}
 onClick={calendar}
 id='extractCalendarTime'
 />
</div>
</div>

<section onClick={calendar} ref={closeCalendarRef}>
{togglecalendar &&
<Calendar 
showMonthAndYearPickers={false} 
onChange={item => setDate(item)}
date={date}  
className='shadow-xl absolute z-[1]'
minDate={ new Date(new Date().setDate(new Date().getDate() + 1))}
/>
}
</section>

</section>
</div>

{/* ------------------------------------------------------------------------------------ */}
<div className='flex justify-end'>
<input type='submit' className='bg-blue rounded-[50px] px-9 py-[8px] text-white cursor-pointer text-[18px] font-semibold mt-10' value='Next'/>
</div>
</main>

</form>



    </main>
    <Footer {...footerDetails}/>

  </div>
    )
}

export default page