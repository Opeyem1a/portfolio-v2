import React from 'react';
import styled from 'styled-components';
import { FlexRow } from '@/components/styled-elements/flex';
import { Text } from '@/components/styled-elements/text';
import { Line } from '@/components/styled-elements/artifacts';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLine />
            <TextContainer>
                <Text $fontSize="1rem">✨&nbsp;by Opey</Text>
                <Text $fontSize="0.6rem" style={{ opacity: 0.5 }}>
                    (naturally)
                </Text>
            </TextContainer>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled(FlexRow)`
    width: 100%;
    gap: 1rem;
    align-items: center;
    position: relative;
    bottom: 0;
    justify-content: flex-end;
    padding: 3rem 0;
`;

const FooterLine = styled(Line)`
    height: 1rem;
    background-color: rgb(var(--color-dark-core) / 0.05);
`;

const TextContainer = styled(FlexRow)`
    flex-shrink: 0;
    gap: 0.25rem;
    align-items: baseline;
`;
