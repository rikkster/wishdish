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