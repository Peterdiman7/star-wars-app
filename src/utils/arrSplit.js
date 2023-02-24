export function pokeId (url) {
    let pokeIdArr = url.split('/');
    return +pokeIdArr[6];
}

export function starshipId (url) {
    let starshipIdArr = url.split('/');
    return +starshipIdArr[5];
}


