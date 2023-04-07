"use client"
import React from 'react'
import DashboardNav from '../../Components/dashboardNav/page'
import Head from '../../head'
import SubDashboardNav from '../../Components/subdashboardNav/page'
import { getDashboardAccountDetails , updateDashboardAccountDetails,resetUpdatedUser } from '@/redux/actions/accountActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect,useState} from 'react'

const page = () => {

  const {getUser , updateUser}  = useSelector((state) => state.account);

  
  const dispatch= useDispatch()
  const[token,setToken]=useState(null)

  
  const [form, setForm] = useState({
    first_name:'' ,
    last_name:'',
    password:''
  });

  const {first_name,last_name,password}=form

  const formDetails = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const [accountSuccess,setAccountSucceess]=useState(false)

  const formSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    if(first_name !== '')  myForm.set("first_name", first_name);
    if(last_name !== '')   myForm.set("last_name", last_name);
    if(password !== '')    myForm.set("password", password);

    dispatch(updateDashboardAccountDetails(myForm,token));

    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);
    if(first_name !== '') loginData.first_name = first_name
    if(last_name !== '')  loginData.last_name = last_name

    
    let userData = JSON.stringify(loginData);
    localStorage.setItem("user", userData);
    }

 

  useEffect(()=>{
  if(localStorage.getItem('user')){
    let data = localStorage.getItem('user')
    let loginData = JSON.parse(data);

    setForm({first_name: loginData.first_name , last_name:loginData.last_name, password:''})

    dispatch(getDashboardAccountDetails(loginData.token))
    setToken(loginData.token)

    if(updateUser?.status === 'success'){
     setAccountSucceess(true)
    }
  }
},[token, updateUser])

setTimeout(() => {
 if(accountSuccess){
  dispatch(resetUpdatedUser()) 
  setAccountSucceess(false)
 }  
}, 2400);
  
  return (
    <div className='bg-specialbg  '>
    <Head title='Reports' />
    <main className=' pt-8 ml-auto mr-auto h-screen  w-[92%] relative '>
    <DashboardNav />

<SubDashboardNav navTitle='Account' buttonshow={false}/>

<form onSubmit={formSubmit}>
<section className='flex gap-5 mt-8'>
  
  <div>
    <h6 className='mb-2 text-sm'>First Name</h6>
    <input type='text'  name='first_name'   value={first_name} onChange={formDetails} className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  <div>
    <h6 className='mb-2 text-sm'>Last Name</h6>
    <input type='text'  name='last_name'   value={last_name} onChange={formDetails} className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  <div>
    <h6 className='mb-2 text-sm'>Password</h6>
    <input type='password'  name='password'   value={password} onChange={formDetails} className='px-3 py-[13px] outline-none rounded-[10px] text-[14px] w-[306px]'  style={{border:'1px solid #C8CACD'}} />
  </div>
  
</section>
<input type='submit'  className='px-[20px] py-[13px] bg-hazyblue cursor-pointer text-white rounded-[23.5px] text-[16px] mt-8' value='Save Details'/>
</form>

{accountSuccess && <div className='absolute bottom-9 right-0 '>
<section className='bg-dashgreen py-6 px-4 rounded-[17px] w-max text-[16px] animate-pulse'>Account saved successfully</section>
</div> }

    </main>
  

    </div>
  )
}

export default page