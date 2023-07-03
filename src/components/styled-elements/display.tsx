import React from "react";
import styled from "styled-components";
import {BREAKPOINTS} from "@/util";

type DisplayProps = {
    on: boolean[]
}
export const Display = (Component: any) => {
    return styled(Component)<DisplayProps>`
      ${({on}) => {
        const result: {[key: string]: {display: string}} = {}
        on.forEach((shouldDisplay: boolean, index: number) => {
          if (shouldDisplay) return
          result[BREAKPOINTS[index]] = {display: "none"}
        })
        return result
      }}
    `
}