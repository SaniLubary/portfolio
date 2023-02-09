import React, { Suspense } from "react";
import { TopSection } from "../atoms/TopSection";
import Mountains from "../atoms/Mountains";

interface IInfoWithMountains {
  flip?: boolean;
  children: React.ReactElement;
}

const InfoWithMountains = ({ children, flip = false }: IInfoWithMountains) => {
  return <TopSection>
    <Suspense fallback={null}>
      <div className={`dissapearCenter absolute ${flip ? ' left-24 -scale-x-100 ' : 'right-24'}`}>
        <Mountains />
      </div>
    </Suspense>

    {children}
  </TopSection>;
};

export default InfoWithMountains