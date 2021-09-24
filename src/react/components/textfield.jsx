import React from 'react';

const Textfield = ( props ) => {

  const {

    title = false, 
    value = "", 
    set = false, 
    multiline = false, 
    placeholder = "" 

  } = props
  
  return (

    <div className={`input-titled text ${ value.length === 0 ? "empty" : ""}`}>

      { title && <div className="title">{ value.length === 0 ? placeholder ? placeholder : title : title }</div> }

      { !multiline 
      
        ? <input 
            type="text"
            value = { value }
            onChange = { ( e ) => set && set( e.target.value ) }
          />

        : <textarea 
            rows={ 5 }
            value={value} 
            onChange = { ( e ) => set && set( e.target.value ) }
          />
        }

    </div>

  );

}

export default Textfield;