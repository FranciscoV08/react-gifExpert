import { useState } from 'react';
import { AddCategory, GIfGrid } from './components';

export const GifExpertApp = () => {
  
  //hoock
  const [categories, setCategories] = useState(['Tokyo Ghoul']);

  const onAddCategory = ( newCategory) =>{

    //Validacion 
    if (categories.includes( newCategory) ) retu.log(newCategory);
    setCategories([newCategory, ...categories] )
    
  }

  return (

    <>
    
      {/* TITULO */}
      <h1>GifExpertApp</h1>

      {/* INPUT */}
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ event => onAddCategory(event) }
        // currentCategories={categories}
      />

      {/* LISTADO DE GIF */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {
        categories.map( (category) =>(
              <GIfGrid 
                key={category} 
                category={category}
              />
            ))
      };

        {/* <li>ABC</li> */}

    </>
  )
}
