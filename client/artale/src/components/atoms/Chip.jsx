import React from 'react'

export const Chip = ({children}) => {
  return (
    <li className={`py-1 px-3.5 rounded-[5px] shadow-[0_0px_5px_rgba(0,0,0,0.2)] cursor-pointer bg-white border-2 border-[#a1d8b2] hover:bg-[#a1d8b275]`}>{children}</li> 
  )
}
