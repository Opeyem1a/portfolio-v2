import styled from "styled-components";
import {useCallback, useEffect, useRef} from "react";
import SmileIcon from "@/static/smile.svg"
import {FlexColumn, FlexRow} from "@/components/styled-elements/flex";

const SmileBlock = () => {
    const ref = useRef(null)
    const topFlexRef = useRef(null)
    const bottomFlexRef = useRef(null)
    const leftFlexRef = useRef(null)
    const rightFlexRef = useRef(null)

    const followCursor = useCallback((e: MouseEvent) => {
        if (!ref.current) return

        const boundingClientRect = ref.current.getBoundingClientRect()
        const [blockX, blockY] = [
            boundingClientRect.left + boundingClientRect.width / 2,
            boundingClientRect.top + boundingClientRect.height / 2,
        ]

        const [mouseX, mouseY] = [
            e.clientX,
            e.clientY,
        ]

        const maxWidth = window.innerWidth
        const maxHeight = window.innerHeight

        const distX = mouseX - blockX
        const distY = mouseY - blockY

        const ratioX = distX / maxWidth
        const ratioY = distY / maxHeight

        topFlexRef.current.style.flex = ratioY + 0.5
        bottomFlexRef.current.style.flex = -ratioY + 0.5

        leftFlexRef.current.style.flex = ratioX + 0.5
        rightFlexRef.current.style.flex = -ratioX + 0.5

    }, [ref])

    useEffect(() => {
        window.addEventListener("mousemove", followCursor);
        return () => window.removeEventListener("mousemove", followCursor);
    }, [followCursor, ref])

    return (
        <SmileBlockWrapper ref={ref} data-hoverable>
            <SpaceFlex flex={0.1} ref={topFlexRef}/>
            <FlexRow width="100%">
                <SpaceFlex flex={1} ref={leftFlexRef}/>
                <StyledSmileIcon/>
                <SpaceFlex flex={1} ref={rightFlexRef}/>
            </FlexRow>
            <SpaceFlex flex={1} ref={bottomFlexRef}/>
        </SmileBlockWrapper>
    );
};

export default SmileBlock;

const SmileBlockWrapper = styled(FlexColumn)`
  border-radius: var(--border-radius-standard);
  background-color: var(--color-primary);
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: clamp(0.5rem, 4vw, 2rem);;
`

const StyledSmileIcon = styled(SmileIcon)`
  width: clamp(2.5rem, 10vw, 15rem);
  aspect-ratio: 1 / 1;
`

const SpaceFlex = styled.div<{ flex: number }>`
  flex: ${({flex}) => flex};
  transition-property: flex;
  transition-duration: 600ms;
  transition-timing-function: ease-out;
`