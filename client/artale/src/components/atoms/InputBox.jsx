import React from 'react'

export const InputBox = (type, placeholder, onChange) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} onChange={onChange}  />
    </div>
  )
}
