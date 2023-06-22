import { Text } from "../../components/atoms/Text"
import { colors } from "../../components/enums"

const AndesDescription = () => {
  return <>
    <Text size="medium" className="font-extrabold text-2xl">Andes</Text>
    <Text size="small">
      I've worked in the main <b style={{ color: colors.orange }}>ANDES App</b> as a Web UI Dev with <b>Angular - Typescript - Rxjs - MongoDB</b>.
    </Text>
  </>
}

export default AndesDescription