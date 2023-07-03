import {FlexRow} from "@/components/styled-elements/flex"
import AfterEffectsIcon from "@/static/icons/after-effects.svg"
import CircleCiIcon from "@/static/icons/circle-ci.svg"
import Css3Icon from "@/static/icons/css3.svg"
import DjangoIcon from "@/static/icons/django.svg"
import DockerIcon from "@/static/icons/docker.svg"
import FigmaIcon from "@/static/icons/figma.svg"
import GraphQlIcon from "@/static/icons/graphql.svg"
import Html5Icon from "@/static/icons/html5.svg"
import JavaScriptIcon from "@/static/icons/javascript.svg"
import JetBrainsIcon from "@/static/icons/jetbrains.svg"
import NextJsIcon from "@/static/icons/nextjs.svg"
import NpmIcon from "@/static/icons/npm.svg"
import PostgresSqlIcon from "@/static/icons/postgressql.svg"
import PythonIcon from "@/static/icons/python.svg"
import ReactJsIcon from "@/static/icons/react.svg"
import SassIcon from "@/static/icons/sass.svg"
import TypeScriptIcon from "@/static/icons/typescript.svg"
import YarnIcon from "@/static/icons/yarn.svg"
import styled from "styled-components";
import {smoothTargetTransition} from "@/styles/transitions";
import {mobileOnly} from "@/util";

const SkillIcons = () => {
    return (
        <SVGWrapper>
            <NextJsIcon data-hover-base />
            <ReactJsIcon/>
            <TypeScriptIcon/>
            <JavaScriptIcon/>

            <GraphQlIcon/>
            <PythonIcon/>
            <DjangoIcon data-hover-base/>

            <Html5Icon/>
            <Css3Icon/>
            <SassIcon/>

            <PostgresSqlIcon/>

            <CircleCiIcon data-hover-base />
            <DockerIcon/>

            <YarnIcon/>
            <NpmIcon/>

            <AfterEffectsIcon data-hover-base/>
            <FigmaIcon />

            <JetBrainsIcon data-hover-base/>
        </SVGWrapper>
    );
};

export default SkillIcons;


const SVGWrapper = styled(FlexRow)`
  gap: 12px;
  flex-wrap: wrap;
  
  svg {
    height: 3rem;
    opacity: 0.5;

    ${mobileOnly} {
      height: 2rem;
    }

    &:not(:hover) {
      path, circle, rect {
        ${smoothTargetTransition("fill")};
        fill: var(--color-dark);
      }
    }
    
    &[data-hover-base]:hover {
      fill: var(--color-dark);
      * {
        fill: var(--color-dark);
      }
    }

    &:hover {
      opacity: 1;
    }
  }
`