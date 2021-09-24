import React from 'react';
import globalHook from 'use-global-hook';

import * as actions from "../actions";

const initialState = {
 
  dataViewMode: 1,
  dataSortMode: "",
  dataSortBy: "asc",
  
  popup: {
    show: false,
    name: "",
  },

  details: {
    
    id: 0,
    name: "",
    tags: "",
    checkins: "",
    workingtime: "",
    phone: "",
    email: "",
    address: "",
    online_brone: "",
    user_name: "",
    dish_name: "",
    restaurant_name: "",
    rating: "",
    comment: "",
    media: []

  }, 
  detailsSelectedPhoto: ""

};

const useGlobal = globalHook( React, initialState, actions );

export default useGlobal;