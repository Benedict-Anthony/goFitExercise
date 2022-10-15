import React, { FormEvent, useEffect, useState } from 'react'
import { FaDumbbell, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import {AnimatePresence, motion} from "framer-motion"

const Exercises = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [exercises, setExercises] = useState<{
      bodyPart?:string
      equipment?:string
      gifUrl?:string
      id?:string
      name?:string
      target?:string
  }[]>([])
  
    const getExercises = async () => {
    const checkLocalstore = localStorage.getItem("exercises")
    if (checkLocalstore) {
      setExercises(JSON.parse(checkLocalstore))
    } else {
      const config = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '5446a9197cmshb6b26fe7b44b4c7p1e3a01jsn163ec0f90826',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      }
      try {
        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises`, config)
        const data = await response.json()
        console.log(data)
        localStorage.setItem("exercises", JSON.stringify(data))

        setExercises(data)

      } catch (error) {
        console.log(error)
      }
    }
  }
  
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!searchTerm) {
      alert("Field must not be empty!")
    } else {
      setExercises(exercises.filter((item) => {
        return item.bodyPart?.includes(searchTerm) || item.equipment?.includes(searchTerm) || item.name?.includes(searchTerm)
      }))
    }
  }
  useEffect(() => {
    getExercises()
   
  }, [])
  return (
 
    <>
    <header className="bg-gold w-full py-3 px-4 ">
        <nav className="container mx-auto flex flex-row justify-between items-center">
            <div className="logo flex justify-center z-10">
                <Link className="w-full text-md md:text-2xl text-white flex justify-center items-center z-10" to={"/"}>goFit <FaDumbbell className='text-orange ml-2 mt-2'/></Link>
            </div>
              
          <form className='w-3/5 md:w-80 relative' onSubmit={handleSubmit}>
            <input className='w-full py-2 md:py-3 px-2 rounded-md drop-shadow outline-0' type="text" placeholder='Search for exercise' onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'>
              <FaSearch className='absolute top-3 right-2 text-2xl text-orange' />
            </button>
          </form>
          
        
        </nav>  
    </header>
    <h2 className=" container md:pl-10 md:ml-10 text-xl text-black pt-2 pl-2">All you need is here!</h2>
    <section className='container mx-auto grid gap-4 px-2 mt-4'>
        {exercises.map((item) => (
        <AnimatePresence key={item.id} initial={true}>
            
          <motion.div className="bg-gold p-3 rounded-sm"
          key={item.id}
          animate={{ opacity: 1, }}
          initial={{ opacity: 0 }}
          exit={{opacity:0}}
         
        >
          <div className="w-full">
            <img className='w-full' src={item.gifUrl} alt="" />
          </div>

          <div className="">
            <h1 className='text-white text-sm py-2'>Name : <span className='text-xl'>{ item.name}</span></h1>
            <h3 className='text-white text-sm py-2'>body part : <span className='text-xl'>{item.bodyPart}</span> </h3>
            <h4 className='text-white text-xl py-2'>Equipements : <span> { item.equipment}</span> </h4>
          </div>
        </motion.div>
        </AnimatePresence>
      ))}
    </section>
      </>
  )
}

export default Exercises