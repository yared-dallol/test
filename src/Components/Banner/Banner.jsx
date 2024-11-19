import React, { useState,useEffect} from 'react'
import axios from '../../assets/utils/axios'
import requests from '../../assets/utils/requests';
import "./Banner.css"

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(()=> {
    (async ()=> {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals)
        console.log(request)
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)

        ]);
      }catch(error) {
        console.log("error", error)
      }
    })()
  },[]);
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }
  return (
    <div className= "banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url('http://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"

    }}>

      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button play'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
        <div className='banner_fadeBottom'></div>
      </div>
    </div>
  )
}

export default Banner


// import React, { useEffect, useState } from "react";
// import axios from '../../assets/utils/axios'
// import requests from '../../assets/utils/requests';

// const Banner = () => {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.error("Error fetching Netflix Originals:", error);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
//         <div className="banner_buttons">
//           <button className="banner_button">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{movie?.overview}</h1>
//       </div>
//       <div className="banner--fadeBottom" />
//     </header>
//   );
// };

// export default Banner;
