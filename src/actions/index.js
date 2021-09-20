import * as popup from './popup';

async function changeState( store, state, value ) {

  store.setState({

    [state]: value

  });

}

export {
  
  changeState,
  popup,

};