import React from 'react';
import {FlexRow} from "@/components/styled-elements/flex";
import styled from "styled-components";
import {EMAIL, GITHUB_LINK, LINKEDIN_LINK} from "@/data/links";
import EmailIcon from "@/static/email.svg";
import LinkedInIcon from "@/static/icons/linkedin.svg";
import GithubIcon from "@/static/icons/github.svg";
import Link from "next/link";
import {smoothTargetTransition} from "@/styles/transitions";
import {Text} from "@/components/styled-elements/text";
import {mobileOnly} from "@/util";
import {useClickHandlers} from "@/app/segments/clickHandlers";

const ActionRow = () => {
    const {showResume} = useClickHandlers()
    return (
        <ActionRowWrapper data-hover-none>
            <ActionWrapper onClick={showResume}>
                <Text $fontSize="1rem" $fontWeight={300}>
                    Resume
                </Text>
            </ActionWrapper>
            <IconWrapper>
                <IconLink href={`mailto:${EMAIL}`} target="_blank">
                    <ActionWrapper>
                        <EmailIcon/>
                    </ActionWrapper>
                </IconLink>
                <IconLink href={LINKEDIN_LINK} target="_blank">
                    <ActionWrapper>
                        <LinkedInIcon/>
                    </ActionWrapper>
                </IconLink>
                <IconLink href={GITHUB_LINK} target="_blank">
                    <ActionWrapper>
                        <GithubIcon/>
                    </ActionWrapper>
                </IconLink>
            </IconWrapper>
        </ActionRowWrapper>
    );
};

export default ActionRow;

const ActionRowWrapper = styled(FlexRow)`
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: rgb(var(--color-dark-core) / 0.02);
  border-radius: 0.75rem;
  width: fit-content;
  position: absolute;
  bottom: 5rem;

  ${mobileOnly} {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;
  }
`

const IconWrapper = styled(FlexRow)`
  gap: 0.75rem;
`

const ActionWrapper = styled(FlexRow)`
  gap: 0.75rem;
  padding: 0.9rem 1.2rem;
  align-items: center;
  justify-content: center;
  background-color: var(--color-light);
  border-radius: 0.25rem;
  ${smoothTargetTransition("background-color, color")};

  ${mobileOnly} {
    gap: 0.25rem;
    padding: 0.6rem 0.9rem;
  }

  &:hover {
    background-color: var(--color-primary);
    color: rgb(var(--base-color-not-black));
    cursor: pointer;
  }
`

const IconLink = styled(Link)`
  svg {
    height: 1.5rem;

    * {
      ${smoothTargetTransition("fill")};
      fill: var(--color-dark);
    }
  }

  &:hover {
    svg {
      * {
        fill: rgb(var(--base-color-not-black));
      }
    }
  }

`
