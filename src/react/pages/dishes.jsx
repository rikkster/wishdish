import React from 'react';
import useGlobal from '../../store';

import ContentHead from '../components/content.head';
import Table from '../components/table';
import Grid from '../components/grid';

const rows = [

  {
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },{
    img: "https://media.self.com/photos/5dfd1730e313510008a38574/1:1/w_960,h_960,c_limit/best%20meal%20kits%20lede.png",
    id: "123",
    name: "Тарелка с едой",
    checkins: "321",
    date: "19.09.2021",
    count_tags: "15",
    tags: "#abc, #def, #xyz",
  },

]

const Dishes = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { dataViewMode, popup } = globalState;
  
  return (

    <div className = { popup.show ? ' blur' : ''}>

      <ContentHead />
      
      { dataViewMode === 0
        ? <Grid items = { rows } />
        : <Table rows = { rows } />
      }

    </div>
    
  );

}

export default Dishes;