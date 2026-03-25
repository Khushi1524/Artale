import React from 'react'
import { GalleryImage } from '../atoms'
import galleryimg1 from '../../assets/galleryimg1.jpg'
import galleryimg2 from '../../assets/galleryimg2.jpg'
import galleryimg3 from '../../assets/galleryimg3.jpg'
import galleryimg4 from '../../assets/galleryimg4.jpg'

export const GalleryImgCollection = () => {
  return (
    <div  className="columns-3 gap-4 p-5">
        <GalleryImage src={galleryimg1} />
        <GalleryImage src={galleryimg2} />
        <GalleryImage src={galleryimg3} />
        <GalleryImage src={galleryimg4} />
    </div>
  )
}
