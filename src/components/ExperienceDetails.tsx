import React from 'react'

interface IReferenceButtons {
  code: string,
  visit: string,
  rightSide: boolean
}

interface IExperienceDetails extends IReferenceButtons{
  detail: any, 
  imgs: any,
}

export default function ExperienceDetails({detail, imgs, code = '', visit = '', rightSide = false} : IExperienceDetails) {
  return (
    <div className={`${!rightSide? 'dissapearLeft':'dissapearRight'} flex flex-col`}>
      <div className={`w-8/12 ${rightSide && 'ml-auto text-right'}`}>
        {detail}
      </div>
      <div className='flex flex-row mt-3'>
        {imgs}
      </div>
      
      {(code || visit) && <ReferenceButtons rightSide={rightSide} code={code} visit={visit}  />}
      
    </div>
  )
}

function ReferenceButtons({rightSide = false, code, visit}: IReferenceButtons) {
  return (
    <div className={`mt-3 ${rightSide && 'ml-auto text-right'}`}>
      {code !== '' && 
        <a target="_blank" href={code} className='reference-buttons'>
          {'<'}Code {'/>'}
        </a>}
        
      {visit !== '' &&
        <a target="_blank" href={visit} className={`reference-buttons ${code !== '' && 'ml-3'}`}>Visit Site</a>
      }
    </div>
  )
}
