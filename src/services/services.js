const planetUrl = "https://swapi.dev/api/planets";

import axios from "axios";

export const getOne = (planetId) => {
    return axios(`${url}/${planetId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
};
