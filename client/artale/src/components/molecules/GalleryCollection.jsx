import React from 'react'
import { GalleryCard } from '../atoms/GalleryCard'
import MMimg1 from '../../assets/MMimg1.jpg'
import MMimg2 from '../../assets/MMimg2.jpg'

export const GalleryCollection = () => {
  return (
    <div className='grid grid-cols-2 gap-16'>
        <GalleryCard src={MMimg1} />
        <GalleryCard src={MMimg2}/>
    </div>
  )
}
