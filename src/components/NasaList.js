import React, {useState, useEffect} from "react";
import axios from 'axios'
import NasaCard from './NasaCard'




function NasaList() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=mgU3VdbOJQjfr95E9M5Ndang43R3qlb9a90EfmMy')
    .then((response) => {
      setData(response.data)

    })
  },[])

  console.log(data)
  return (
    <ul>
        <NasaCard 
            title={data.title}
            date={data.date}
            url={data.url}
            explanation={data.explanation}
            />
    </ul>
  )
  }
            
        
    
  








// import React, { useEffect, useState } from 'react';
// import axios from "axios"
// import MovieCard from './MovieCard'


// function MoviesList () {

//   const [movies,setMovies] = useState([])


//   useEffect(() => {
//     axios.get("https://ghibliapi.herokuapp.com/films")
    
//     .then((response) => {
//       setMovies(response.data)
//     })
  
//   },[])

//   useEffect(() => {
//     console.log('movies are changed!', movies)
//   },[movies])
 
//   // Call an API and get data about movies
//   // for each movie we want to create a new component to display that data

//   return <div>
//     <ul>
//     {movies.map((movies) => {
//       return (
//         <MovieCard 
//         id={movies.id}
//         title={movies.title}
//         description={movies.description}
//         director={movies.director}
        
//         />
//       )
//     })}

//       </ul>
     
//   </div>

// }


// export default MoviesList;
export default NasaList;