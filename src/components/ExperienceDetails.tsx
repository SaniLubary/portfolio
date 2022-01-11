import React from 'react'

interface IReferenceButtons {
  code: string,
  visit: string,
  toRight: boolean
}

interface IExperienceDetails extends IReferenceButtons{
  detail: any, 
  imgs: any,
}

export default function ExperienceDetails({detail, imgs, code = '', visit = '', toRight = false} : IExperienceDetails) {
  return (
    <div className='flex flex-col'>
      <div className={`w-8/12 ${toRight && 'ml-auto text-right'}`}>
        {detail}
      </div>
      <div className='flex flex-row mt-3'>
        {imgs}
      </div>
      
      {(code || visit) && <ReferenceButtons toRight={toRight} code={code} visit={visit}  />}
      
    </div>
  )
}

function ReferenceButtons({toRight = false, code, visit}: IReferenceButtons) {
  return (
    <div className={`mt-3 ${toRight && 'ml-auto text-right'}`}>
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
