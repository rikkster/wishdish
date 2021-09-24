import React, { Fragment, useState, useEffect, useCallback } from 'react';
import useGlobal from "../../../store";
import { BackgroundBlur } from '../backgrounds';

import { Details } from './details';

export const PopupController = (props) => {

  const [ globalState, globalActions ] = useGlobal();
  const { popup, popupPlanning, popupConfirm } = globalState;
  
  if (popup.show) {
      
    switch (popup.name) {

      case "details":
        return <Details />

      default:
        return null;
    }

  }

  return null;

}

export function ClosePopup() {
  const [ globalState, globalActions ] = useGlobal();
  useEffect(() => { 
    globalActions.popup.hidePopups() 

    return () => { return null }
  }, []);
  return (<React.Fragment/>);
  
}

// export class Popup extends React.Component {

//   constructor( props ) {

//     super( props );

//     this.Close = this.Close.bind(this);
//     this.CloseByEsc = this.CloseByEsc.bind(this);

    
//     this.state = { 
//       popupClass: "popup",
//       close: false
//     }

//   }

//   componentDidMount() {

//     document.addEventListener("keydown", this.CloseByEsc, false);

//   }

//   componentWillUnmount() {

//     document.removeEventListener("keydown", this.CloseByEsc, false);

//   }

//   Close = () => {

//     this.setState({ popupClass: 'popup zoomOut' });
//     setTimeout(() => { this.setState({ close: true }) }, 350);

//   }
  
//   CloseByEsc = (e) => { (e.keyCode === 27 || e.keyCode === 'Escape') && this.Close(); }; 

//   render() { 
    
//     return (

//       <Fragment>

//         { this.close && <ClosePopup /> }

//         <BackgroundBlur />

//         <div className="popup-container">

//           <div className={ this.state.popupClass }>

//             {/* <div className="popup__close" onClick={ Close }>×</div>
//             <div className="popup__title">
//                 { props.title }
//             </div>
//               */}
//             { this.props.children }
//             {/* { props.content(Close) } */}
              
//           </div>

//         </div>

//       </Fragment>

//     );

// }
  
// }

export const Popup = (props) => {

  const [ globalState, globalActions ] = useGlobal();
  const [ popupClass, setCloseClass ] = useState('popup');

  useEffect(() => {

    document.addEventListener("keydown", CloseByEsc, false);

    return () => {
      document.removeEventListener("keydown", CloseByEsc, false);
    };

  }, []);

  function Close() {

    setCloseClass('popup zoomOut');
    setTimeout(globalActions.popup.hidePopups, 350);

  }
  
  const CloseByEsc = useCallback((e) => { (e.keyCode === 27 || e.keyCode === 'Escape') && popupClose(); }, []); 

  return (

    <Fragment>

      <div id="popupClose" onClick={ Close } />

      <BackgroundBlur />

      <div className="popup-container">

        <div id="popup" className={ popupClass }>

          { props.children }
            
        </div>

      </div>

    </Fragment>

  );
  
}

export const popupClose = () => document.getElementById('popupClose').click();