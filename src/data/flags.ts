export const FLAG_NEW_PROJECT_ROWS = "FLAG_NEW_PROJECT_ROWS"
export const FLAGS = {
    FLAG_NEW_PROJECT_ROWS: false,
}

export const isActive = (flagName: keyof typeof FLAGS) => {
    return FLAGS[flagName]
}
