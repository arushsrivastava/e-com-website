import React from 'react'
import BasicCard from '../../components/Product/Card'

const ActivitySection = () => {
  return (
    <div className='flex flex-row flex-wrap gap-y-2 gap-x-2 bg-gray-200 py-3 px-4 lg:justify-between justify-center'>
        <BasicCard 
            title= "Deals inspired by your recent history"
        />
        <BasicCard 
            title= "Deals related to your views"
        />
        <BasicCard 
            title= "4+ star deals for you"
        />
        <BasicCard 
            title= "Continue shopping deals"
        />
        
    </div>
  )
}

export default ActivitySection