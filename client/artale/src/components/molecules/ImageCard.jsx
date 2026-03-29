import React from 'react'
import { Typography } from '../atoms'

export const ImageCard = (gallerycardimg) => {
  return (
    <div className='flex'>
      <div className='max-w-120 rounded-4xl max-h-100'>
        <img className='object-cover w-full h-full overflow-hidden' src={gallerycardimg.src}/>
      </div>
        <div className='bg-[#f5f5f545] backdrop-blur-[6px] p-3'>
            <Typography varient={"h3"} className='font-bold text-center'>Abstract ART</Typography>
            <Typography varient={"p"} className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, beatae?</Typography>
        </div>
    </div>
  )
}
