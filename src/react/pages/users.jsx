import React from 'react';
import useGlobal from '../../store';

import ContentHead from '../components/content.head';
import Table from '../components/table';
import Grid from '../components/grid';

const Users = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { dataViewMode, popup } = globalState;
  
  return (

    <div className = {`workflow${ popup.show ? ' blur' : ''}`}>

      <ContentHead />
      
      { dataViewMode === 0
        ? <Grid items = { rows } />
        : <Table rows = { rows } />
      }

    </div>
    
  );

}

export default Users;

const rows = [

  {
    img: "https://sun9-27.userapi.com/impf/c844216/v844216867/1cd42d/v9C8YVfDfkU.jpg?size=1113x664&quality=96&sign=80d0889a45370ad246e10912256df74f&type=album",
    id: "123",
    name: "Revisor",
    checkins: "1337",
    date: "21.09.2021",
    media: [ "https://sun9-27.userapi.com/impf/c844216/v844216867/1cd42d/v9C8YVfDfkU.jpg?size=1113x664&quality=96&sign=80d0889a45370ad246e10912256df74f&type=album"]
  },

];