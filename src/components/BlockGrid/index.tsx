import React, {useCallback, useEffect, useRef} from 'react';
import styled from "styled-components";
import {FlexRow} from "@/components/styled-elements/flex";

const BlockGrid = () => {
    return (<>
        <BlockGridWrapper>
            {Array(10 * 12).fill(null).map((_, index) => {
                return <Block key={`block-${index}`}/>
            })}
        </BlockGridWrapper>
    </>);
};

const Block = () => {
    const ref = useRef(null)

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

        const dist = Math.sqrt(Math.pow(ratioX, 2) + Math.pow(ratioY, 2))

        const val = dist < 0.075 ? 0 : dist > 0.4 ? 0.8 : dist
        ref.current.style.backgroundColor = `rgb(var(--color-primary-core) / ${1 - val})`
        // ref.current.style.height = `${100 * (1 - dist)}%`
        ref.current.style.width = `${100 * (1 - dist)}%`

    }, [ref])

    useEffect(() => {
        window.addEventListener("mousemove", followCursor);
        return () => window.removeEventListener("mousemove", followCursor);
    }, [followCursor, ref])

    return (
        <BlockWrapper>
            <InnerBlock ref={ref}/>
        </BlockWrapper>
    )
}

export default BlockGrid;

const BlockGridWrapper = styled(FlexRow)`
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`

const BlockWrapper = styled.div`
  flex: 1;
  min-width: calc(100% / 10);
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: var(--color-light);

  //&:hover {
  //  background-color: var(--color-primary) !important;
  //}
`

const InnerBlock = styled.div`
  //height: 100%;
  //border-radius:15%;
  border-radius: 100%;
  width: 100%; 
  aspect-ratio: 1 / 1;
  background-color: var(--color-light);
  //border-radius: 24px;

  //&:hover {
  //  background-color: var(--color-primary) !important;
  //}
`