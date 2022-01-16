import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItemGrip } from './GifItemGrip';

export const GifGrip = ({ category }) => {
    
    const {data, loading} = useFetchGifs( category );
    
    return (
        <>
            <h2>{category}</h2>
            { loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grip'>
                {
                    data.map(img => (
                        < GifItemGrip
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
