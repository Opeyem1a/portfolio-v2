const hoverUnderlineStyles = {
    display: "inline-block",
    textDecoration: "none",

    "&::after": {
        content: "''",
        display: "block",
        width: "0",
        height: "var(--width-standard)",
        background: "#000",
        transition: "width .3s",
    },

    "&:hover::after": {
        width: "100%",
    },
}

const smoothTransition = {
    transition: "all 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95)"
}

export {
    hoverUnderlineStyles,
    smoothTransition
}