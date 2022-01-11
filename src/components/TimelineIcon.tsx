import React from 'react'

export default function TimelineIcon({text} : {text: string}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">{text}</div>
      </div>
      <div className="top-dotted-line h-36"></div>
    </div>
  )
}
