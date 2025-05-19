import { useState } from "react";

const Movies=()=>{
    const [movie,setMovie]=useState({
        title:"batman",
        rating:7,
    })
    const handle=()=>{
    const copymovie={
        ...movie,
        rating:3,
    };
    setMovie(copymovie)
    setMovie({...movie,rating:5});
}

    return (
        <div>
            <li>{movie.title}</li>
            <li>{movie.rating}</li>
              <button onClick={handle}>update</button>
        </div>
      
    )
}

export default Movies;