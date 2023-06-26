import styled from "styled-components";

type FlexOptionProps = { gap?: string, wrap?: string }
const FlexOption = styled.div<FlexOptionProps>`
  gap: ${(props: FlexOptionProps) => props.gap ? props.gap : null};
  flex-wrap: ${(props: FlexOptionProps) => props.wrap ? props.wrap : null};
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