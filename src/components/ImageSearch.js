import React from 'react'
import ImageCard from './ImageCard'

const ImageSearch = ({term, setTerm})=>{
    return(
        <div>
            <div className="ui search">
  <div className="ui icon input">
    <input value={term} onChange={(e)=> setTerm(e.target.value)} className="prompt" type="text" placeholder="Search images..." />
    <i className="search icon"></i>
  </div>
</div>

        </div>
    )
}

export default ImageSearch