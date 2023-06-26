"use client"

import styled from "styled-components";
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";
import Gauge from "@/components/Gauge";
import LandingSection from "@/app/segments/LandingSection";
import ProjectSection from "@/app/segments/ProjectSection";

export default function Home() {
    return (
        <main>
            <Wrapper>
                <Left>
                    <LandingSection/>
                    <ProjectSection/>
                </Left>
                <Right>
                    <Gauge relativeValues={[1, 2, 3, 4, 5]}/>
                    <HoverButton>Links</HoverButton>
                </Right>
            </Wrapper>
        </main>
    )
}

const Wrapper = styled(FlexRow)`
  overflow: auto;
  height: 100dvh;
  scrollbar-gutter: stable;
  padding: 0 200px;
  gap: 96px;
  max-width: var(--max-width);
  margin: 0 auto;
`

const Left = styled(FlexColumn)`
  width: 100%;
`

const Right = styled(FlexColumn)`
  align-self: flex-start;
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  max-width: 128px;
  padding: 136px 0 96px 0;
  gap: 16px;
`

const HoverButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--width-standard) solid var(--color-dark);
  border-radius: var(--border-radius-standard);
  background-color: var(--color-light);
  color: var(--color-dark);
  font-weight: 600;
  font-size: 24px;
  padding: 35px 30px;
`
