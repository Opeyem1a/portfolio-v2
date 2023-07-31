import React from 'react';
import {Project} from "@/data/projects";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {Text} from "@/components/styled-elements/text";
import styled from "styled-components";
import Link from "next/link";
import {_hoverUnderlineStyles, smoothTargetTransition} from "@/styles/transitions";
import Pill, {PillWrapper} from "@/components/Pill";
import {desktopOnly, mobileOnly, notDesktop} from "@/util";
import {InlineCornerArrow} from "@/components/styled-elements/artifacts";

type ProjectRowProps = Project

const ProjectRow = ({title, subtitle, description, skills, links, category}: ProjectRowProps) => {
        return (
            <ProjectRowWrapper>
                <TitleBlockWrapper>
                    <ProjectTitle $isHeading>{title}</ProjectTitle>
                    <Subtitle>{subtitle}</Subtitle>
                </TitleBlockWrapper>
                <ContentBlockWrapper>
                    <OverviewBlockWrapper>
                        <CategoryText>{category}</CategoryText>
                        <FlexColumn gap={["0.5rem", "0.25rem", "0.25rem"]} data-hover-none>
                            {links?.map((link, index) => {
                                return (
                                    <Text key={`link-${index}`} $fontSize="1rem">
                                        <StyledLink href={link.link} target="_blank">
                                            {link.title}&nbsp;&nbsp;<InlineCornerArrow $height="0.75em"/>
                                        </StyledLink>
                                    </Text>
                                )
                            })}
                        </FlexColumn>
                    </OverviewBlockWrapper>
                    <DetailsBlockWrapper>
                        <Text $fontSize="1rem" $maxWidth="45ch">{description}</Text>
                        {skills && <SkillPillWrapper>
                            {skills.map((skill, index) => {
                                return <Pill key={`skill-${index}`}>
                                    <Text $fontSize="0.75rem">
                                        {skill}
                                    </Text>
                                </Pill>
                            })}
                        </SkillPillWrapper>}
                    </DetailsBlockWrapper>
                </ContentBlockWrapper>
            </ProjectRowWrapper>
        );
    }
;

export default ProjectRow;

const ProjectRowWrapper = styled(FlexRow)`
  ${smoothTargetTransition("border-bottom-color")}
  padding: 4rem 0.5rem;
  border-bottom: 1px solid rgb(var(--color-dark-core) / 0.1);
  gap: 1rem;

  &:hover {
    border-bottom-color: rgb(var(--color-dark-core) / 1);
    background: -webkit-radial-gradient(bottom left, rgb(var(--color-dark-core) / 0.01) 0%, rgb(var(--color-dark-core) / 0) 100%);
    background: radial-gradient(at bottom left, rgb(var(--color-dark-core) / 0.01) 0%, rgb(var(--color-dark-core) / 0) 100%);
  }

  ${notDesktop} {
    flex-direction: column;
  }

  ${mobileOnly} {
    padding: 2.5rem 0.5rem;
  }
`

const CategoryText = styled(Text)`
  font-size: 1.25rem;

  ${mobileOnly} {
    display: none;
  }
`

const TitleBlockWrapper = styled(FlexColumn)`
  flex: 1;
  justify-content: space-between;
  gap: 1.5rem;

  ${notDesktop} {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
`

const ProjectTitle = styled(Text)`
  font-size: 4rem;

  ${mobileOnly} {
    font-size: 3rem;
  }

  ${desktopOnly} {
    max-width: 10ch;
  }
`

const Subtitle = styled(Text)`
  font-size: 1rem;
  opacity: 0.5;
`

const ContentBlockWrapper = styled(FlexRow)`
  flex: 1;
  gap: 2.25rem;
  padding-top: 1rem;

  ${mobileOnly} {
    flex-direction: column;
  }
`

const OverviewBlockWrapper = styled(FlexColumn)`
  flex: 1;
  justify-content: space-between;
  gap: 2rem;
`

const DetailsBlockWrapper = styled(FlexColumn)`
  flex: 1;
  justify-content: space-between;
  gap: 2rem;
`

const SkillPillWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 45ch;

  ${PillWrapper} {
    background-color: rgb(var(--color-dark-core) / 0.1);
    color: var(--color-dark);
  }
`

const StyledLink = styled(Link)`
  ${smoothTargetTransition("color")};
  ${_hoverUnderlineStyles("var(--color-dark)")};
  color: var(--color-primary);
  text-transform: uppercase;

  @media (prefers-color-scheme: light) {
    color: var(--color-dark);
    ${_hoverUnderlineStyles("var(--color-primary)")};
  }
`
