import {FlexColumn} from "@/components/styled-elements/flex";
import styled from "styled-components";
import {smoothTransition} from "@/styles/transitions";

const GAUGE_COLORS = [
    "#8CDD8A",
    "#B092EF",
    "#FFB36C",
    "#75CDFF",
    "#FF7878",
]

type GaugeProps = {
    relativeValues: number[];
}

const Gauge = ({relativeValues}: GaugeProps) => {
    return (
        <BlockWrapper>
            {relativeValues.map((value, index) => {
                return <Block key={`gauge-block-${index}`} color={GAUGE_COLORS[index]} value={value}/>
            })}
        </BlockWrapper>
    );
};

export default Gauge;

const BlockWrapper = styled(FlexColumn)`
  width: 100%;
  height: 100%;
  border: var(--width-standard) solid var(--color-dark);
  border-radius: var(--border-radius-standard);
`

const Block = styled.div<{ color: string, value: number }>`
  ${smoothTransition};
  ${({value}) => `flex: ${value}`};
  ${({color}) => `background-color: ${color}`};

  &:not(:last-child) {
    border-bottom: var(--width-standard) solid var(--color-dark);
  }
`