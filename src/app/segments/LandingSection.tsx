import styled from 'styled-components';
import { FlexColumn, FlexRow } from '@/components/styled-elements/flex';
import { Text, Title } from '@/components/styled-elements/text';
import { FullWidthDiv } from '@/components/styled-elements/base';
import Link from 'next/link';
import { smoothTargetTransition } from '@/styles/transitions';
import { mobileOnly } from '@/util';
import ActionRow from '@/components/ActionRow';

const LandingSection = ({ ...props }) => {
    return (
        <FullWidthDiv {...props}>
            <Section>
                <MainContent>
                    <TitleWrapper gap={['1rem', '2rem', '2rem']}>
                        <Text
                            $fontSize="clamp(0.6rem, 2vw, 1rem)"
                            $color="rgb(var(--color-dark-core) / 0.25)"
                        >
                            Designer & Developer
                        </Text>
                        <FlexColumn gap="0rem">
                            <TitleFragmentWrapper>
                                <StyledTitle>Opey</StyledTitle>
                                <Spacer data-hover-none />
                            </TitleFragmentWrapper>
                            <TitleFragmentWrapper>
                                <StyledTitle>Adeyemi</StyledTitle>
                            </TitleFragmentWrapper>
                        </FlexColumn>
                    </TitleWrapper>
                    <ActionRow />
                </MainContent>
            </Section>
        </FullWidthDiv>
    );
};

export default LandingSection;

const TitleFragmentWrapper = styled(FlexRow)`
    gap: clamp(0.5rem, 3vw, 0.75rem);
    align-items: baseline;
`;

const StyledTitle = styled(Title)`
    flex-shrink: 0;
    line-height: 95%;

    ${mobileOnly} {
        text-align: center;
    }
`;

const Spacer = styled.div`
    ${smoothTargetTransition('background-color')};
    display: inline-flex;
    border-radius: clamp(20px, 11vw, 6rem);
    width: 100%;
    height: clamp(20px, 11vw, 6rem);
    background-color: rgb(var(--color-dark-core) / 0.03);

    &:hover {
        background-color: var(--color-primary);
    }
`;

const Section = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MainContent = styled(FlexColumn)`
    gap: 6rem;
    margin-bottom: 7rem;
    align-items: center;

    @media (max-height: 500px) {
        margin-top: 2rem;
    }

    ${mobileOnly} {
        gap: 3rem;
    }
`;

const TitleWrapper = styled(FlexColumn)`
    align-items: center;
`;
