import styled from "styled-components";
import SectionHeading from "@/components/SectionHeading";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import ProjectCard from "@/components/ProjectCard";
import {PROJECTS} from "@/data/projects";
import {FullWidthDiv} from "@/components/styled-elements/base";
import Star from "@/static/star.svg";
import {mq} from "@/util";

const ProjectSection = ({...props}) => {
    return (
        <FullWidthDiv {...props}>
            <Section>
                <FlexColumn gap="2rem">
                    <SectionHeading title={"Projects"} symbol={<Star/>}/>
                    <ProjectsContainer>
                        <FlexColumn gap="2rem" flex={1}>
                            {PROJECTS
                                .filter((_, index) => index % 2 === 0)
                                .map((project, index) => {
                                    return <ProjectCard {...project} key={`project-card-${index}`}/>
                                })}
                        </FlexColumn>
                        <FlexColumn gap="2rem" flex={1}>
                            {PROJECTS
                                .filter((_, index) => index % 2 !== 0)
                                .map((project, index) => {
                                    return <ProjectCard {...project} key={`project-card-${index}`}/>
                                })}
                        </FlexColumn>
                    </ProjectsContainer>
                </FlexColumn>
            </Section>
        </FullWidthDiv>
    );
};

export default ProjectSection;

const Section = styled.section`
  padding: 36px 0 36px 0;
`

const ProjectsContainer = styled(FlexRow)`
  gap: 32px;

  ${mq(undefined, "850px")} {
    flex-direction: column;
  }
`
