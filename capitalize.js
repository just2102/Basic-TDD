function capitalize (string) {
    let resultString = string.charAt(0).toUpperCase() + string.slice(1)
    return resultString
}

export {capitalize}