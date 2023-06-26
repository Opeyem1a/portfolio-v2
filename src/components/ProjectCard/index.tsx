import styled from "styled-components";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import {Text} from "@/components/styled-elements/text";
import {smoothTransition} from "@/styles/transitions";
import Pill, {PillWrapper} from "@/components/Pill";
import {Project} from "@/data/projects";

type ProjectCardProps = Project

const ProjectCard = ({title, subtitle, description, skills, isCreative}: ProjectCardProps) => {
    return (
        <CardWrapper>
            <CardHeader>
                <Text $fontSize="36px" $fontWeight={600} $isHeading>{title}</Text>
                <Text $fontSize="16px" style={{opacity: 0.5}}>{subtitle}</Text>
            </CardHeader>
            <CardContent>
                {description.map((text, index) => {
                    return <Text key={`description-copy-${index}`}>{text}</Text>
                })}
            </CardContent>
            <CardFooter>
                {skills && skills.map((skill, index) => {
                    return <Pill key={`skill-${index}`}>{skill}</Pill>
                })}
            </CardFooter>
        </CardWrapper>
    );
};

export default ProjectCard;

const CardWrapper = styled(FlexColumn)`
  ${smoothTransition};
  border: var(--width-standard) solid var(--color-dark);
  border-radius: var(--border-radius-standard);
  background-color: var(--color-light);
  padding: 36px;
  gap: 36px;
  width: 100%;

  &:hover {
    background-color: #FFB36C;
    cursor: pointer;

    ${PillWrapper} {
      background-color: var(--color-light);
    }
  }
`

const CardHeader = styled(FlexColumn)`
    
`

const CardContent = styled(FlexColumn)`
  gap: 8px;
`

const CardFooter = styled(FlexRow)`
  flex-wrap: wrap;
  gap: 16px;
`