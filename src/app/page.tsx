"use client"

import styled from "styled-components";
import LandingSection from "@/app/segments/LandingSection";
import ProjectSection from "@/app/segments/ProjectSection";
import {FlexColumn} from "@/components/styled-elements/flex";
import AboutSection from "@/app/segments/AboutSection";
import {mq} from "@/util";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Wrapper>
                <LandingSection id="section-landing"/>
                <AboutSection id="section-about"/>
                <ProjectSection id="section-projects"/>
                <Footer/>
            </Wrapper>
        </main>
    )
}


const Wrapper = styled(FlexColumn)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 0 1.75rem;

  ${mq(`${1328 + 36 * 2}px`, undefined)} {
    padding: unset;
  }
`
