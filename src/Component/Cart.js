import React from 'react'
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const Cart = ({movie}) => {
    
          let {
        image,
        name,
        rating,
        date,
        id
    }=movie;
    return (
       <div className="movie-card">
      <StarRating rate={rating}/>
      <Link to={`/moviedetails/${id}`} ><img src={image}  alt="" /></Link>
      <h1>{name} </h1>
       <p>{date} </p>
       </div>
       
    )
}

export default Cart
