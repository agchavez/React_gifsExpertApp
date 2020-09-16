import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import Giffitem from './Giffitem';

export const GifGrid = ({ categoria }) => {
    const { data, loading } = useFetchGifs(categoria);
    console.log(loading);
    /* const [images, setimg] = useState([]);
     useEffect(() => {
         getGif(categoria)
             .then(setimg);
     }, [categoria])*/
    return (
        <div className="card-grid">
            <h3>{loading ? "Carando...." : ""}</h3>
            {
                data.map((img) => (
                    <Giffitem
                        key={img.id}
                        {...img}
                    />
                ))
            }

        </div>
    )
}
