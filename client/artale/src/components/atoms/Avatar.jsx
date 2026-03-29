import React from 'react'
import user from '../../assets/user.jpg'

export const Avatar = () => {
  return (
    <div className='flex items-center gap-2'>
        <img className='rounded-[50%] w-11 h-11 object-cover cursor-pointer' src={user} alt="" />
    </div>
  )
}