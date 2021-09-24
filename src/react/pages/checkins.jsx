import React from 'react';
import useGlobal from '../../store';

import ContentHead from '../components/content.head';
import Table from '../components/table';

const Checkins = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { popup } = globalState;

  return (

    <div className = {`workflow${ popup.show ? ' blur' : ''}`}>

      <ContentHead /> 
      <Table rows = { rows } />

    </div>
    
  );

}

export default Checkins;

const rows = [

  {
    img: "https://www.gastronom.ru/binfiles/images/20180127/m70eedf8.jpg",
    id: "1",
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
    ]
  },{
    img: "https://www.gastronom.ru/binfiles/images/20150219/b13d2782.jpg",
    id: "2",
    user_name: "Revisor",
    restaurant_name: "Блинная",
    dish_name: "Блины с рыбой и икрой",
    rating: "5",
    datetime: "12:00 21.09.2021",
    comment: "Лучше этих блинов я не ел!",
    media: [
      "https://www.gastronom.ru/binfiles/images/20150219/b13d2782.jpg",
    ]
  },{
    img: "https://www.fiesta.ru/uploads/slider_image/image/145837/v880_1.jpg",
    id: "3",
    user_name: "Revisor",
    restaurant_name: "Чайная",
    dish_name: "Блины с рыбой и икрой",
    rating: "3",
    datetime: "12:00 21.09.2021",
    comment: "Пришлось долго ждать чайного мастера, но в целом неплохо",
    media: [
      "https://www.fiesta.ru/uploads/slider_image/image/145837/v880_1.jpg",
    ]
  },
]