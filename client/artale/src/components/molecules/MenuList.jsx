import React from 'react'
import { IconButton } from '../atoms'

export const MenuList = ({menuItems}) => {
  return (
    <div className='pt-7.5 pb-15'>
        {menuItems.map((renderList) =>{
           return <IconButton key={renderList.id} icon={renderList.icon} children={renderList.label}/>
        })}

    </div>
  )
}
