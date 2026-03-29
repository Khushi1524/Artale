import React from 'react'
import { Typography } from '../atoms'

export const ImageCard = (gallerycardimg, className="") => {
  return (
    <div className={`flex gap-6 ${className}`}>
      <div className='max-w-130 max-h-75 rounded-4xl overflow-hidden'>
        <img className='object-cover w-full h-full' src={gallerycardimg.src}/>
      </div>
        <div className='p-3 max-w-120'>
          <Typography varient={"p"} className='text-start'>── VOLUME 1</Typography>
            <Typography varient={"h2"} className='text-center'>Abstract ART</Typography>
            <Typography varient={"p"} className='text-start'>"Art that expresses ideas beyond visual reality"</Typography>
               <Typography varient={""} className='text-start'>1,248</Typography>
                <Typography varient={"p"} className='text-start'>ARCHIVES</Typography>
                 <Typography varient={"p"} className='text-start'>EXPLORE COLLECTION →</Typography>
        </div>
    </div>
  )
}
