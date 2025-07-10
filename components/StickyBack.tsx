"use client";
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const StickyBack = ({type,title}:{type:'post'|'profile',title?:string}) => {
  const router=useRouter()
    return (
    <div className='flex gap-4 text-white shadow-md px-6 py-5 border-b sticky top-0 bg-black/50 backdrop-blur-xl z-[20]'>
        <button onClick={()=>router.back()}><ArrowLeft/></button>
        <span className='capitalize font-bold'>{type==='post'?'Post':title}</span>
    </div>
  )
}

export default StickyBack