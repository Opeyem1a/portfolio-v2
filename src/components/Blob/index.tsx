import styled from "styled-components";
import {useCallback, useEffect, useRef} from "react";
import {smoothTransitionStyles} from "@/styles/transitions";
import {mobileOnly} from "@/util";

type BlobProps = {
    size: number
}

const Blob = ({size}: BlobProps) => {
    const ref = useRef<HTMLDivElement>(null)

    const shouldExpandOnHover = (element: any) => {
        return !!element?.["dataset"]?.hoverable || !!element.closest("[data-hoverable]")
    }

    const followCursor = useCallback((e: MouseEvent) => {
        if (!ref.current) return
        ref.current.style.top = `${e.clientY - size / 2}px`
        ref.current.style.left = `${e.clientX - size / 2}px`

        if (shouldExpandOnHover(e.target)) {
            ref.current.style.transform = `scale(1)`
            ref.current.style.borderWidth = `1rem`
        } else {
            ref.current.style.transform = `scale(0.5)`
            ref.current.style.borderWidth = `0rem`
        }

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
  background-color: rgb(0 0 0 / 0);
  pointer-events: none;
  border-radius: ${(props: BlobProps) => `${props.size}px`};
  height: ${(props: BlobProps) => `${props.size}px`};
  width: ${(props: BlobProps) => `${props.size}px`};
  transform: scale(0.5);
  backdrop-filter: invert(100%);
  border: 0 solid rgb(var(--color-primary-core) / 0.25);

  ${mobileOnly} {
    visibility: hidden;
  }
`