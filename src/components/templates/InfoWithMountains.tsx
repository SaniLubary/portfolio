import React, { Suspense } from "react";
import MountainsSvg from "../../assets/project-images/mountains.svg";
import { TopSection } from "../atoms/TopSection";

interface IInfoWithMountains {
  flip?: boolean;
  children: React.ReactElement;
}

const InfoWithMountains = ({ children, flip = false }: IInfoWithMountains) => {
  return <TopSection>
    <Suspense fallback={null}>
      <img className={`dissapearCenter absolute ${flip ? ' left-24 -scale-x-100 ' : 'right-24'}`} src={MountainsSvg} alt="Mountains" />
    </Suspense>

    {children}
  </TopSection>;
};

export default InfoWithMountains