import styled from "styled-components";
import {_hoverUnderlineStyles} from "@/styles/transitions";
import {Montserrat} from "next/font/google";
import {mobileOnly, mqValue} from "@/util";
import {Display} from "@/components/styled-elements/display";
import React from "react";

const titleTypeface = Montserrat({
    style: ['normal'],
    variable: '--font-montserrat',
    subsets: ['latin'],
})

const Title = styled.h1`
  ${titleTypeface.style};
  word-break: break-all;
  font-size: clamp(12px, 12vw, 8.5rem);
  font-weight: 600;
  text-transform: uppercase;
`

const Heading = styled.h3`
  ${titleTypeface.style};
  text-transform: uppercase;
  font-size: 2.25rem;
  flex-shrink: 0;
  font-weight: 600;
  
  ${mobileOnly} {
    font-size: 1.5rem;
  }
`

type TextProps = {
    $fontSize?: string | string[];
    $fontWeight?: number | number[];
    $lineHeight?: string | string[];
    $maxWidth?: string | string[];
    $color?: string | string[];
    $hoverUnderline?: string;
    $isHeading?: boolean;
    $isUppercase?: boolean;
}
const Text = styled.p<TextProps>`
  width: fit-content;
  ${(props: TextProps) => {
    return {
      ...mqValue("font-size", props.$fontSize, "1.25rem"),
      ...mqValue("line-height", props.$lineHeight, null),
      ...mqValue("font-weight", props.$fontWeight, "normal"),
      ...mqValue("max-width", props.$maxWidth, "initial"),
      ...mqValue("color", props.$color, "inherit"),
    }
  }}
  ${(props: TextProps) => {
    return `text-transform: ${props.$isUppercase ? "uppercase" : null};`
  }}
  ${(props: TextProps) => {
    return (props?.$hoverUnderline ?? false) && _hoverUnderlineStyles(props.$hoverUnderline)
  }}
  ${(props: TextProps) => {
    return (props?.$isHeading ?? false) && titleTypeface.style
  }}
`

const MaybeText: any = Display(Text)

export {
    Title,
    Heading,
    Text,
    MaybeText,
}

