import React from 'react';
import useGlobal from '../../store';

import ContentHead from '../components/content.head';
import Table from '../components/table';
import Grid from '../components/grid';

const Restaurants = () => {

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

export default Restaurants;

const rows = [

  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/13/ed/93/9c/main-hall.jpg",
    id: "1",
    name: "Пир горой",
    checkins: "103",
    address: "ул. Баумана д. 27",
    workingtime: "с 10 до 22",
    phone: "+79991573044",
    email: "kushai@restoran.ru",
    address: "ул. Большая Красная д.27",
    online_brone: "https://kushai.ru/brone",
    media: [
      "https://media-cdn.tripadvisor.com/media/photo-s/13/ed/93/9c/main-hall.jpg",
    ]
  },{
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
    ]
  },{
    img: "https://www.restoclub.ru/uploads/place_thumbnail_big/7/e/e/6/7ee60b62cf8c7b2185508f52990f973e.jpg",
    id: "3",
    name: "Чайная",
    checkins: "230",
    address: "ул. Чая д.1",
    workingtime: "с 10 до 22",
    phone: "+78005553535",
    email: "chai@pei.ru",
    online_brone: "https://chai-pei.ru/brone",
    media: [
      "https://www.restoclub.ru/uploads/place_thumbnail_big/7/e/e/6/7ee60b62cf8c7b2185508f52990f973e.jpg",
      "https://moychay.ru/system/photos/53/6211/original_watermarked/b6e64c0fc2ad4304ed5c2af8180fe530c7bd88c3/moychay_tea_tasting_gathering_in_moscow_tea_culture_club_moychaycom_at_malaya_dmitovka_28072018_9.jpg",
      "https://novosibirsk.bonodono.ru/upload/iblock/b5a/b5a4d041c6455cacff7dcb3b4ad03a87.jpg",
    ]
  },

]