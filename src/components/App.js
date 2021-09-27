import React, {useEffect, useState} from "react"

// create your App component here   
function App(){
    const [dogPic, setDogPic] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setDogPic(data)
            setIsLoaded(true)
        }), 
        [])
        if (!isLoaded) return (<p>Loading...</p>);
    return(
        <div>
            <img src={dogPic.message} alt="A Random Dog"></img>
            {/* {dogPic.map((dog)=> {
            <img src={dog.message} alt="A Random Dog"></img>})} */}
        </div>
    )
}

export default App