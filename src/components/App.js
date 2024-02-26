// create your App component here
import React, { useEffect, useState } from 'react';

function App() {
    const [dogBreeds, setDogBreeds] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogBreeds(data.message)
            setIsLoaded(true)
        })
    }, [])
    if(!isLoaded) {
        return <p>Loading...</p>
    }
    return  <div>
                <img src={dogBreeds} alt="A Random Dog" />
            </div>

}

export default App