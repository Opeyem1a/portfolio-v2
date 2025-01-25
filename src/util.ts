export const roundTo = (number: number, places: number) => {
    return +(Math.round(Number(number + `e+${places}`)) + `e-${places}`);
};

export const mq = (min?: string, max?: string) => {
    if (!min) return `@media (max-width: ${max})`;
    if (!max) return `@media (min-width: ${min})`;
    return `@media (${min} <= width <= ${max})`;
};

export const MOBILE_MAX_WIDTH = '750px';
export const DESKTOP_MIN_WIDTH = '1200px';

export const mobileOnly = mq(undefined, MOBILE_MAX_WIDTH);
export const tabletOnly = mq(MOBILE_MAX_WIDTH, DESKTOP_MIN_WIDTH);
export const desktopOnly = mq(DESKTOP_MIN_WIDTH, undefined);
export const notDesktop = mq(undefined, DESKTOP_MIN_WIDTH);
export const notMobile = mq(MOBILE_MAX_WIDTH, undefined);

export const BREAKPOINTS = [mobileOnly, tabletOnly, desktopOnly];

export const mqValue = (
    property: string,
    maybeArray: any | any[],
    defaultValue: any
) => {
    if (!Array.isArray(maybeArray))
        return { [property]: `${maybeArray ?? defaultValue}` };
    if (maybeArray.length !== BREAKPOINTS.length)
        throw Error('Values for each breakpoint must be given');

    const result: { [key: string]: {} } = {};
    BREAKPOINTS.forEach((breakpoint, index) => {
        result[breakpoint] = {
            [property]: maybeArray[index],
        };
    });
    return result;
};
