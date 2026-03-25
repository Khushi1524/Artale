import React from 'react'
import user from '../../assets/user.jpg'

export const Profile = () => {
  return (
    <div className='flex items-center gap-2'>
        <img className='rounded-full w-11 h-11 object-cover cursor-pointer' src={user} alt="" />
    </div>
  )
}