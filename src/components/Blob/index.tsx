"use client";

import styled from "styled-components";
import {useCallback, useEffect, useRef} from "react";
import {smoothTransitionStyles} from "@/styles/transitions";
import {mobileOnly} from "@/util";

type BlobProps = {
    size: number
}

const Blob = ({size}: BlobProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const shouldExpandOnHover = (element: any) => {
        return !!element?.["dataset"]?.hoverable || !!element.closest("[data-hoverable]")
    }

    const shouldHideOnHover = (element: any) => {
        return !!element?.["dataset"]?.hoverNone || !!element.closest("[data-hover-none]")
    }

    const followCursor = useCallback((e: MouseEvent) => {
        if (!ref.current) return

        if(shouldHideOnHover(e.target)) {
            ref.current.style.transform = `scale(0)`
            return
        }

        ref.current.style.top = `${e.clientY - size / 2}px`
        ref.current.style.left = `${e.clientX - size / 2}px`

        ref.current.style.transform = shouldExpandOnHover(e.target) ? `scale(1)` : `scale(0.5)`
    }, [ref, size])

    useEffect(() => {
        window.addEventListener("mousemove", followCursor);
        return () => window.removeEventListener("mousemove", followCursor);
    }, [followCursor, ref])

    return (
        <BlobWrapper ref={ref} size={size}/>
    );
};

export default Blob;

const BlobWrapper = styled.div<BlobProps>`
  transition: transform ${smoothTransitionStyles}, backdrop-filter ${smoothTransitionStyles}, border ${smoothTransitionStyles}, background-color ${smoothTransitionStyles}, top 180ms ease-out, left 180ms ease-out;
  z-index: 2;
  position: fixed;
  background-color: rgb(var(--base-color-not-white) / 0.5);
  pointer-events: none;
  border-radius: ${(props: BlobProps) => `${props.size}px`};
  height: ${(props: BlobProps) => `${props.size}px`};
  width: ${(props: BlobProps) => `${props.size}px`};
  transform: scale(0.5);
  backdrop-filter: invert(100%);
  -webkit-backdrop-filter: invert(100%);

  @media (hover: none) {
    visibility: hidden;
  }
`