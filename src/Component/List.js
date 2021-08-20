import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const List = ({films}) => {
    
    return (
        <div>
            <Link to="/add"><h1>Add Movie</h1></Link>
        <div className="movie-list">
            {films.map(
            (elt) => <Cart movie={elt}/>
         )}   
        </div>
        </div>
    )
}

export default List
