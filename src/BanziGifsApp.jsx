import { useState } from 'react'
import PropTypes from 'prop-types';
import { AddCategory, GifGrid } from './components';

export const BanziGifsApp = ({catCategories}) => {

    const [categories, setCategories] = useState(catCategories);

    const onAddCategory = (newCategory)=> {
        // console.log(newCategory);
        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        // setCategories( cat => [...categories, categoryToAdd]);
    }

    return (
        <>
            <h1>banzi-gifs</h1>

            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />
            
            {/* <button aria-label="btn-add" onClickCapture={onAddCategory}>Agregar</button> */}

            { 
                categories.map( (category) =>(
                    // <li key={ category }>{ category }</li>
                    
                    // <div key={ category }>
                    //     <h3>{ category }</h3>
                    //     <li>{ category }</li>
                    // </div>

                    <GifGrid 
                        key={ category }
                        category={ category } 
                    />

                ))
            }
        </>
    )
}

BanziGifsApp.propTypes = {
    catCategories: PropTypes.array.isRequired,
}

BanziGifsApp.defaultProps = {
    catCategories: [],
}