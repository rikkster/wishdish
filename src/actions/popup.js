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

    });

  } catch (error) {

    alert(`Error ${error}`);

  }

};