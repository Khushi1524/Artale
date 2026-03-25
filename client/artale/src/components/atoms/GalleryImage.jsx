import React from 'react'

export const GalleryImage = (galleryimgsrc) => {
  return (
    <div className="page-break-inside-[void]" >
        <img  className="rounded-[20px] object-cover overflow-hidden w-full" src={galleryimgsrc.src}/>
    </div>
  )
}
