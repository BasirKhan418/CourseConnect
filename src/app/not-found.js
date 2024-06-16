import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'lucide-react'
const Nofound = () => {
  return (
    <div className='flex justify-center items-center h-[70vh] flex-col'>
      <div className='bg-gray-200 text-red-600 font-bold p-4 rounded text-4xl m-2 dark:bg-black'>
        404 - Page Not Found
      </div>
      
      <Button size="lg">
    Go Back To Home
</Button>
    </div>
  )
}

export default Nofound
