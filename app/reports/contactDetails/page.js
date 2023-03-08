"use client"
import DashBookingHeader from '../../Components/dashBookingHeader/page'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import Link from 'next/link'
import { useDispatch ,useSelector } from 'react-redux'
import { postAddress} from '@/redux/actions/page'

import {useState,useEffect} from 'react'
import {useRouter} from 'next/navigation';



const page = () => {
    const router = useRouter();
    const dispatch = useDispatch();


    const [form, setForm] = useState({
      title: "",
      streetName:'',
      streetNumber:'',
      apartmentNumber:'',
      postalCode:'',
      city:'',
    });
  
    const {title,streetName,streetNumber,apartmentNumber,postalCode,city}=form
  
    const formDetails = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const addressSubmit = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      
      myForm.set("title", title);
      myForm.set("street_name", streetName);
      myForm.set("street_number", streetNumber);
      myForm.set("apartment_number", apartmentNumber);
      myForm.set("postal_code", postalCode);
      myForm.set("city", city);
      setFormToggle(!formToggle)
      dispatch(postAddress(myForm, token));
    }
  
    const [formToggle,setFormToggle]=useState(false)
  
    function editToggle(){
    setFormToggle(!formToggle)
    }
  
    const [token,setToken]=useState(null)
  
    useEffect(()=>{
    if(localStorage.getItem('user')){
      let data = localStorage.getItem('user')
      let loginData = JSON.parse(data);
      form.token=loginData.token
      setToken(loginData.token)
    }
  },[])
  

  return (
    <>




    
    <div className='bg-specialbg  h-max relative'>
    <Head title='Order History' />
    <main className='py-8 ml-auto mr-auto w-[92%]'>
    <DashboardNav navTitle='Reports' />
    
    <DashBookingHeader active={1}/>


    <section className='bg-white h-max rounded-[16px] mt-10'>

<main className=' pt-6'>

<section className=' flex items-center justify-between  pb-5 mx-2 sm:mx-3 smd:mx-14 xlg:mx-28 '>

<section className='flex gap-28'>
<div className=''>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>SELECT PLAN</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>80 hours</h6>
</div>

<div>
  <h6 className='tracking-[0.12em] text-xs font-semibold'>TOTAL PRICE</h6>
  <h6 className='text-[19px]  xlsm:text-[24px] font-bold'>3032 zł</h6>
</div>
</section>

  <button className=' shrink-0 border-[1px] border-solid  border-gray-300 flex px-3 xlsm:px-5 py-[10px] text-sm font-semibold rounded-[50px]' onClick={()=>router.push('/reports/booking')}><img src='../images/booking/Edit.svg' className='pr-2'/>Edit Plan</button>

</section>

</main>

<section className='border-[1px]  border-solid  border-gray-300' ></section>

{/* ------------------------------------------------------------------------------------ */}
<section className='mx-5 xlsm:mx-14 xlg:mx-28 py-10 ' >

<h6 className='text-[16px] tracking-[0.02em] font-semibold'>Saved Addresses</h6>

<main className='mt-2 flex gap-8'>

<div className='border-dashed border-[1px] border-gray-400 py-16 rounded-[14px] w-[196px]' onClick={editToggle}>
<section className='flex items-center justify-center flex-col gap-3'>
<img className='' src='../images/dashboard/Plusblack.svg'/>
<h6 className='text-[20px] font-semibold'>Add Address</h6> 
</section>
</div>

<div className='bg-white px-6 py-6 w-[25%] rounded-[14px] border-solid border-[1px] border-gray-300 cursor-pointer'>
  <div className='h-full flex flex-col'>
  <h6 className=' font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className=' mb-2 text-[20px]  leading-7 '>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-7'><img className='pr-3' src='../images/dashboard/delete.svg' /><img className='pr-3' src='../images/dashboard/edit.svg'/></div>
</div>
</div>

<div className='bg-white px-6 py-6 w-[25%] rounded-[14px] border-solid border-[1px] border-gray-300 cursor-pointer'>
  <div className='h-full flex flex-col'>
  <h6 className=' font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className=' mb-2 text-[20px]  leading-7 '>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-7'><img className='pr-3' src='../images/dashboard/delete.svg' /><img className='pr-3' src='../images/dashboard/edit.svg'/></div>
</div>
</div>

<div className='bg-white px-6 py-6 w-[25%] rounded-[14px] border-solid border-[1px] border-gray-300 cursor-pointer'>
  <div className='h-full flex flex-col'>
  <h6 className=' font-semibold text-[20px] mb-2'>Address 1</h6>
  <h6 className=' mb-2 text-[20px]  leading-7 '>Targowa 20a, 03-727 Warszawa, Poland</h6>
  <div className='flex mt-7'><img className='pr-3' src='../images/dashboard/delete.svg' /><img className='pr-3' src='../images/dashboard/edit.svg'/></div>
</div>
</div>

</main>

{/* ------------------------------------------------------------------------------------ */}
<div className='flex justify-between'>
  <Link href={{pathname:'/reports/booking'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
  <Link href={{pathname:'/reports/additionalRequirements'}}><button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' >Next</button></Link>
</div>



</section>

 




</section>










    </main>

{formToggle && <section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] w-full h-full  z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden'>
<form className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-7 shadow-dashshadow' onSubmit={addressSubmit}>
<h6 className='text-[20px] font-semibold mb-2'>Add Address</h6>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Save as</h6>
<input style={{border:'1px solid #C8CACD'}} name='title' required value={title} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none '/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Name</h6>
<input style={{border:'1px solid #C8CACD'}} name='streetName' required value={streetName} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Number</h6>
<input style={{border:'1px solid #C8CACD'}} type='number' name='streetNumber' required value={streetNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Apartment Number(optional)</h6>
<input style={{border:'1px solid #C8CACD'}}  name='apartmentNumber' value={apartmentNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>


<section className='flex gap-4 '>
<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>Postal Code</h6>
<input style={{border:'1px solid #C8CACD'}} name='postalCode' required value={postalCode} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>City / Town</h6>
<input style={{border:'1px solid #C8CACD'}} name='city' required value={city}  onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>
</section>

<section className='flex justify-end gap-[10px] mt-[20px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={editToggle}>CANCEL</button>
<input type='submit' className='bg-dashgreen p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' value='ADD' />
</section>

</form>

</section>}



  </div>
  </>
    )
}

export default page