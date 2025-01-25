import styled from 'styled-components';
import SectionHeading from '@/components/SectionHeading';
import { FlexColumn, FlexRow } from '@/components/styled-elements/flex';
import { PROJECTS } from '@/data/projects';
import { FullWidthDiv } from '@/components/styled-elements/base';
import Star from '@/static/star.svg';
import { mq } from '@/util';
import ProjectRow from '@/components/ProjectRow';

const ProjectSection = ({ ...props }) => {
    const displayedProjects = PROJECTS.filter((project) => !project?.hidden);

    return (
        <FullWidthDiv {...props}>
            <Section>
                <FlexColumn gap={['0', '0', '1rem']}>
                    <SectionHeading title={'Projects'} symbol={<Star />} />
                    <FlexColumn>
                        {displayedProjects.map((project, index) => {
                            return (
                                <ProjectRow
                                    key={`project-row-${index}`}
                                    {...project}
                                />
                            );
                        })}
                    </FlexColumn>
                </FlexColumn>
            </Section>
        </FullWidthDiv>
    );
};

export default ProjectSection;

const Section = styled.section`
    padding: 2.25rem 0;
`;

const ProjectsContainer = styled(FlexRow)`
    gap: 2rem;

    ${mq(undefined, '850px')} {
        flex-direction: column;
    }
`;
