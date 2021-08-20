import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail=({movies})=> {
    const {x}=useParams();
   
console.log(x)

    const [movie, setMovie] = useState({})
    useEffect(() => {
        setMovie( movies.find(elt=>elt.id===Number(x)   ))
    }, [])

  
    return (
        <div>
             <h1>{movie.desc}</h1> 
        </div>
    )
}

export default MovieDetail
