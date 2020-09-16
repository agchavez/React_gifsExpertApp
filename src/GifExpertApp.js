import React, { useState } from 'react'
import { CategoriAdd } from './Components/CategoriAdd';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Marvel']);
   
    return (
        <>
            <h2>GifExpertApp</h2>
                <CategoriAdd 
                    
                    setCategories = {setCategories}
                />
            <hr/>
           
            {
                    categories.map( categoria => (
                    <ol>
                        <div>
                    <h3 className = "title">{categoria}</h3>
                </div>
                    <GifGrid 
                    
                        key = {categoria}
                        categoria = {categoria}
                    /> 
                    </ol> 
                    ))
                    
                }
            
            

        </>
    )
}
