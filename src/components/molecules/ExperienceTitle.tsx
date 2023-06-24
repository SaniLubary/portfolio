import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { Text } from "../atoms/Text";

function ExperienceTitle(): JSX.Element {
  const isLaptop = useMediaQuery(device.laptop)

  return isLaptop ? <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Text size="medium" className="text-right">
      Where
    </Text>
    <Text size="medium" className="text-right">
      I've worked at
    </Text>
  </div> : <Text size="medium" className="text-center w-1/2">Where I've worked at</Text>;
}

export default ExperienceTitle