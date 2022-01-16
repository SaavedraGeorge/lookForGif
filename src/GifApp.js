import React, { useState } from 'react'
import { AddCategory } from './components/Addcategory';
import { GifGrip } from './components/GifGrip';

const GifApp = () => {
    const [categories, setCategories] = useState(['Los Simpson'])



    return (
        <div>
            <h2>Gif App</h2>
            <AddCategory setCategories={setCategories} />
            {/* setCategories envia la referencia setCategories a Add category para actualizar la lista */}
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrip 
                        key = { category }
                        category={category} />
                    )
                    )


                }
            </ol>
        </div>
    )
}

export default GifApp
