import React from 'react';
import globalHook from 'use-global-hook';

import * as actions from "../actions";

const initialState = {
 
  dataViewMode: 1,
  popup: {
    show: true,
    name: "detailsDish",
  }

};

const useGlobal = globalHook( React, initialState, actions );

export default useGlobal;