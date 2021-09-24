import React from 'react';
import useGlobal from '../../store';

import ContentHead from '../components/content.head';
import Table from '../components/table';
import Grid from '../components/grid';

const Dishes = () => {

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

export default Dishes;

const rows = [

  {
    img: "https://static.1000.menu/img/content-v2/00/ef/38097/ovsyanaya-kasha-s-medom-na-vode_1568554361_1_max.jpg",
    id: "1",
    name: "Каша",
    checkins: "321",
    date: "22.09.2021",
    count_tags: "3",
    tags: "#еда, #завтрак, #каша, #мюсли, #перекус",
    media: [
      "https://static.1000.menu/img/content-v2/00/ef/38097/ovsyanaya-kasha-s-medom-na-vode_1568554361_1_max.jpg",
      "https://www.gastronom.ru/binfiles/images/20150709/b580f045.jpg",
      "https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/130822102925/190811173919/p_O.jpg"
    ]

  },{
    img: "https://static.1000.menu/img/content-v2/08/f3/21103/picca-v-duxovke-s-kolbasoi-i-syrom_1616655833_29_max.jpg",
    id: "2",
    name: "Пицца",
    checkins: "2003",
    date: "19.09.2021",
    count_tags: "3",
    tags: "#пицца, #вегетарианские, #мясные, #обед, #ужин",
    media: [
      "https://static.1000.menu/img/content-v2/08/f3/21103/picca-v-duxovke-s-kolbasoi-i-syrom_1616655833_29_max.jpg",
      "https://www.koolinar.ru/all_image/recipes/132/132162/recipe_e307662d-db81-4211-a882-a41047c0a8bc.jpg",
      "https://avatars.mds.yandex.net/get-altay/879259/2a00000167318485c3a17f51f152e45845af/XXL",
    ]

  },{
    img: "https://buljon.ru/files/styles/recipe_large/public/images/recipes/2018-04/ZLvelDykAD4OjWP1wv3276rnbzvqlIR5YkJM1ad4mpk.jpg?itok=y99C7BeR",
    id: "3",
    name: "Суп",
    checkins: "1530",
    date: "19.09.2021",
    count_tags: "4",
    tags: "#суп, #обед, #мясо, #сытно, #аппетитно",
    media: [
      "https://www.gastronom.ru/binfiles/images/20180127/m70eedf8.jpg",
      "https://buljon.ru/files/styles/recipe_large/public/images/recipes/2018-04/ZLvelDykAD4OjWP1wv3276rnbzvqlIR5YkJM1ad4mpk.jpg?itok=y99C7BeR",
      "https://cdn.lifehacker.ru/wp-content/uploads/2018/04/Tomato-Cabbage-Broccoli-Soup_1524929707-e1524929734681-630x315.jpg",
    ]

  },

];