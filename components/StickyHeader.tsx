import { VerifiedIcon } from 'lucide-react'
import React from 'react'

const StickyHeader = ({title="Muniru Issah"}:{title?:string}) => {
  return (
    <div className='w-full sticky top-0 bg-black min-h-[7vh] shadow border-b py-4 px-8'>
        <span className='font-extrabold text-lg flex gap-2 items-center'>Muniru Issah <VerifiedIcon size={18} className='text-teal-500' /></span>
    </div>
  )
}

export default StickyHeader