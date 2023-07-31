import React, {ReactNode} from 'react';
import styled from "styled-components";
import Link from "next/link";
import {smoothTargetTransition} from "@/styles/transitions";
import {InlineCornerArrow} from "@/components/styled-elements/artifacts";

type InlineLinkProps = {
    children: ReactNode;
} & (
    | { href: URL | string, onClick?: never }
    | { href?: never, onClick: () => void }
    )

const InlineLink = ({children, href, onClick}: InlineLinkProps) => {
    if (href) {
        return (
            <UnstyledLink href={href} target="_blank">
                <InlineLinkWrapper data-hover-none>
                    {children}<InlineCornerArrow $height="0.7em"/>
                </InlineLinkWrapper>
            </UnstyledLink>
        )
    }

    return (
        <InlineLinkWrapper data-hover-none onClick={onClick}>
            {children}<InlineCornerArrow $height="0.7em"/>
        </InlineLinkWrapper>
    );
};

export default InlineLink;

const UnstyledLink = styled(Link)`
  all: unset;
`

const InlineLinkWrapper = styled.span`
  ${smoothTargetTransition("background-color, color, border-color")};
  text-transform: capitalize;
  font-size: 0.9em;
  font-weight: 700;
  display: inline-flex;
  gap: 0.35rem;
  align-items: baseline;
  padding: 0 0.5rem;
  margin: 0 0.4rem;
  border-radius: 0.25em;
  background-color: rgb(var(--color-dark-core) / 0.07);
  color: var(--color-dark);
  border: 1px solid rgb(var(--color-dark-core) / 0.05);

  svg {
    * {
      ${smoothTargetTransition("fill")};
      fill: var(--color-dark);
    }
  }

  &:hover {
    background-color: var(--color-primary);
    color: rgb(var(--base-color-not-black));
    border-color: var(--color-primary);

    svg {
      * {
        fill: rgb(var(--base-color-not-black));
      }
    }

    cursor: pointer;
  }
`
