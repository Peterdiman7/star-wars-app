import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardComponent from '../cards/StarshipCard';

const StarshipDetails = () => {
    const url = "https://swapi.dev/api/starships/";

    const { id } = useParams();
    const [singleStarship, setSingleStarship] = useState([]);
    
    useEffect(() => {
        fetch(url + id)
            .then(res => res.json())
            .then(data => setSingleStarship(data));
    }, [])
    return(
        <div>
            {<CardComponent singleStarship={singleStarship} />}
        </div>
    );
}

export default StarshipDetails;