import styled from "styled-components";
import {Display} from "@/components/styled-elements/display";
import CornerArrow from "@/static/corner-arrow.svg";

const DummyIcon = styled.div<{size: number}>`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background-color: white;
  border-radius: ${props => `${props.size / 2}px`};
  flex-shrink: 0;
`

type LineProps = {
    $color?: string;
}
const Line = styled.div<LineProps>`
  height: var(--width-standard);
  background-color: ${(props: LineProps) => props.$color ?? "var(--color-dark)" };
  width: 100%;
  border-radius: var(--width-standard);
`

const InlineCornerArrow = styled(CornerArrow)<{$height: string}>`
  height: ${({$height}) => $height};

  * {
    fill: var(--color-dark);
    @media (prefers-color-scheme: light) {
      fill: var(--color-primary);
    }
  }
`

export {
    DummyIcon,
    Line,
    InlineCornerArrow,
}