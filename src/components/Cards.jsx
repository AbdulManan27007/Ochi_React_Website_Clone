import React from 'react'

const cards = () => {
  return (
    <div className='h-screen w-full bg-zinc-900 flex gap-5 items-center px-32' >
        <div className='cardscontainer w-1/2 h-[50vh]'>
            <div className='card w-full relative rounded-xl h-full bg-[#004D43] items-center flex justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' rounded-full absolute px-5 py-1 border-2 left-10 bottom-10 border-[#CDEA68] text-[#CDEA68]'>&copy; 2019-2024</button> 
            </div>
        </div>
        <div className='cardscontainer h-[50vh] w-1/2 flex gap-5'>
        <div className='card relative rounded-xl w-1/2 flex items-center justify-center h-full bg-[#004D43] '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className=' rounded-full absolute px-5 py-1 border-2 left-10 bottom-10 border-zinc-200 font-semibold text-zinc-200 uppercase'>Rating 5.0 on clutch</button> 
        </div>
        <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#004D43] '>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className=' rounded-full absolute px-5 py-1 border-2 left-10 bottom-10 border-zinc-200 font-semibold text-zinc-200 uppercase'>Business bootcamp alumni</button> 
        </div>

        </div>
    </div>
  )
}

export default cards