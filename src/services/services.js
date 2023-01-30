import axios from "axios";

const planetUrl = "https://swapi.dev/api/planets";

const starshipUrl = "https://swapi.dev/api/starships";

// export const getOne = (planetId) => {
//     return axios(`${url}/${planetId}`)
//         .then(res => res.json())
//         .catch(error => console.log(error));
// };

export const like = (starshipId, likes) => {
    return fetch(`${starshipUrl}/${starshipId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({likes})
    })
        .then(res => res.json());
}