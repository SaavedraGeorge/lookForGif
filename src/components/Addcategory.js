import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    // { setCategories } es la destructuracion del props
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //previene el comportamiento defoult de submit, no actualiza la pagina completa
        if (inputValue.trim().length > 2) {
            // trim() borra los espacios antes y despues
            setCategories(categorias => [inputValue, ...categorias]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}