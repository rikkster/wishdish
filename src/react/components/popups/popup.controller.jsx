import React, { Fragment, useState, useEffect, useCallback } from 'react';
import useGlobal from "../../../store";
import { BackgroundBlur } from '../backgrounds';

import { Details } from './details';

export const PopupController = (props) => {

  const [ globalState, globalActions ] = useGlobal();
  const { popup, popupPlanning, popupConfirm } = globalState;
  
  if (popup.show) {
      
    switch (popup.name) {

      case "detailsDish":
        return <Details />

      default:
        return null;
    }

  }

  return null;

}

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
  
  const CloseByEsc = useCallback((e) => { (e.keyCode === 27 || e.keyCode === 'Escape') && Close(); }, []); 

  return (

    <Fragment>

      <BackgroundBlur />

      <div className="popup-container">

        <div className={ popupClass }>

          {/* <div className="popup__close" onClick={ Close }>×</div>
          <div className="popup__title">
              { props.title }
          </div>
            */}
          {props.children}
          {/* { props.content(Close) } */}
            
        </div>

      </div>

    </Fragment>

  );
  
}