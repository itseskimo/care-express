"use client"
import { useState } from 'react'

const page = ({isToggle}) => {

    const [form, setForm] = useState({
        title: "",
        streetName:'',
        streetNumber:'',
        apartmentNumber:'',
        postalCode:'',
        city:'',
      });

const [editToggle,setEditToggle]=useState(isToggle)

      const {title,streetName,streetNumber,apartmentNumber,postalCode,city}=form

      const formDetails = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const addressSubmit = (e) => {
        e.preventDefault();
        const myForm = new FormData();
        
        myForm.set("title", title);
        myForm.set("street_number", streetNumber);
        myForm.set("street_name", streetName);
        myForm.set("postal_code", postalCode);
        myForm.set("city", city);
        myForm.set("apartment_number", apartmentNumber);
        dispatch(register(myForm));
        // console.log(Object.fromEntries(myForm))
      };

  return (
    <>
<section className='sticky top-0 left-0  h-screen z-50 flex items-center justify-center   bg-dashoverlay overflow-hidden'>
<form className='flex flex-col gap-[22px]  rounded-[16px] h-max w-[564px] bg-soothingyellow p-7' onSubmit={addressSubmit}>
<h6 className='text-[20px] font-semibold mb-2'>Edit Address 1</h6>

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
<button className='p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' >CANCEL</button>
<input type='submit' className='bg-dashyellow p-[16px] rounded-lg font-medium text-[16px] cursor-pointer' value='SAVE' />
</section>

</form>

</section>
    </>
  )
}

export default page