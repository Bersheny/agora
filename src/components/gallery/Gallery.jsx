import { useState } from 'react';
import PropTypes from 'prop-types';


/*<Gallery medias={['https://www.atelierdupiano.fr/1467-large_default/fl%C3%BBte-irlandaise-generation.jpg',
                    'https://www.instruments-musique-celtique.fr/891-product_hd/flute-traversire-irlandaise-en-bois-d-bne.jpg'
]}/>*/


export function Gallery({medias, index = 0}) {
    const [currentIndex, setCurrentIndex] = useState(index);
    const [currentMedia, setCurrentMedia] = useState(medias[currentIndex])
  
    if (!medias || medias.length === 0) {
        return null;
    }

    function handlePreviousMedia(){
          let updatedIndex = currentIndex-1
          if(updatedIndex < 0){
              updatedIndex = medias.length-1
          }
          setCurrentIndex(updatedIndex)
          setCurrentMedia(medias[updatedIndex])
      }
      function handleNextMedia(){
          let updatedIndex = currentIndex+1
          if(updatedIndex > medias.length - 1){
              updatedIndex = 0
          }
          setCurrentIndex(updatedIndex)
          setCurrentMedia(medias[updatedIndex])
      }
  
      return (
          <div className='gallery'>
              {medias.length > 1 && 
                  <button onClick={handlePreviousMedia}>Left</button>
              }
              <img src={currentMedia} alt='media'/>
              {medias.length > 1 &&
                  <button onClick={handleNextMedia}>Right</button>
              }
              {medias.length > 1 &&
              <div>           
                  <p className='index__text'>{currentIndex + 1}/{medias.length}</p>            
              </div>
              }
          </div>
      )
}

Gallery.propTypes={
    medias: PropTypes.arrayOf(PropTypes.string)
}