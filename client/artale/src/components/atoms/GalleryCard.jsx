import React from 'react'

export const GalleryCard = (gallerycardimg) => {
  return (
    <div className='max-w-110 rounded-4xl relative overflow-hidden max-h-100'>
        <img className='object-cover w-full h-full' src={gallerycardimg.src}/>
        <div className='absolute top-[70%] bg-[#f5f5f545] backdrop-blur-[6px] p-3'>
            <h2 className='text-white font-bold text-3xl text-center'>Abstract ART</h2>
            <p className='text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, beatae?</p>
        </div>
    </div>
  )
}
