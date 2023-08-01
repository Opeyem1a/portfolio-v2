import styled from "styled-components";
import {FlexRow} from "@/components/styled-elements/flex";
import {ReactNode, useCallback, useEffect, useRef} from "react";
import {Heading} from "@/components/styled-elements/text";
import {Line} from "@/components/styled-elements/artifacts";
import {mobileOnly, roundTo} from "@/util";


type SectionHeadingProps = {
    title: string;
    symbol: ReactNode;
}

const SectionHeading = ({title, symbol}: SectionHeadingProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const lineRef1 = useRef<HTMLDivElement | null>(null)
    const lineRef2 = useRef<HTMLDivElement | null>(null)
    const symbolWrapperRef = useRef<HTMLDivElement | null>(null)

    const updateScrollPercentage = useCallback(() => {
        if (!ref.current || !symbolWrapperRef.current || !lineRef1.current || !lineRef2.current) return

        const headingTopOffset = ref.current?.getBoundingClientRect()?.top
        const completionRatio = (window.screen.availHeight - headingTopOffset) / window.screen.availHeight
        const scroll = headingTopOffset > 0 ? roundTo(completionRatio, 3) : 1

        symbolWrapperRef.current.style.transform = `rotateZ(${scroll * 360}deg)`
        lineRef1.current.style.flex = `${scroll * 100}`
        lineRef2.current.style.flex = `${(1 - scroll) * 100}`
    }, []);

    useEffect(() => {
        updateScrollPercentage()
        window.addEventListener("scroll", updateScrollPercentage)
        return () => window.removeEventListener("scroll", updateScrollPercentage)
    }, [updateScrollPercentage])

    return (
        <Wrapper ref={ref}>
            <Heading>{title}</Heading>
            <FlexItemLine ref={lineRef1} flex={0} $color={"var(--color-light)"}/>
            <RotateWrapper ref={symbolWrapperRef}>
                {symbol}
            </RotateWrapper>
            <FlexItemLine ref={lineRef2} flex={1} $color={"var(--color-light)"}/>
        </Wrapper>
    );
};

export default SectionHeading;

const FlexItemLine = styled(Line)<{ flex: number }>`
  flex: ${({flex}) => flex};
  height: clamp(0.167rem, 0.4vw, 0.25rem);
`

const RotateWrapper = styled.span`
  height: 3rem;
  
  svg {
    height: 3rem;

    ${mobileOnly} {
      height: 2rem;
    }

    * {
      fill: var(--color-light);
    }
  }
  
  ${mobileOnly} {
    height: 2rem;
  }
`

const Wrapper = styled(FlexRow)`
  border-radius: var(--border-radius-standard);
  align-items: center;
  width: 100%;
  padding: 1.25rem;
  gap: 1rem;
  background-color: var(--color-dark);
  color: var(--color-light);

  ${mobileOnly} {
    padding: 1rem 1.25rem;
    gap: 0.75rem;
  }
`
