// import { useEffect, useState } from "react";

// export default function useFetchApi(url) {
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch(url)
//       .then((data) => data.json())
//       .then((data) => {
//         setIsLoading(false);
//         setData(data)

//         setError(false);
//       })
//       .catch((error) => setError(true))
//       .catch(() =>{
//         setIsLoading(false);
//         setError(true);
//       });
//   },[]);
//   return [isLoading, isError, data]
// }
