import React from 'react'
import { Heading, ThemeMode } from '../molecules'
import { Typography } from '../atoms'

export const Settings = () => {
  return (
    <div>
        <Heading headingTxt={"Settings"}  subheadingTxt={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure facilis aspernatur atque minus magni ducimus ratione, quasi eaque beatae. "}/>
        <ThemeMode/>
    </div>
  )
}
