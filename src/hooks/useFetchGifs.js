import { useEffect, useState } from "react"
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
   const [state, setstate] = useState({
       data: [],
       loading: true
   });
   
   useEffect(() => {
       getGif(categoria)
        .then(imgs => {
            setstate({
                data: imgs,
                loading : false
            })
        })
   }, [categoria]);
   return state;
}
