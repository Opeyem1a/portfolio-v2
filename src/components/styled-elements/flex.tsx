import styled from "styled-components";
import {mqValue} from "@/util";

type FlexOptionProps = { gap?: string | string[], wrap?: string, width?: string, flex?: number }
const FlexOption = styled.div<FlexOptionProps>`
  ${(props: FlexOptionProps) => {
    return {
      ...mqValue("gap", props.gap, null),
    }
  }}
  flex: ${(props: FlexOptionProps) => props.flex ? props.flex : null};
  flex-wrap: ${(props: FlexOptionProps) => props.wrap ? props.wrap : null};
  width: ${(props: FlexOptionProps) => props.width ? props.width : null};
`

const FlexRow = styled(FlexOption)`
  display: flex;
`

const FlexColumn = styled(FlexOption)`
  display: flex;
  flex-direction: column;
`

export {
    FlexRow,
    FlexColumn,
}