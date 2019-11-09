import React from 'react';

function MyProfil(props) {




  return (


    <div>
      {(props.isShown) && (<button onClick={props.onClick}
        style={{ backgroundColor: "red" }}> {props.children}
      </button>)

      }
    </div>


  );
}

export default MyProfil;