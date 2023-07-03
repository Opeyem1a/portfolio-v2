import {HTMLProps, ReactNode} from "react";
import styled from "styled-components";
import {smoothTransition} from "@/styles/transitions";

type CustomStampButtonProps = {
    children: ReactNode;
    orientationOffset?: string;
    hoverColor?: string
}

type StampButtonProps = CustomStampButtonProps & HTMLProps<HTMLButtonElement>

const StampButton = ({
                         children,
                         orientationOffset = "3deg",
                         hoverColor = "var(--color-green)",
                         ...props
                     }: StampButtonProps) => {
    return (
        <StampWrapper rotateZ={orientationOffset!} hoverColor={hoverColor!} type="button" {...props}>
            {children}
        </StampWrapper>
    );
};

export default StampButton;

const StampWrapper = styled.button<{ rotateZ: string, hoverColor: string }>`
  all: unset;
  display: flex;
  transform: ${({rotateZ}) => `rotateZ(${rotateZ})`};
  width: fit-content;
  padding: 36px 64px;
  border-radius: var(--border-radius-standard);

  //width: 256px;
  //height: 256px;
  //border-radius: 128px;

  gap: 12px;
  align-items: center;
  justify-content: center;
  border: var(--width-standard) solid var(--color-dark);
  background-color: rgb(var(--color-dark-core) / 0.05);
  backdrop-filter: blur(8px);

  &:hover {
    cursor: pointer;
    background-color: var(--color-light);
    transform: rotate(0deg);
  }
`
