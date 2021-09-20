import React from 'react';

const Grid = ({ items }) => {

  return (

    <scrollbar>

      <div className = "grid-container">

        {( items && items.length > 0 ) && items.map(( el, key ) => (

          <Item

            key = { key }
            name = { el.name }
            photo = { el.img }
            checkins = { el.checkins }
            tags = { el.tags }

          />

        ))}

      </div>

    </scrollbar>

  );

}

export default Grid;

const Item = ({ name, photo, checkins, tags }) => (

  <div className="grid__item">

    {/* <Ribbon text = { checkins } /> */}

    <div 
      className="photo" 
      style={{ backgroundImage: photo ? `url(${ photo })` : '' }} 
    />

    <div className="content">

      <div className="name">{ name }</div>
      <div className="tags">{ tags }</div>

    </div>

  </div>

);

const Ribbon = ({ text }) => {

  let rWidth = text.length * 3; //// "93"

  return (

    <div className="ribbon">
      <svg width={rWidth} height="42" viewBox="0 0 93 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.72609 5.54349C0.52635 3.54392 1.96669 1 4.29857 1H89C90.6569 1 92 2.34315 92 4V38C92 39.6569 90.6569 41 89 41H4.29857C1.96669 41 0.526348 38.4561 1.72609 36.4565L10.0739 22.5435C10.6439 21.5934 10.6439 20.4066 10.0739 19.4565L1.72609 5.54349Z" fill="#FEC001"/>
        <path d="M10.0739 22.5435L9.21641 22.029L10.0739 22.5435ZM10.0739 19.4565L9.21641 19.971L10.0739 19.4565ZM1.72609 36.4565L2.58359 36.971L1.72609 36.4565ZM4.29857 2H89V0H4.29857V2ZM91 4V38H93V4H91ZM89 40H4.29857V42H89V40ZM2.58359 36.971L10.9314 23.058L9.21641 22.029L0.8686 35.942L2.58359 36.971ZM10.9314 18.942L2.58359 5.02899L0.868601 6.05799L9.21641 19.971L10.9314 18.942ZM10.9314 23.058C11.6914 21.7913 11.6914 20.2087 10.9314 18.942L9.21641 19.971C9.59643 20.6044 9.59643 21.3956 9.21641 22.029L10.9314 23.058ZM4.29857 40C2.74398 40 1.78376 38.3041 2.58359 36.971L0.8686 35.942C-0.731059 38.6081 1.18939 42 4.29857 42V40ZM91 38C91 39.1046 90.1046 40 89 40V42C91.2091 42 93 40.2091 93 38H91ZM89 2C90.1046 2 91 2.89543 91 4H93C93 1.79086 91.2091 0 89 0V2ZM4.29857 0C1.18939 0 -0.731056 3.39189 0.868601 6.05799L2.58359 5.02899C1.78376 3.69594 2.74398 2 4.29857 2V0Z" fill="#525252"/>
      </svg>
      { text }
    </div>

  );

}