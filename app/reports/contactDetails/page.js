"use client"
import DashBookingHeader from '../../Components/dashBookingHeader/page'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import Link from 'next/link'
import { useDispatch ,useSelector } from 'react-redux'
import { postAddress} from '@/redux/actions/page'
import {  getAddresses , deleteAddress, updateAddress} from '@/redux/actions/page'
import {useState,useEffect , useRef } from 'react'
import {useRouter} from 'next/navigation';
import ErrorModal from '../../Components/errorModal/page'



const page = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const  address = useSelector((state) => state.address);
    const listRef = useRef();

    const [form, setForm] = useState({
      title: "",
      streetName:'',
      streetNumber:'',
      apartmentNumber:'',
      postalCode:'',
      city:'',
    });
  
    const {title,streetName,streetNumber,apartmentNumber,postalCode,city,addressId}=form
  
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
      setAddAddressToggle(!addAddressToggle)
      dispatch(postAddress(myForm, token));
    }
  

    const editAddressSubmit = (e) => {
      e.preventDefault();
       
      const myForm = new FormData();
    
      myForm.set("_id", addressId);
      myForm.set("title", title);
      myForm.set("street_name", streetName);
      myForm.set("street_number", streetNumber);
      myForm.set("apartment_number", apartmentNumber);
      myForm.set("postal_code", postalCode);
      myForm.set("city", city);
    
      dispatch(updateAddress(myForm,token));

      if(localStorage.getItem('contact')){
        let contact = localStorage.getItem('contact')
        let inputField  = JSON.parse(contact);


      if(title !== '') inputField.title = title
      if(streetName !== '')  inputField.street_name = streetName
      if(streetNumber !== '')  inputField.street_number = streetNumber
      if(apartmentNumber !== '')  inputField.apartment_number = apartmentNumber
      if(postalCode !== '')  inputField.postal_code = postalCode
      if(city !== '')  inputField.city = city

    
      let editedContactData = JSON.stringify(inputField);
      localStorage.setItem("contact", editedContactData);
      }

  setFormToggle(!formToggle)
  setForm({title: "", streetName:'', streetNumber:'', apartmentNumber:'', postalCode:'', city:''})
  }

  const [addAddressToggle,setAddAddressToggle]=useState(false)


  function addAddressTogg(){
  setAddAddressToggle(!addAddressToggle)
  setForm({title: "", streetName:'', streetNumber:'', apartmentNumber:'', postalCode:'', city:''})
  }

  const [formToggle,setFormToggle]=useState(false)

  function editToggle(id,title,streetNumber,streetName,postalCode,city,apartmentNumber){
  setForm({ addressId: id  ,title: title || '', streetName:streetName || '', streetNumber:streetNumber || '', apartmentNumber:apartmentNumber || '', postalCode:postalCode || '', city:city|| ''})
  setFormToggle(!formToggle)
  }

  const [deleteToggle,setDeleteToggle]=useState(false)
  const [toBeDeletedId,setToBeDeletedId]=useState(null)
  const [modalTitle,setModalTitle]=useState(null)

  function deleteTogg(toBeDeleted,title){

  setToBeDeletedId(toBeDeleted)
  setModalTitle(title)
  setDeleteToggle(!deleteToggle)
  }

  function deleteAddressSuccess(){
    dispatch(deleteAddress(toBeDeletedId, token))
    setDeleteToggle(false)
    let res = address?.some( add => add['_id'] === toBeDeletedId)
    res && localStorage.removeItem('contact')
    }
  
    const [token,setToken]=useState(null)
    const [hours,setHours]=useState('')
    const [cost,setCost]=useState('')


    const closeErrorRef = useRef(null);
  
    const handleErrorClose = (e) => {   
    if(closeErrorRef.current === e.target) setErrorModal(false) 
    }

    useEffect(()=>{
    if(localStorage.getItem('user')){
      let data = localStorage.getItem('user')
      let loginData = JSON.parse(data);
      form.token=loginData.token
      setToken(loginData.token)
      dispatch(getAddresses(loginData.token))

      let hours= localStorage.getItem('hours')
      setHours(hours)
      let cost= localStorage.getItem('cost')
      setCost(cost)

    if(localStorage.getItem('contact')){
      let contact = localStorage.getItem('contact')
      let inputField  = JSON.parse(contact);
      styles(inputField)
    }
    }
    document.addEventListener("click", handleErrorClose, true);
    return () => document.removeEventListener("click", handleErrorClose , true)
  },[])
  
const [addStyles,setAddStyles]=useState('')

function styles(item){
  let contact = JSON.stringify(item);
  localStorage.setItem("contact", contact);
  setAddStyles(item._id)
}

function navigateForward(){
  if(localStorage.getItem("contact")){
    router.push('/reports/additionalRequirements')
  }else{
    setErrorModal(true)
  }
}

const[errorModal, setErrorModal]= useState(false)

const[slideNumber, setSlideNumber] = useState(0);

//Initial left arrow wont exist when loads
const [isMoved, setIsMoved] = useState(false);

const handleClick = (direction) => {
  setIsMoved(true);

  let distance = listRef.current.getBoundingClientRect().x - 50;

  if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < address.length-1) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-710 + distance}px)`;
    }else{
      listRef.current.style.transform = 'translateX(0px)';
      setSlideNumber(0)
    }
};




  return (
    <>
    
    <div className='bg-specialbg  h-max relative'>
    <Head title='Order History' />
    <main className='py-8 ml-auto mr-auto w-[92%]'>
    <DashboardNav navTitle='Reports' />
    
    <DashBookingHeader active={1}/>

    {errorModal && <ErrorModal text='Please Select an Address Field' refState={closeErrorRef}/>}


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
<section className='mx-5 xlsm:mx-14 xlg:mx-28 py-10 ' >

<h6 className='text-[16px] tracking-[0.02em] font-semibold'>Saved Addresses</h6>

<main className='mt-2 flex items-start gap-7'>

<div className='flex items-center justify-center flex-col gap-3 cursor-pointer border-dashed border-[1px] border-gray-400 py-16 rounded-[14px] h-[230px] w-[236px]' onClick={addAddressTogg}>
<section className='flex items-center justify-center flex-col'>
<img className='' src='../images/dashboard/Plusblack.svg'/>
<h6 className='text-[20px] font-semibold'>Add Address</h6> 
</section>
</div>

<section className='bg-yellow-50 w-full relative overflow-hidden	' >
<img src='../images/Icons/sliderArrow.svg' className='absolute top-[50%] left-0 rotate-180 -translate-y-[50%] cursor-pointer z-10' style={{ display: !isMoved && "none" }} onClick={() => handleClick("left")}/>

<header ref={listRef} className='flex gap-7 translate-x-0	transition-all duration-1000	 w-max'>
{address  && address.map((item)=>{
  return <div key={item._id} className={`bg-white h-[230px]  px-6 py-6 relative w-[340px] rounded-[14px] border-solid border-[1px] cursor-pointer ${addStyles === item._id ? 'border-bookingblue' : 'border-bookingborder'}`} onClick={()=>styles(item)}>
  <div className=' flex flex-col justify-between gap-2 h-full'>
  <section className='flex flex-col gap-1'>
  <h6 className=' font-semibold text-[20px] '>{item.title.length > 10 ? `${item.title.substring(0, 10)}...` : item.title}</h6>
  <h6 className='  text-[20px]  leading-7 '>{  item.apartment_number.length > 6 ? `${item.apartment_number.substring(0, 6)}...` : item.apartment_number}  {item.street_name.length > 7 ? `${item.street_name.substring(0, 7)}...` : item.street_name} </h6>
  <h6 className='  text-[20px]  leading-7 '>{item.street_number.length > 12 ? `${item.street_number.substring(0, 12)}...` : item.street_number}</h6>
  <h6 className='  text-[20px]  leading-7 '>{item.city.length > 7 ? `${item.city.substring(0, 8)}...` : item.city} {item.postal_code.length > 6 ? `${item.postal_code.substring(0, 5)}...` : item.postal_code} </h6>
  </section>
  
  <div className='flex'><img className='pr-3' src='../images/dashboard/delete.svg' onClick={()=>deleteTogg(item._id,item.title)}/><img className='pr-3' src='../images/dashboard/edit.svg'  onClick={()=>editToggle(item._id,item.title,item.street_number,item.street_name,item.postal_code,item.city,item.apartment_number)}/></div>
  <img src='../images/booking/check.svg' className={`absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] select-none pointer-events-none  ${addStyles === item._id ? 'block' : 'hidden'}`}  />
</div>
</div>
})}
  </header>

  <img src='../images/Icons/sliderArrow.svg' className='absolute top-[50%] right-0 -translate-y-[50%] cursor-pointer ' onClick={() => handleClick("right")}/>
</section>

</main>

{/* ------------------------------------------------------------------------------------ */}
<div className='flex justify-between'>
  <Link href={{pathname:'/reports/booking'}}><button className='bg-ligrey rounded-[50px] px-9 py-[8px] text-black text-[18px] font-semibold mt-10' >Back</button></Link>
  <button className='bg-blue rounded-[50px] px-9 py-[8px] text-white text-[18px] font-semibold mt-10' onClick={navigateForward}>Next</button>
</div>



</section>

 




</section>










    </main>

{addAddressToggle && <section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] w-full h-full  z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden'>
<form className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-7 shadow-dashshadow' onSubmit={addressSubmit}>
<h6 className='text-[20px] font-semibold mb-2'>Add Address</h6>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Save as</h6>
<input style={{border:'1px solid #C8CACD'}} name='title'  value={title} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none '/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Name</h6>
<input style={{border:'1px solid #C8CACD'}} name='streetName'  value={streetName} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Number</h6>
<input style={{border:'1px solid #C8CACD'}} name='streetNumber' value={streetNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Apartment Number(optional)</h6>
<input style={{border:'1px solid #C8CACD'}}  name='apartmentNumber' value={apartmentNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>


<section className='flex gap-4 '>
<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>Postal Code</h6>
<input style={{border:'1px solid #C8CACD'}} name='postalCode' value={postalCode} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>City / Town</h6>
<input style={{border:'1px solid #C8CACD'}} name='city'  value={city}  onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>
</section>

<section className='flex justify-end gap-[10px] mt-[20px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={addAddressTogg}>CANCEL</button>
<input type='submit' className='bg-dashgreen p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' value='ADD' />
</section>

</form>

</section>}

{formToggle && <section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] w-full h-full  z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden'>
<form className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-7 shadow-dashshadow' onSubmit={editAddressSubmit}>
<h6 className='text-[20px] font-semibold mb-2'>Edit Address 1</h6>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Save as</h6>
<input style={{border:'1px solid #C8CACD'}} name='title'  value={title} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none '/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Name</h6>
<input style={{border:'1px solid #C8CACD'}} name='streetName'  value={streetName} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Street Number</h6>
<input style={{border:'1px solid #C8CACD'}}  name='streetNumber'  value={streetNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className=''>
<h6 className='text-[14px] mb-[6px]'>Apartment Number(optional)</h6>
<input style={{border:'1px solid #C8CACD'}}  name='apartmentNumber' value={apartmentNumber} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>


<section className='flex gap-4 '>
<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>Postal Code</h6>
<input style={{border:'1px solid #C8CACD'}} name='postalCode' value={postalCode} onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>

<div className='w-[50%]'>
<h6 className='text-[14px] mb-[6px]'>City / Town</h6>
<input style={{border:'1px solid #C8CACD'}} name='city' value={city}  onChange={formDetails} className='w-full rounded-[10px] px-4 py-3 outline-none'/>
</div>
</section>

<section className='flex justify-end gap-[10px] mt-[20px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={editToggle}>CANCEL</button>
<input type='submit' className='bg-hazyblue text-white p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' value='SAVE' />
</section>

</form>

</section>}



{deleteToggle && <section className='fixed top-[50%] left-[50%]  -translate-y-[50%] -translate-x-[50%] w-full h-full  z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden'>
<main className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-6 shadow-dashshadow '>
<h6 className='text-[20px] font-semibold'>Delete {modalTitle}?</h6>

<section className='flex justify-end gap-[10px] mt-[20px]'>
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' onClick={deleteTogg}>CANCEL</button>
<button className='p-[16px] rounded-lg font-medium text-white bg-dashlired text-[16px] cursor-pointer' onClick={deleteAddressSuccess}>DELETE</button>
</section>

</main>
</section>}


  </div>
  </>
    )
}

export default page
