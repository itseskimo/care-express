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
  
