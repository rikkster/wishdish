import React from 'react';
import useGlobal from '../../store';
import { getVariant } from '../../helpers';
import Rating from './rating';

const Table = ({ rows }) => {

  const [ globalState, globalActions ] = useGlobal();

  const variant = getVariant();

  return (

    <div className = {`table-container ${ variant }`}>

      <Row head content = { TABLE_HEAD[ variant ] } />

      <div className="rows">

        {( rows && rows.length > 0 ) && rows.map(( content, key ) => (

          <Row

            key = { key }
            content = { content }
            maxCols = { TABLE_COLUMNS[ variant ] }
            action = { ( id ) => {
              globalActions.changeState( "details", content ); //TEST
              globalActions.changeState( "detailsSelectedPhoto", content.media[0] || "" ); //TEST
              globalActions.popup.showPopup( "details", id )
            }}

          />

        ))}

      </div>

    </div>

  );

}

const Row = ({ content = [], head = false, action = false, maxCols = false }) => {

  return (
  
    <div 
      className = {`row ${ head ? "row-head" : "" }`}
      onClick = { () => ( action && content.id ) && action( content.id ) }
    >

      { content && Object.keys( content ).map(( col, colName ) => (

        ( !maxCols || colName < maxCols ) &&
      
          <div key = { colName }>
            
            { col !== "img" 
            
              ? !head 

                ? col !== "rating" 
                
                  ? content[ col ]
                  : <Rating value = { content[ col ] } />

                : <React.Fragment> 

                    <text>{ content[ col ].name }</text>
                    
                    { content[ col ].sort && 
                      
                      <div 
                        onClick={() => alert(`sort by ${col}`)} 
                        className = "icon" 
                      /> 
                      
                    }
              
                  </React.Fragment>
              
              : <div 
                  className="photo" 
                  style={{ backgroundImage: `url(${ content[ col ] })` }}
                />
  
            }
            
          </div>

      ))}

    </div>

  );

}

export default Table;

const TABLE_COLUMNS = {

  dishes: 7,
  restaurants: 5,
  checkins: 7,
  users: 5

}
    
const TABLE_HEAD = {

  dishes: [
    {
      name: "IMG",
      sort: false
    },
    {
      name: "ID",
      sort: true
    },
    {
      name: "Name",
      sort: true
    },
    {
      name: "Check-ins",
      sort: true
    },
    {
      name: "Date",
      sort: true
    },
    {
      name: "Count of tags",
      sort: true
    },
    {
      name: "Tags",
      sort: false
    }

  ],

  restaurants: [
    {
      name: "IMG",
      sort: false
    },
    {
      name: "ID",
      sort: true
    },
    {
      name: "Name",
      sort: true
    },
    {
      name: "Check-ins",
      sort: true
    },
    {
      name: "Address",
      sort: false
    },
  
  ],

  checkins: [
    {
      name: "IMG",
      sort: false
    },
    {
      name: "ID",
      sort: true
    },
    {
      name: "User name",
      sort: true
    },
    {
      name: "Restaurant name",
      sort: true
    },
    {
      name: "Dish name",
      sort: true
    },
    {
      name: "Rating",
      sort: true
    },
    {
      name: "Date & time",
      sort: true
    }

  ],

  users: [
    {
      name: "IMG",
      sort: false
    },
    {
      name: "ID",
      sort: true
    },
    {
      name: "Name",
      sort: true
    },
    {
      name: "Check-ins",
      sort: true
    },
    {
      name: "Sign date",
      sort: true
    },

  ]

}