import styled from "styled-components";

const DummyIcon = styled.div<{size: number}>`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  background-color: white;
  border: var(--width-standard) solid var(--color-dark);
  border-radius: ${props => `${props.size / 2}px`};
  flex-shrink: 0;
`

const Line = styled.div`
  height: var(--width-standard);
  background-color: var(--color-dark);
  width: 100%;
  border-radius: var(--width-standard);
`

export {
    DummyIcon,
    Line,
}