export const getCssVar = (varName: string) => {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim()
}

export function toggleDarkMode() {
    document.documentElement.classList.toggle(DARK_CLASSNAME);
}

export const DARK_CLASSNAME = 'dark';
