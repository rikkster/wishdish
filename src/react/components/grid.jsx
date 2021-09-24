import React from 'react';
import { getVariant } from '../../helpers';
import useGlobal from '../../store';

const Grid = ({ items }) => {

  const [ globalState, globalActions ] = useGlobal();

  const variant = getVariant();

  return (

    <div className = "scrollbar">

      <div className = {`grid-container ${ variant }`}>

        {( items && items.length > 0 ) && items.map(( el, key ) => (

          <Item

            key = { key }
            variant = { variant }
            action = { ( id ) => {
              
              globalActions.changeState( "details", el ); //TEST
              globalActions.changeState( "detailsSelectedPhoto", el.media[0] || "" ); //TEST
              globalActions.popup.showPopup( "details", id ) 
            
            }}
            name = { el.name }
            photo = { el.img }
            checkins = { el.checkins || "" }
            tags = { el.tags || "" }
            address = { el.address || "" }

          />

        ))}

      </div>

    </div>

  );

}

export default Grid;

const Item = ( props ) => {

  const {

    action = false,
    variant = "",
    id, 
    name, 
    photo, 
    checkins = "", 
    tags = "", 
    address = ""

  } = props;

  const DESCRIPTIONS = {
    dishes: tags,
    restaurants: address,
    users: `Check-ins: ${ checkins }`,
    feed: tags,
  }
  
  return (

    <div 
      className = "grid__item" 
      onClick = { () => action && action( id ) }
    >

      {( checkins !== "" && variant !== "users" ) && <Ribbon text = { checkins } /> }

      <div 
        className="photo" 
        style={{ backgroundImage: photo ? `url(${ photo })` : '' }} 
      />

      <div className="content">

        <div className="name">{ name }</div>
        <div className="text"> { DESCRIPTIONS[ variant ] }</div>

      </div>

    </div>

  );

}

const Ribbon = ({ text }) => {

  return (

    <div className="ribbon-container">
      <div className="ribbon">
        { text }
      </div>
    </div>

  );

}