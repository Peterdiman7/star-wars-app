export function planetId (url) {
    let planetIdArr = url.split('/');
    return +planetIdArr[5];
}

export function starshipId (url) {
    let starshipIdArr = url.split('/');
    return +starshipIdArr[5];
}


