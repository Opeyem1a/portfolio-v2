import styled from "styled-components";
import SectionHeading from "@/components/SectionHeading";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {FullWidthDiv} from "@/components/styled-elements/base";
import {Text} from "@/components/styled-elements/text";
import StampButton from "@/components/StampButton";
import {smoothTransition} from "@/styles/transitions";
import {useClickHandlers} from "@/app/segments/clickHandlers";
import SkillIcons from "@/app/segments/SkillIcons";
import Star from "@/static/star.svg"
import SmileBlock from "@/components/SmileBlock";
import Button from "@/components/Button";
import {desktopOnly, mobileOnly, mq} from "@/util";
import BlockGrid from "@/components/BlockGrid";

const AboutSection = ({...props}) => {
    const {scrollToProjectsSection, showResume, showEmail} = useClickHandlers()

    return (
        <FullWidthDiv {...props}>
            <Section>
                <MainContent>
                    <SectionHeading title={"About"} symbol={<Star/>}/>
                    <Wrapper>
                        <Left>
                            <FlexColumn gap="80px">
                                <FlexColumn gap="32px">
                                    <Text $fontSize={["2.75rem", "2.75rem", "3.5rem"]} $fontWeight={700}
                                          $lineHeight={"125%"}>
                                        Designing code & architecting design
                                    </Text>
                                    <Text $fontSize={["1.1rem", "1.25rem", "1.25rem"]} $maxWidth="48ch">
                                        I want to tackle novel problems with people who are curious like me.
                                        My experience as a designer fuels my advantage as an engineer and vice-versa.
                                        You{"'"}ll find me consistently looking at the bigger picture to ensure
                                        solutions are holistic.
                                    </Text>
                                </FlexColumn>
                                <ButtonRow>
                                    <Button onClick={showResume}>
                                        <Text $fontSize={["1rem", "1rem", "1.25rem"]} $fontWeight={600}>
                                            Resume {">"}
                                        </Text>
                                    </Button>
                                    <Button onClick={showEmail} $variant="secondary">
                                        <Text $fontSize={["1rem", "1rem", "1.25rem"]} $fontWeight={600}>
                                            Say hi {">"}
                                        </Text>
                                    </Button>
                                </ButtonRow>
                            </FlexColumn>

                            <FlexColumn gap="16px">
                                <Text $fontSize="1rem" $fontWeight={700} $isUppercase>Working with</Text>
                                <SkillIcons/>
                            </FlexColumn>
                        </Left>
                        <Right>
                            {/*<BlockGrid />*/}
                            <SmileBlock/>
                        </Right>
                    </Wrapper>
                </MainContent>
            </Section>
        </FullWidthDiv>
    );
};

export default AboutSection;

const MainContent = styled(FlexColumn)`
  gap: 2.25rem;

  ${mobileOnly} {
    gap: 1.5rem;
  }

  min-height: calc(100vh - 36px - 80px); // - Section.yPaddingTop - Section.yPaddingBottom
`

const ButtonRow = styled(FlexRow)`
  gap: 1.5rem;
`

const Wrapper = styled(FlexRow)`
  gap: 2.5rem;
  flex-grow: 1;

  ${desktopOnly} {
    gap: 5.25rem;
  }
`

const Section = styled.section`
  padding: 2.25rem 0;
  min-height: 100vh;
`

const Left = styled(FlexColumn)`
  gap: 2rem;
  width: 100%;
  justify-content: space-between;
`

const Right = styled(FlexColumn)`
  gap: 2rem;
  width: 100%;

  ${mq(undefined, "400px")} {
    display: none;
  }
`

const OverlapStampButton = styled(StampButton)<{ $alignSelf?: string, $marginRight?: string }>`
  align-self: ${({$alignSelf}) => $alignSelf ? $alignSelf : null};
  margin-right: ${({$marginRight}) => $marginRight ? $marginRight : null};
  margin-top: -5%;
`

const StampStack = styled(FlexColumn)`
  width: 100%;
  flex: 1;
  min-height: 100%;
  margin-top: 5%;
  gap: 0;
  align-items: center;
`
