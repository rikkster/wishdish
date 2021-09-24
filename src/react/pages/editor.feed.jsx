import React from 'react';
import useGlobal from '../../store';

import ContentHead from '../components/content.head';
import Grid from '../components/grid';

const EditorFeed = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { popup } = globalState;

  function prepareData( data ) {

    const arr = [];

    data.forEach( el => {

      let row = {};

      switch ( el.type ) {

        case "checkin":
          row = el;
          row.checkins = "Check-in";
          row.name = el.dish_name !== "" ? el.dish_name : el.restaurant_name;
          row.tags = el.comment;
          break;
        case "restaurant":
          row = el;
          row.checkins = "Ресторан";
          row.tags = el.address;
          break;
        default: break;
      }

      arr.push( row );

    });

    return arr;

  }

  return (

    <div className = {`workflow${ popup.show ? ' blur' : ''}`}>

      <ContentHead />
      <Grid items = { prepareData( rows ) } />

    </div>
    
  );

}

export default EditorFeed;

const rows = [

  {
    img: "https://avatars.mds.yandex.net/get-altay/1363250/2a000001662624658815cc34871e6bae5900/XXL",
    id: "2",
    name: "Блинная",
    checkins: "305",
    address: "ул. Блинов д.1",
    workingtime: "с 10 до 22",
    phone: "+79997003255",
    email: "blinchiki@restoran.ru",
    online_brone: "https://blinchiki.ru/brone",
    media: [
      "https://avatars.mds.yandex.net/get-altay/1363250/2a000001662624658815cc34871e6bae5900/XXL",
      "https://www.equipnet.ru/netcat_files/userfiles/52079/Izgotovlenie_blinov/529f8ffafd.jpg",
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/dd/23/af/caption.jpg",
    ],
    type: "restaurant"
  },
  {
    img: "https://www.gastronom.ru/binfiles/images/20180127/m70eedf8.jpg",
    id: "123",
    user_name: "Revisor",
    restaurant_name: "Пир горой",
    dish_name: "Тарелка с едой",
    rating: "4",
    datetime: "12:00 21.09.2021",
    comment: "Это была отличная тарелка с едой, всем рекомендую ресторан “Пир горой”!",
    media: [
      "https://www.gastronom.ru/binfiles/images/20180127/m70eedf8.jpg",
      "https://buljon.ru/files/styles/recipe_large/public/images/recipes/2018-04/ZLvelDykAD4OjWP1wv3276rnbzvqlIR5YkJM1ad4mpk.jpg?itok=y99C7BeR",
      "https://cdn.lifehacker.ru/wp-content/uploads/2018/04/Tomato-Cabbage-Broccoli-Soup_1524929707-e1524929734681-630x315.jpg",
    ],
    type: "checkin"
  }
]