import styled from "styled-components";
import SectionHeading from "@/components/SectionHeading";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import ProjectCard from "@/components/ProjectCard";
import {DummyIcon} from "@/components/styled-elements/artifacts";
import {PROJECTS} from "@/data/projects";

const ProjectSection = () => {
    return (
        <div>
            <Section>
                <FlexColumn gap="32px">
                    <SectionHeading title={"Projects"} symbol={<DummyIcon size={48}/>}/>
                    <FlexRow gap="32px">
                        <FlexColumn gap="32px">
                            {PROJECTS
                                .filter((_, index) => index % 2 === 0)
                                .map((project, index) => {
                                    return <ProjectCard {...project} key={`project-card-${index}`} />
                            })}
                        </FlexColumn>
                        <FlexColumn gap="32px">
                            {PROJECTS
                                .filter((_, index) => index % 2 !== 0)
                                .map((project, index) => {
                                    return <ProjectCard {...project} key={`project-card-${index}`} />
                                })}
                        </FlexColumn>
                    </FlexRow>
                </FlexColumn>
            </Section>
        </div>
    );
};

export default ProjectSection;

const Section = styled.section`
  //min-height: 100vh;
`
