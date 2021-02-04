import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import './main.css'

const App = ()=>{

    const [term, setTerm]  = useState('')
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(()=>{
        axios.get('https://pixabay.com/api/', {
            params: {
                key : '20139365-8604d003e71feba235bb75894',
                q : term,
                image_type: 'photo',
                pretty : true
            }
        })
        .then((data) => {
            setImages(data.data.hits)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [term])
    

    


    return(
        <div className='ui container'>
            <div className='ui segment'>
                <div className='masti'>
            <ImageSearch setTerm={setTerm} />
            </div>
            </div>

            {!isLoading && images.length ===0 && <h1 className='no-image'>No Image Found</h1> }
            
         <div className="ui three column grid">
            
            {images.map((image)=>{
                  return <ImageCard image={image} />
              })}
              </div>
     
    
          </div>
        
            
    
    )
}

export default App