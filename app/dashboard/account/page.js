"use client"
import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import SubDashboardNav from '../../Components/subdashboardNav/page'
import { getDashboardAccountDetails , updateDashboardAccountDetails } from '@/redux/actions/page'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState} from 'react'

const page = () => {

  const { orders } = useSelector((state) => state.orders);
  // console.log(orders?.first_name,orders?.last_name)
  const dispatch= useDispatch()
  const[token,setToken]=useState(null)

  
  const [form, setForm] = useState({
    first_name: '',
    password:'',
    last_name:'',
  });
  const {first_name,last_name,password}=form

  const formDetails = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDashboardAccountDetails(form,token));
    setForm({first_name: "", last_name:'', password:''})
    }

  useEffect(()=>{
  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
    dispatch(getDashboardAccountDetails(loginData.token))
    setToken(loginData.token)
  }
},[])

  
  return (
    <div className='bg-specialbg  '>
    <Head title='Reports' />
    <main className=' pt-8 ml-auto mr-auto h-screen  w-[92%]  '>
     <DashboardNav />

<SubDashboardNav navTitle='Account' buttonshow={false}/>

<form onSubmit={formSubmit}>
<section className='flex gap-5 mt-8'>
  
  <div>
    <h6 className='mb-2 text-sm'>First Name</h6>
    <input type='text'  name='first_name' required  value={first_name} onChange={formDetails} className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  <div>
    <h6 className='mb-2 text-sm'>Last Name</h6>
    <input type='text'  name='last_name' required  value={last_name} onChange={formDetails} className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  <div>
    <h6 className='mb-2 text-sm'>Password</h6>
    <input type='password'  name='password' required  value={password} onChange={formDetails} className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  
</section>
<input type='submit'  className='px-[20px] py-[13px] bg-hazyblue text-white rounded-[23.5px] text-[16px] mt-8' value='Save Details'/>
  {/* <button className='px-[20px] py-[13px] bg-hazyblue text-white rounded-[23.5px] text-[16px] mt-8' onClick={()=>dispatch(updateDashboardAccountDetails(token))}>Save Details</button> */}
</form>




    </main>
    

    </div>
  )
}

export default page