import styled from "styled-components";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {MaybeText, Text, Title} from "@/components/styled-elements/text";
import Button from "@/components/Button";
import {MaybeLine} from "@/components/styled-elements/artifacts";
import {FullWidthDiv} from "@/components/styled-elements/base";
import {useClickHandlers} from "@/app/segments/clickHandlers";
import Link from "next/link"
import LinkedInIcon from "@/static/icons/linkedin.svg"
import GithubIcon from "@/static/icons/github.svg"
import {GITHUB_LINK, LINKEDIN_LINK} from "@/data/links";
import {smoothTargetTransition} from "@/styles/transitions";
import {mobileOnly} from "@/util";
import EmailIcon from "@/static/email.svg"

const LandingSection = ({...props}) => {
    const {scrollToProjectsSection, showEmail} = useClickHandlers()

    return (
        <FullWidthDiv {...props}>
            <Section>
                <MainContent>
                    <TitleWrapper gap={["1rem", "1rem", "1.5rem"]}>
                        <Text $fontSize="clamp(0.75rem, 2vw, 1.5rem)">Opey Adeyemi</Text>
                        <StyledTitle>Designer & Developer</StyledTitle>
                    </TitleWrapper>
                    <ItemWrapper>
                        <ButtonWrapper>
                            <Button onClick={scrollToProjectsSection}>
                                <Text $fontSize={["1rem", "1rem", "1.25rem"]} $fontWeight={600}>
                                    See my work
                                </Text>
                            </Button>
                            <Button onClick={showEmail} $variant="secondary">
                                <MaybeText on={[false, true, true]} $fontSize={["1rem", "1rem", "1.25rem"]}
                                           $fontWeight={600}>
                                    Contact me
                                </MaybeText>
                                <MaybeEmailIcon/>
                            </Button>
                        </ButtonWrapper>
                        <MaybeLine on={[false, true, true]}/>
                        <ButtonWrapper>
                            <IconLink href={LINKEDIN_LINK} target="_blank">
                                <LinkedInIcon/>
                            </IconLink>
                            <IconLink href={GITHUB_LINK} target="_blank">
                                <GithubIcon/>
                            </IconLink>
                        </ButtonWrapper>
                    </ItemWrapper>
                </MainContent>
            </Section>
        </FullWidthDiv>
    );
};

export default LandingSection;


const IconLink = styled(Link)`
  svg {
    height: clamp(2.5rem, 5vw, 3.5rem);

    path, circle, rect {
      ${smoothTargetTransition("fill")};
      fill: var(--color-dark);
    }

    &:hover {
      path, circle, rect {
        fill: var(--color-primary);
      }
    }
  }
`

const StyledTitle = styled(Title)`
  max-width: 10ch;
  line-height: 100%;

  ${mobileOnly} {
    text-align: center;
  }
`

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ItemWrapper = styled(FlexRow)`
  align-items: center;
  gap: 1.5rem;

  ${mobileOnly} {
    flex-direction: column;
  }
`

const ButtonWrapper = styled(FlexRow)`
  align-items: center;
  gap: 1.5rem;
`

const MainContent = styled(FlexColumn)`
  gap: 6rem;
  margin-bottom: 1.5rem;

  ${mobileOnly} {
    gap: 3rem;
  }
`

const MaybeEmailIcon = styled(EmailIcon)`
  width: 1.5rem;
  height: 1.5rem;
  display: none;
  fill: var(--color-dark);

  ${mobileOnly} {
    display: initial;
  }
`

const TitleWrapper = styled(FlexColumn)`
  ${mobileOnly} {
    align-items: center;
  }
`