import { useState } from 'react'; 


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value );
    }
    
    //toma el evento y prevenimos por default
    const onSumit = (event) => {
        event.preventDefault();

        //Condicional
        if(inputValue.trim().length <= 1) return;

        //Tomamos la prop que viene del padre y mediante el callback le pasamos el valor del Input 
        // setCategories( categories =>  [inputValue, ...categories] )
        onNewCategory(inputValue.trim())
        //Limpia el Input 
        setinputValue('');
    }

  return (
    //Toma el evento y se lo pasa a la funcion 
    <form onSubmit={ onSumit }> {/* (event) => onSumit(event) */}

        <input 
            type="text"
            placeholder="Buscar Gif"
            value={ inputValue }
            onChange={onInputChange} 

        />
    </form>
  )
}
