import {ReactNode} from "react";
import {FlexRow} from "@/components/styled-elements/flex";
import styled from "styled-components";
import {smoothTransition} from "@/styles/transitions";

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
  ${smoothTransition};
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #FFB36C;
`