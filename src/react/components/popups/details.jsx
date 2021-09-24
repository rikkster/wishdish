import React, { useEffect, useState } from 'react';
import useGlobal from '../../../store';
import { getVariant } from '../../../helpers';
import { Popup, popupClose } from './popup.controller';
import EmptySpace from '../empty.space';
import Textfield from '../textfield';
import Mediafield from '../mediafield';
import Rating from '../rating';

export const Details = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { details, detailsSelectedPhoto } = globalState;

  const variant = getVariant();

  const DETAILS_TITLES = {
    dishes: "Блюдо",
    restaurants: "Ресторан",
    checkins: "Check-in",
    users: "Пользователь",
    feed: details.type === "checkin" ? "Check-in" : "Ресторан"
  }

  return (

    <Popup>

      <div className = {`details ${ variant }`}>
        
        { details.media?.length > 0 &&

          <div

            className = "details__photo"
            style = {{ 
              backgroundImage: `url(${ detailsSelectedPhoto })` 
            }} /* TODO slider */

          />

        }
        
        <div className = "details__content">

          <div className="head">

            <div 
              className = "btn btn-close"
              title = "Закрыть"
              onClick = { popupClose } 
            />

            <div className="title">
              
              {( parseInt(details.id) === 0 )

                ? `Добавить ${ variant !== "users" ? DETAILS_TITLES[ variant ].toLowerCase() : DETAILS_TITLES[ variant ].toLowerCase().substring(11, 0) + "я" }` 
                : `${ DETAILS_TITLES[ variant ] }`
                
              }

              { details.id !== 0 &&
                <div className="btn-remove" onClick={() => alert(`Remove ID:${details.id}`)}>удалить</div>
              }
              
            </div>

            <div
              className="btn btn-confirm"
              title = "Сохранить"
            />

          </div>

          <Fields />

        </div>
      
      </div>

    </Popup>

  );

}

const Fields = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { details } = globalState;
  const   variant   = getVariant();

  const handleInput = ( f, v ) => {
    
    globalActions.changeState( "details", { ...details, [f]: v } );

  }

  const RENDER = {
    
    dishes: (

      <React.Fragment>

        <Textfield
          title = "Название"
          value = { details.name }
          set = { ( v ) => handleInput("name", v) }
        />

        <Textfield
          multiline
          title = "Тэги"
          placeholder = "Тэги через запятую: #one, #two, #three"
          value = { details.tags }
          set = { ( v ) => handleInput("tags", v) }
        />

        <Mediafield
          data = { details.media || [] }
        />

      </React.Fragment>

    ),

    restaurants: (

      <React.Fragment>

        <Textfield
          title = "Название"
          placeholder = "Название ресторана"
          value = { details.name }
          set = { ( v ) => handleInput("name", v) }
        />

        <Textfield
          title = "Адрес"
          value = { details.address }
          set = { ( v ) => handleInput("address", v) }
        />

        <Textfield
          title = "Время работы"
          placeholder = "Укажите время работы"
          value = { details.workingtime }
          set = { ( v ) => handleInput("workingtime", v) }
        />

        <Textfield
          title = "Телефон"
          value = { details.phone }
          set = { ( v ) => handleInput("phone", v) }
        />

        <Textfield
          title = "Электронная почта"
          placeholder = "Адрес электронной почты"
          value = { details.email }
          set = { ( v ) => handleInput("email", v) }
        />

        <Textfield
          title = "Онлайн-бронирование"
          placeholder = "Ссылка на онлайн-бронирование"
          value = { details.online_brone }
          set = { ( v ) => handleInput("online_brone", v) }
        />

        <Mediafield
          data = { details.media || [] }
        />

      </React.Fragment>

    ),

    checkins: (

      <React.Fragment>

        <Textfield
          title = "Пользователь"
          value = { details.user_name }
          set = { ( v ) => handleInput("user_name", v) }
        />

        <Textfield
          title = "Ресторан"
          value = { details.restaurant_name }
          set = { ( v ) => handleInput("restaurant_name", v) }
        />

        <Textfield
          title = "Блюдо"
          value = { details.dish_name }
          set = { ( v ) => handleInput("dish_name", v) }
        />

        <div className = "input-titled rating">

          <div className = "title" >Оценка</div>

          <Rating 
            value = { details.rating } 
            onChange={ ( v ) => handleInput("rating", v) } 
          />

        </div>

        <Textfield
          multiline
          title = "Комментарий"
          placeholder = "Напишите что нибудь"
          value = { details.comment }
          set = { ( v ) => handleInput("comment", v) }
        />

        <Mediafield />

      </React.Fragment>

    ),

    users: (

      <React.Fragment>

        <Textfield
          title = "Имя"
          value = { details.name }
          set = { ( v ) => handleInput("name", v) }
        />

        <div className="details_user_info">

          <Mediafield
            single
            title = "Аватар"
            data = { details.media || [] }
          />

          { details.checkins && 
          
            <div className="input-titled checkins">

              <div className="title">Check-ins</div>
              <div className="counter">{ details.checkins }</div>

            </div>
            
          }

          <EmptySpace />

        </div>

      </React.Fragment>

    )

  }

  return variant !== "feed" 
    ? RENDER[ variant ]
    : details.type === "checkin" 
      ? RENDER.checkins 
      : RENDER.restaurants

}