import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

  //hoock state
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)



    //la promesa guarda el valor en setImages
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    //Hoock Effect una ves se dibuja el componente llama a la promesa
    useEffect( () => {
        getImages()
    }, [])


    return{
        images: images,
        isLoading: isLoading
    }
}
