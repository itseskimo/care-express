"use client"
import queryString from 'query-string';
import { socialLogin } from '@/redux/actions/page'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation';


const page = () => {

  const dispatch= useDispatch()
  const router = useRouter();

  useEffect(()=>{
    const urlParams = queryString.parse(window.location.search);

    if (urlParams.error) {
      console.log(`An error occurred: ${urlParams.error}`);
    } else {
      console.log(`The code is: ${urlParams.code}`);
      dispatch(socialLogin(urlParams.code,"google"))
    }


  },[])


  return (
    <div>



    </div>
  )
}

export default page