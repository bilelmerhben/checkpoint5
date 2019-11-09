import React from 'react';
function Photo(props) {
    console.log(props.src);
    
    return (
      
     <img src={props.src}></img>
      
    );
}

export default Photo;