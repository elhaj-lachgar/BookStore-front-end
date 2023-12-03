"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function LayoutHandler({children } : { children : React.ReactNode }) {
  
    const router = useRouter();

    useEffect(()=>{
        if (!window.localStorage.getItem('admin'))
          router.push('/');
    } , [])


  return (
    <div>
      {
        children
      }
    </div>
  )
}

export default LayoutHandler
