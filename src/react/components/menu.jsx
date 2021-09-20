import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarMenu = () => {

  const location = useLocation();

  useEffect(() => {

    console.log('location', location)

  }, [ location ])

  const MENU = [

    { text: "Блюда", url:"/dishes" },
    { text: "Рестораны", url:"/restaurants" },
    { text: "Check-ins", url:"/checkins" },
    { text: "Пользователи", url:"/users" },
    { text: "Лента редактора", url:"/all" }

  ]
  
  return (

    <nav className="sidebar">

      { MENU.map(( el, k ) => (

        <MenuElement
        
          key = { k }
          text = { el.text }
          url = { el.url }

        />

      ))}

    </nav>
    
  );

}

const MenuElement = ({ url, text }) => (

  <Link to = { url } className = { window.location.pathname === url ? "active" : ""}>

    <div className={`icon icon-${ url.substring(1) }`} />
    <text>{ text }</text>

  </Link>

)

export default SidebarMenu;