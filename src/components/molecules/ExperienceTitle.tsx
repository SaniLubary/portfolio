import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { Text } from "../atoms/Text";

function ExperienceTitle(): JSX.Element {
  const isTablet = useMediaQuery(device.tablet)

  return isTablet ? <>
    <Text size="medium" className="text-right">
      Where
    </Text>
    <Text size="medium" className="text-right">
      I've worked at
    </Text>
  </> : <Text size="medium" className="text-center w-1/2">Where I've worked at</Text>;
}

export default ExperienceTitle