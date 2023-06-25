import React, { Suspense } from "react";
import Mountains from "../atoms/Mountains";

interface IInfoWithMountains {
  flip?: boolean;
  children: React.ReactElement;
}

const InfoWithMountains = ({ children, flip = false }: IInfoWithMountains) => {
  return <div className='animate--appear'
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gridTemplateRows: 'repeat(8, minmax(0, 1fr))'
    }}>
    <Suspense fallback={null}>
      <div className={`dissapearCenter fixed -bottom-24 ${flip ? ' left-0 -scale-x-100 ' : 'right-0'}`}>
        <Mountains />
      </div>
    </Suspense>

    {children}
  </div >;
};

export default InfoWithMountains