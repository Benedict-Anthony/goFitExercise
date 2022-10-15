import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';

type formProps = {
  data: any,
  
}
const Form = () => {
  const [searchTerms, setSearchTerm] = useState("")
 
  return (
      <form className='w-3/5 md:w-80 relative'>
          <input className='w-full py-2 md:py-3 px-2 rounded-md drop-shadow outline-0' type="text" placeholder='Search for exercise' />
          <button type='submit'>
            <FaSearch className='absolute top-3 right-2 text-2xl text-orange' />
          </button>
    </form>
  )
}

export default Form