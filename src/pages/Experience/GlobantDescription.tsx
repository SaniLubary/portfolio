import { Text } from "../../components/atoms/Text"
import { colors } from "../../components/enums"

const GlobantDescription = () => {
  return <>
    <Text size="medium" className="font-extrabold text-2xl">Globant</Text>
    <Text size="small">
      I've worked for accounts
      <b style={{ color: colors.orange }}>
        &nbsp; Earnest & Young
      </b>,
      <b style={{ color: colors.orange }}>
        &nbsp; Luminate &nbsp;
      </b>
      and
      <b style={{ color: colors.orange }}>
        &nbsp; Dropbox &nbsp;
      </b>
      as a Web UI Dev on Apps with <b>Typescript - React - Redux - Jest - Atomic Design - MUI - AG-Grid</b>.
    </Text>
  </>
}

export default GlobantDescription