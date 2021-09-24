import React from 'react';
import useGlobal from '../../store';

const Mediafield = ({ title = "Медиа", single = false }) => {

  const [ globalState, globalActions ] = useGlobal();
  const { details } = globalState;
  
  return (

    <div className="input-titled mediafield">

      <div className="title">{ title }</div>

      <div className="media">

        { details?.media?.length > 0 && details.media.map(( media, key ) => ( 
          
          ( !single || key < 1 ) &&
          
            <div
              key = { key }
              className="media-item"
              onMouseEnter = { () => { globalActions.changeState("detailsSelectedPhoto", media ) }}
              onClick = { () => alert(`Удалить фото №${key+1} у объекта №${details.id}`) }
              style = {{ backgroundImage: `url(${ media })`}}
            >
              <div className="remove" title="Удалить" />
            </div>

        ))}

        {( !details.media || details.media.length === 0 || !single ) && 
          <div className="media-item add" />
        }

      </div>
      
    </div>

  );

}

export default Mediafield;