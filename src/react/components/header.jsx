import React from 'react';
import useGlobal from '../../store';

const Header = () => {
  
  const [ globalState, globalActions ] = useGlobal();
  const { popup } = globalState;
  
  return (

    <header className = { popup.show ? ' blur' : ''}>

      <div class="left">

        <div class="logo"></div>

        <text>

          WishDish

        </text>

      </div>

      <div class="right">

        Андрей

        <div class="user-img" style={{ backgroundImage: "url(https://sun9-27.userapi.com/impf/c844216/v844216867/1cd42d/v9C8YVfDfkU.jpg?size=1113x664&quality=96&sign=80d0889a45370ad246e10912256df74f&type=album)"}} /> {/* style="background-image: url('./img/useravatar.png');" */}

        <div class="union" />

      </div>

    </header>
    
  );

}

export default Header;