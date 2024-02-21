import React from 'react'

const LandingPage = () => {
  return (
    <div className=' w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-44 px-20'> {["We Create", "Eye Opening" ,"presentations"].map ((item, index)=>{
            return ( <div className='masker'>
            <h1 className="uppercase text-[8vw] leading-[7vw] tracking-tighter font-semibold font-['Founders_Grotesk']">{item}</h1>
        </div>)
           
        })}
            
            

        </div>
    </div>
  )
}

export default LandingPage