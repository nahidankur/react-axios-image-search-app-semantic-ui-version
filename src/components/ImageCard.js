import React from 'react'
import '../main.css'

const ImageCard  = ({image})=>{
    return(
    <div className='column'>
        <div className="ui card">
        <div className="content">
          <img alt="sawa" className="ui avatar image" src={image.userImageURL} /> {image.user}
        </div>
        <div className="image">
          <img alt='man' src={image.webformatURL} /> 
        
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            {image.likes} loves
          </span>
          <i className="comment icon"></i>
          {image.comments} comments
          
        </div>
        <div className='extra content'>
            <div className='btn-middle'>
        <button  className="ui green button">
            <a href={image.largeImageURL}> Download </a>
            </button>
            </div>
             </div>
    
      </div>
      </div>
      
 
         
    )
}

export default ImageCard