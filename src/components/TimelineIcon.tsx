import React from 'react'

export default function TimelineIcon({text, rightSide = false} : {text: string, rightSide: boolean}) {
  return (
    <div className={`${!rightSide? 'dissapearLeft':'dissapearRight'} poppins flex flex-col justify-center items-center`}>
      <div>
        <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">{text}</div>
      </div>
      <div className="top-dotted-line h-36"></div>
    </div>
  )
}
