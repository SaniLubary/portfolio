import { Text } from "../../components/atoms/Text"
import { colors } from "../../components/enums"

const GlobantDescription = () => {
  return <>
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
      with <b>Typescript - React - Redux - Jest - Atomic Design - MUI - AG-Grid and much more</b>.
    </Text>
  </>
}

export default GlobantDescription