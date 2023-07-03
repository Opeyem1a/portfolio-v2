import styled from "styled-components";
import {BREAKPOINTS} from "@/util";

type DisplayProps = {
    on: boolean[]
}
export const Display = (Component) => {
    return styled(Component)<DisplayProps>`
      ${({on}) => {
        const result = {}
        on.forEach((shouldDisplay, index) => {
          if (shouldDisplay) return
          result[BREAKPOINTS[index]] = {display: "none"}
        })
        return result
      }}
    `
}