import { GifItem } from './GifItem';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // const getImages = async()=>{
    //     const newImages =  await getGifs( category );
    //     setImages(newImages);
    // };

    // useEffect(()=>{
    //     // getGifs(category)
    //     //     .then( (newImages)=>{
    //     //         setImages(newImages);
    //     //     });
    //     getImages();
    // }, [ ]);

    const { images, isLoading } = useFetchGifs( category );

    console.log(isLoading);

    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2 >Cargando...</h2> )
            }
            
            <div className='card-grid'>
                {
                    images.map( (image)=>(
                        // <li key={ id }>
                        //     <img src={ url } title={ title } />
                        //     <p>{ title }</p>
                        // </li>
                        <GifItem 
                            key={ image.id }
                            { ...image }
                        /> 
                    ))
                }
            </div>
        </>
    )
    
}
