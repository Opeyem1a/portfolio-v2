import {ReactNode} from "react";
import {FlexRow} from "@/components/styled-elements/flex";
import styled from "styled-components";
import {smoothTargetTransition} from "@/styles/transitions";

type PillProps = {
    children: ReactNode;
}

const Pill = ({children}: PillProps) => {
    return (
        <PillWrapper>
            {children}
        </PillWrapper>
    );
};

export default Pill;

export const PillWrapper = styled(FlexRow)`
  ${smoothTargetTransition("background-color, color")};
  gap: 8px;
  padding: 6px 12px;
  border-radius: 16px;
  background-color: var(--color-dark);
  color: var(--color-light);
`