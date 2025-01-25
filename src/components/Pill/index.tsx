import { ReactNode } from 'react';
import { FlexRow } from '@/components/styled-elements/flex';
import styled from 'styled-components';
import { smoothTargetTransition } from '@/styles/transitions';

type PillProps = {
    children: ReactNode;
};

const Pill = ({ children }: PillProps) => {
    return <PillWrapper>{children}</PillWrapper>;
};

export default Pill;

export const PillWrapper = styled(FlexRow)`
    ${smoothTargetTransition('background-color, color')};
    gap: 0.5rem;
    padding: 0.375rem 0.75rem;
    border-radius: 1rem;
    background-color: var(--color-dark);
    color: var(--color-light);
`;
