import React, { useState,useEffect, useRef  } from 'react'


export default function outsideAlert(selectState, dropdownState){

    let dropRef = useRef(null)
    let selRef = useRef(null)

    const[select,setSelect]=useState(selectState)
    const[loginDropdown,setLoginDropdown]=useState(dropdownState)

    function handleClickOutside(event) {
      if ( dropRef.current && !dropRef.current.contains(event.target)) {
      setLoginDropdown(false)
      }else{
      setLoginDropdown(true)
      }

      if ( selRef && selRef.current && !selRef.current.contains(event.target)) {
       setSelect(false)
      }else{
      setSelect(true)
      }
    }

    useEffect(() => {


      document.addEventListener("click", handleClickOutside, true);
      return () => {document.removeEventListener("click", handleClickOutside , true) };
    }, [dropRef, selRef])
  
    return {loginDropdown ,setLoginDropdown , select ,setSelect , dropRef , selRef}
   }
  


   export  function accOutsideAlert(accountState){

    let accRef = useRef(null)

    const[account,setAccount]=useState(accountState)


    function handleOutside(event) {
      if ( accRef.current && !accRef.current.contains(event.target)) {
      setAccount(false)
      }else{
      setAccount(true)
      }
    }

    useEffect(() => {
      document.addEventListener("click", handleOutside, true);
      return () => {document.removeEventListener("click", handleOutside , true) };
    }, [accRef])
  
    return {account , setAccount , accRef}
   }
