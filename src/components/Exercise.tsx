import React from 'react'

const Exercise = (item:any) => {
  return (
    <div className="bg-gold p-3 rounded-sm">
          <div className="w-full">
            <img className='w-full' src={item.gifUrl} alt="" />
          </div>

          <div className="">
            <h1 className='text-white text-sm py-2'>Name : <span className='text-xl'>{ item.name}</span></h1>
            <h3 className='text-white text-sm py-2'>body part : <span className='text-xl'>{item.bodyPart}</span> </h3>
            <h4 className='text-white text-sml py-2'>Equipements : <span className='text-xl'> { item.equipment}</span> </h4>
          </div>
    </div>
  )
}

export default Exercise
