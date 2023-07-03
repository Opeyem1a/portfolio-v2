import styled from "styled-components";
import {useCallback, useEffect, useRef} from "react";
import {smoothTargetTransition, smoothTransitionStyles} from "@/styles/transitions";
import {mobileOnly} from "@/util";

type BlobProps = {
    size: number
}

const Blob = ({size}: BlobProps) => {
    const ref = useRef(null)

    const shouldExpandOnHover = (element) => {
        return !!element?.["dataset"]?.hoverable || !!element.closest("[data-hoverable]")
    }

    const followCursor = useCallback((e: MouseEvent) => {
        if (!ref.current) return
        ref.current.style.top = `${e.clientY - size / 2}px`
        ref.current.style.left = `${e.clientX - size / 2}px`

        if (shouldExpandOnHover(e.target)) {
            ref.current.style.transform = `scale(1)`
            ref.current.style.backdropFilter = `hue-rotate(-15deg)`
        } else {
            ref.current.style.transform = `scale(0.1)`
            ref.current.style.backdropFilter = `invert(100%)`
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
  transition: transform ${smoothTransitionStyles}, backdrop-filter ${smoothTransitionStyles}, top 180ms ease-out, left 180ms ease-out;
  z-index: 2;
  position: fixed;
  background-color: rgb(0 0 0 / 0);
  pointer-events: none;
  border-radius: ${(props: BlobProps) => `${props.size}px`};
  height: ${(props: BlobProps) => `${props.size}px`};
  width: ${(props: BlobProps) => `${props.size}px`};
  transform: scale(0.1);
  backdrop-filter: invert(100%);

  ${mobileOnly} {
    visibility: hidden;
  }
`