import React from 'react'
import Exercise from '../components/Exercise'

type equipements = {
    equipements: {
        bodyPart?:string
        equipment?:string
        gifUrl?:string
        id?:string
        name?:string
        target?:string
    }[]
}
const Equipements = ({equipements}:equipements) => {
  return (

       <section className='container mx-auto grid gap-4  mt-4 px-2'>
        {equipements && equipements.map((item) => (
          <Exercise item={item} key={item.id} />
        ))}
      </section>
   
  )
}

export default Equipements