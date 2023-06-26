import styled from "styled-components";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import StampButton from "@/components/StampButton";
import {smoothTransition} from "@/styles/transitions";
import {Subtitle, Text, Title} from "@/components/styled-elements/text";
import {DummyIcon, Line} from "@/components/styled-elements/artifacts";
import SectionHeading from "@/components/SectionHeading";

const LandingSection = () => {
    return (
        <div>
            <Section>
                <ContentWrapper>
                    <MainContent>
                        <FlexColumn gap="14px">
                            <Title>Opey Adeyemi</Title>
                            <Subtitle>Full-stack Engineer & Designer</Subtitle>
                        </FlexColumn>
                        <FlexColumn gap="64px">
                            <FlexColumn gap="14px">
                                <Text $fontSize="36px" $fontWeight={600}>
                                    Hello 👋
                                </Text>
                                <Text $maxWidth="44ch">
                                    I’m Opey, I like building things that matter with people who are
                                    curious like me. Purpose-driven software engineer, graphic/motion/UX designer, communicator.
                                </Text>
                            </FlexColumn>
                            <FlexColumn gap="12px">
                                <FlexRow gap="16px" wrap="wrap">
                                    {Array(10).fill(0).map((_, index) => {
                                        return <DummyIcon key={`skill-icon-${index}`} size={64}/>
                                    })}
                                </FlexRow>
                            </FlexColumn>
                        </FlexColumn>
                    </MainContent>
                    <StampStack>
                        <OverlapStampButton orientationOffset="-4deg" hoverColor="var(--color-orange)">
                            <Text $fontSize="24px" $fontWeight={600}>
                                Resume
                            </Text>
                        </OverlapStampButton>
                        <OverlapStampButton orientationOffset="6deg" hoverColor="var(--color-blue)" $alignSelf="flex-end">
                            <Text $fontSize="24px" $fontWeight={600}>
                                My Work
                            </Text>
                        </OverlapStampButton>
                        <OverlapStampButton orientationOffset="-1deg" hoverColor="var(--color-green)">
                            <Text $fontSize="24px" $fontWeight={600}>
                                Contact
                            </Text>
                        </OverlapStampButton>
                        {/*<div style={{*/}
                        {/*    height: "100%",*/}
                        {/*    borderRight: "3px dashed rgb(0 0 0 / 1)",*/}
                        {/*    margin: "-36px 0 36px 0",*/}
                        {/*}}/>*/}
                        {/*<div style={{*/}
                        {/*    opacity: 0.25,*/}
                        {/*}}>Wait, there's more</div>*/}
                    </StampStack>
                </ContentWrapper>
            </Section>
        </div>
    );
};

export default LandingSection;


const Section = styled.section`
  min-height: calc(100vh - 192px);
  margin: 96px 0;
`

const ContentWrapper = styled(FlexRow)`
  justify-content: space-between;
  min-height: inherit;
  gap: 48px;
`

const MainContent = styled(FlexColumn)`
  gap: 84px;
  flex: 2;
`

const OverlapStampButton = styled(StampButton)<{ $alignSelf?: string }>`
  align-self: ${({$alignSelf}) => $alignSelf ? $alignSelf : null};
  margin-top: -16px;
`

const StampStack = styled(FlexColumn)`
  ${smoothTransition};
  flex: 1;
  min-height: 100%;
  margin-top: 10%;
  gap: 0;
  align-items: center;

  &:hover {
    gap: 24px;
  }
`
