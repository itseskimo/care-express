"use client"
import queryString from 'query-string';
import { socialLogin } from '@/redux/actions/page'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';


const page = () => {

  const dispatch= useDispatch()
  const router = useRouter();

  useEffect(()=>{
    const urlParams = queryString.parse(window.location.search);

    if (urlParams.error) {
      console.log(`An error occurred: ${urlParams.error}`);
      // router.push('/login')
    } else {
      console.log(`The code is: ${urlParams.code}`);
      dispatch(socialLogin(urlParams.code,"google"))
      // router.push('/dashboard')

    }


  },[])


  return (
    <div>



    </div>
  )
}

export default page