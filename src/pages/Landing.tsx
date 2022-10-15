import React from 'react'
import { Link } from 'react-router-dom'
import hero from "../assets/hero.jpg"
import Features from '../components/Features';
import features from "../data.json"

const Landing = () => {
    return (
      <main>
            
        <section className='flex justify-start items-center' style={{
            backgroundImage: `url(${hero})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight:"80vh"
            
        }}> 
            <div className='container mx-auto px-4'>
                <p className='max-w-xl text-md text-white md:text-xl md:font-semibold'>
                    Welcome to goFit, where  you get all kinds of free tutorials and and example to get started in your journey of getting your dream fitness! Take the goFit free tutorials and become fit in three months. Join and get started!!!
                    <br />
                    <Link className="py-2 px-4 mt-6 inline-block text-xl rounded-sm bg-gold " to={"/exercises"}>Get started</Link>
            </p> 
            </div>
            
            </section>
            
            <Features features={features}/>
    </main>
  )
}

export default Landing