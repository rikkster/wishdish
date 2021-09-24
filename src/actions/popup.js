export const showPopup = async (store, popupName) => {

  try {

    store.setState({ 

      popup: {
        show: true,
        name: popupName,
      }

    });
      
  } catch (error) {

    alert(`Error ${error}`);

  }

};

export const hidePopups = async (store) => {

  try {

    store.setState({
        
      popup: {
        show: false,
        name: '',
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

    });

  } catch (error) {

    alert(`Error ${error}`);

  }

};