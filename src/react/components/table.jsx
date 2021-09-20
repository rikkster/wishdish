import React from 'react';

const Table = ({ rows }) => {

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
    ]
  }

  console.log(`table rows ${typeof rows}`, rows);

  return (

    <div className = "table-container">

      <Row head content = { TABLE_HEAD.dishes } />

      <div className="rows">

        {( rows && rows.length > 0 ) && rows.map(( content, key ) => (

          <Row

            key = { key }
            content = { content }

          />

        ))}

      </div>

    </div>

  );

}

const Row = ({ content = [], head = false }) => {

  return (
  
    <div className = {`row ${ head ? "row-head" : "" }`}>

      { content && Object.keys( content ).map(( col, colName ) => (
      
        <div key={ colName }>
          
          { col !== "img" 
          
            ? !head 

              ? content[ col ] 

              : <React.Fragment> 

                  <text>{ content[ col ].name }</text>
                  
                  { content[ col ].sort && 
                    
                    <div 
                      onClick={() => alert(`sort by ${col}`)} 
                      class="icon" 
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