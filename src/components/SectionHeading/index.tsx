import styled from "styled-components";
import {FlexRow} from "@/components/styled-elements/flex";
import {ReactNode} from "react";
import {Heading} from "@/components/styled-elements/text";
import {Line} from "@/components/styled-elements/artifacts";


type SectionHeadingProps = {
    title: string;
    symbol: ReactNode;
    id?: string;
}

const SectionHeading = ({title, symbol, id}: SectionHeadingProps) => {
    return (
        <Wrapper id={id}>
            <Heading>{title}</Heading>
            <Line/>
            {symbol}
        </Wrapper>
    );
};

export default SectionHeading;

const Wrapper = styled(FlexRow)`
  border: var(--width-standard) solid var(--color-dark);
  border-radius: var(--border-radius-standard);
  align-items: center;
  padding: 24px;
  gap: 16px;
  background-color: var(--color-light);
`
