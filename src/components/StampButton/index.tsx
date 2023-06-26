import {ReactNode} from "react";
import styled from "styled-components";
import {FlexRow} from "@/components/styled-elements/flex";
import {smoothTransition} from "@/styles/transitions";

type StampButtonProps = {
    children: ReactNode;
    orientationOffset?: string;
    hoverColor?: string
}

const StampButton = ({
     children,
     orientationOffset = "3deg",
     hoverColor = "var(--color-green)",
     ...props
 }: StampButtonProps) => {
    return (
        <StampWrapper rotateZ={orientationOffset!} hoverColor={hoverColor!} {...props}>
            {children}
        </StampWrapper>
    );
};

export default StampButton;

const StampWrapper = styled(FlexRow)<{ rotateZ: string, hoverColor: string }>`
  ${smoothTransition};
  transform: ${({rotateZ}) => `rotateZ(${rotateZ})`};
  width: fit-content;
  padding: 48px 100px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  border: var(--width-standard) dashed var(--color-dark);
  outline: var(--width-standard) solid var(--color-light);
  background-color: var(--color-light);

  &:hover {
    cursor: pointer;
    outline-color: ${({hoverColor}) => hoverColor};
    background-color: ${({hoverColor}) => hoverColor};
    transform: rotate(0deg);
  }
`
