import styled from "styled-components";
import SectionHeading from "@/components/SectionHeading";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {PROJECTS} from "@/data/projects";
import {FullWidthDiv} from "@/components/styled-elements/base";
import Star from "@/static/star.svg";
import {mq} from "@/util";
import ProjectRow from "@/components/ProjectRow";
import {FLAG_NEW_PROJECT_ROWS, isActive} from "@/data/flags";
import ProjectCard from "@/components/ProjectCard";

const ProjectSection = ({...props}) => {
    const displayedProjects = PROJECTS.filter(project => !project?.hidden)

    return (
        <FullWidthDiv {...props}>
            <Section>
                <FlexColumn gap="2rem">
                    <SectionHeading title={"Projects"} symbol={<Star/>}/>
                    {isActive(FLAG_NEW_PROJECT_ROWS) ? (
                        <FlexColumn>
                            {displayedProjects
                                .map((project, index) => {
                                    return <ProjectRow key={`project-row-${index}`} {...project} />
                                })}
                        </FlexColumn>
                    ) : (
                        <ProjectsContainer>
                            <FlexColumn gap="2rem" flex={1}>
                                {displayedProjects
                                    .filter((_, index) => index % 2 === 0)
                                    .map((project, index) => {
                                        return <ProjectCard {...project} key={`project-card-a-${index}`}/>
                                    })}
                            </FlexColumn>
                            <FlexColumn gap="2rem" flex={1}>
                                {displayedProjects
                                    .filter((_, index) => index % 2 !== 0)
                                    .map((project, index) => {
                                        return <ProjectCard {...project} key={`project-card-b-${index}`}/>
                                    })}
                            </FlexColumn>
                        </ProjectsContainer>
                    )
                    }
                </FlexColumn>
            </Section>
        </FullWidthDiv>
    );
};

export default ProjectSection;

const Section = styled.section`
  padding: 2.25rem 0;
`

const ProjectsContainer = styled(FlexRow)`
  gap: 2rem;

  ${mq(undefined, "850px")} {
    flex-direction: column;
  }
`
