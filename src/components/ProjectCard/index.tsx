import styled from "styled-components";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {Text} from "@/components/styled-elements/text";
import {hoverUnderlineStyles, smoothTargetTransition} from "@/styles/transitions";
import Pill, {PillWrapper} from "@/components/Pill";
import {Project} from "@/data/projects";
import Link from "next/link";
import {mobileOnly} from "@/util";

type ProjectCardProps = Project

const ProjectCard = ({title, subtitle, description, skills, contributions, link}: ProjectCardProps) => {
        const openProject = () => {
            window.open(link, "_blank")
        }

        return (
            <CardWrapper onClick={openProject} data-hoverable>
                <FlexColumn gap="1.25rem">
                    <CardHeader>
                        <Text $fontSize={["0.8rem", "0.8rem", "1rem"]} style={{opacity: 0.5}}>{subtitle}</Text>
                        <Text $fontSize={["1.75rem", "2rem", "2.25rem"]} $fontWeight={700}>{title}</Text>
                    </CardHeader>
                    <CardContent>
                        {description.map((text, index) => {
                            return <Text key={`description-copy-${index}`} $fontSize="1rem">{text}</Text>
                        })}
                        {contributions &&
                            <ContributionsWrapper>
                                <Text $fontSize="1rem" $fontWeight={700} $isUppercase>Key Contributions</Text>
                                <FlexColumn gap="4px">
                                    {contributions.map((contribution, index) => {
                                        return !!contribution?.link ? (
                                            <Text key={`contribution-${index}`} $fontSize="1rem">
                                                {"-> "}
                                                <StyledLink href={contribution.link} target="_blank">
                                                    {contribution.title}
                                                </StyledLink>
                                            </Text>
                                        ) : (
                                            <Text key={`contribution-${index}`} $fontSize="1rem">
                                                {"->"} {contribution.title}
                                            </Text>
                                        )
                                    })}
                                </FlexColumn>
                            </ContributionsWrapper>
                        }
                    </CardContent>
                </FlexColumn>
                <CardFooter>
                    {skills && skills.map((skill, index) => {
                        return <Pill key={`skill-${index}`}>
                            <Text $fontSize="0.875rem">
                                {skill}
                            </Text>
                        </Pill>
                    })}
                </CardFooter>
            </CardWrapper>
        );
    }
;

export default ProjectCard;

const StyledLink = styled(Link)`
  ${smoothTargetTransition("color")};
  ${hoverUnderlineStyles};
  color: var(--color-dark);
`

const ContributionsWrapper = styled(FlexColumn)`
  gap: 0.5rem;
`

const CardContent = styled(FlexColumn)`
  gap: 1.5rem;
`

const CardWrapper = styled(FlexColumn)`
  ${smoothTargetTransition("background-color, color")};
  border-radius: var(--border-radius-standard);
  background-color: rgb(var(--color-dark-core) / 0.05);
  color: var(--color-dark);
  padding: 2.25rem;
  gap: 2.25rem;
  width: 100%;

  ${PillWrapper} {
    background-color: var(--color-dark);
    color: var(--color-light);
  }

  &:hover {
    background-color: var(--color-primary);
    color: rgb(var(--base-color-not-black));
    cursor: pointer;

    ${StyledLink} {
      color: rgb(var(--base-color-not-black));
    }

    ${PillWrapper} {
      background-color: rgb(var(--base-color-not-black));
      color: rgb(var(--base-color-not-white));
    }
  }

  ${mobileOnly} {
    border-top: 1rem solid var(--color-dark);
    padding-top: 1.25rem;

    @media (prefers-color-scheme: dark) {
      border-top-color: var(--color-primary);
    }
  }
`

const CardHeader = styled(FlexColumn)`
  gap: 0.25rem;
`

const CardFooter = styled(FlexRow)`
  flex-wrap: wrap;
  gap: 0.5rem;
`