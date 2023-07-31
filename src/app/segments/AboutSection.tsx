import styled from "styled-components";
import SectionHeading from "@/components/SectionHeading";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {FullWidthDiv} from "@/components/styled-elements/base";
import {Text} from "@/components/styled-elements/text";
import SkillIcons from "@/app/segments/SkillIcons";
import Star from "@/static/star.svg"
import SmileBlock from "@/components/SmileBlock";
import {desktopOnly, mobileOnly, mq} from "@/util";
import InlineLink from "@/components/InlineLink";
import {useClickHandlers} from "@/app/segments/clickHandlers";

const AboutSection = ({...props}) => {
    const {scrollToProjectsSection, showResume} = useClickHandlers()

    return (
        <FullWidthDiv {...props}>
            <Section>
                <MainContent>
                    <SectionHeading title={"About"} symbol={<Star/>}/>
                    <Wrapper>
                        <Left>
                            <FlexColumn gap="80px">
                                <FlexColumn gap="32px">
                                    <Text $fontSize={["3rem", "3rem", "3.5rem"]} $fontWeight={500}
                                          $lineHeight={"125%"}>
                                        Humane design, effective execution.
                                    </Text>
                                    <Text $fontSize={["1.1rem", "1.25rem", "1.25rem"]} $fontWeight={300}
                                          $maxWidth="48ch">
                                        I believe in a world where the integration of technology does not damage our
                                        communities or humanity -- I&apos;m passionate about finding, executing, and
                                        demonstrating this path.
                                    </Text>
                                    <Text $fontSize={["1.1rem", "1.25rem", "1.25rem"]} $fontWeight={300}
                                          $maxWidth="48ch">
                                        I do this by working as a designer, as an engineer, as whatever is necessary,
                                        to infuse my <InlineLink onClick={scrollToProjectsSection}>projects</InlineLink>
                                        with compassion and purpose.
                                    </Text>
                                </FlexColumn>
                            </FlexColumn>

                            <FlexColumn gap="16px">
                                <Text $fontSize="1rem" $fontWeight={700} $color="rgb(var(--color-dark-core) / 0.5)"
                                      $isUppercase>
                                    Working with
                                </Text>
                                <SkillIcons/>
                            </FlexColumn>
                        </Left>
                        <Right>
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

  min-height: calc(100vh - 4.5rem); // - Section.yPaddingTop - Section.yPaddingBottom
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
