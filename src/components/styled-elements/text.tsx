import styled from "styled-components";
import {hoverUnderlineStyles} from "@/styles/transitions";
import {Playfair_Display} from "next/font/google";

const titleTypeface = Playfair_Display({
    style: ['normal'],
    variable: '--font-playfair-display',
    subsets: ['latin'],
})

const Title = styled.h1`
  ${titleTypeface.style};
  font-size: 96px;
  font-weight: 600;
`

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
`

const Heading = styled.h3`
  ${titleTypeface.style};
  text-transform: uppercase;
  font-size: 36px;
  flex-shrink: 0;
`

type TextProps = {
    $fontSize?: string;
    $fontWeight?: number;
    $maxWidth?: string;
    $hasHoverUnderline?: boolean;
    $isHeading?: boolean;
}
const Text = styled.p<TextProps>`
  width: fit-content;
  ${(props: TextProps) => {
    return `
      font-size: ${props.$fontSize ? props.$fontSize : "20px"};
      font-weight: ${props.$fontWeight ? props.$fontWeight : "normal"};
      max-width: ${props.$maxWidth ? props.$maxWidth : "initial"};
      `
  }}
  ${(props: TextProps) => {
    return (props?.$hasHoverUnderline ?? false) && hoverUnderlineStyles
  }}
  ${(props: TextProps) => {
    return (props?.$isHeading ?? false) && titleTypeface.style
  }}
`

export {
    Title,
    Subtitle,
    Heading,
    Text,
}

