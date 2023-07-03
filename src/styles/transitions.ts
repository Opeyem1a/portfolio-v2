const _hoverUnderlineStyles = (color: string) => {
    return {
        display: "inline-block",
        textDecoration: "none",

        "&::after": {
            content: "''",
            display: "block",
            width: "0",
            height: "var(--width-standard)",
            background: color,
            transition: "width .3s",
        },

        "&:hover::after": {
            width: "100%",
        },
    }
}

const hoverUnderlineStyles = {
    ..._hoverUnderlineStyles("rgb(var(--base-color-not-black))")
}

const smoothTargetTransition = (property: string) => {
    return {
        transitionProperty: property,
        transitionDuration: "0.3s",
        transitionTimingFunction: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    }
}

const smoothTransitionStyles =  "300ms cubic-bezier(0.445, 0.05, 0.55, 0.95)"

export {
    _hoverUnderlineStyles,
    hoverUnderlineStyles,
    smoothTargetTransition,
    smoothTransitionStyles,
}