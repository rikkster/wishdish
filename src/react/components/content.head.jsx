import React, { useState } from 'react';
import { getVariant } from '../../helpers';
import useGlobal from '../../store';

const ContentHead = () => {

  const [ globalState, globalActions ] = useGlobal();
  const { dataViewMode } = globalState;

  const variant = getVariant();
  
  const PAGE_NAMES = {

    dishes: "Блюда",
    restaurants: "Рестораны",
    checkins: "Check-ins",
    users: "Пользователи",
    feed: "Лента редактора",

  };

  const AddButton = () => (

    <div 
      className="add-img" 
      title={ variant !== "feed" ? "Добавить" : null }
      onClick = { () => variant !== "feed" && globalActions.popup.showPopup( "details" ) }
    >

      <div className="add">

        <div 
          class="add-variant add-variant-restaurant"
          title="Добавить ресторан"
          onClick={() => {
            globalActions.changeState(
              "details", 
              { 
                id: 0, 
                type: "restaurant",
                name: "",
                checkins: "",
                workingtime: "",
                phone: "",
                email: "",
                address: "",
                online_brone: "",
                media: []
              }
            );
            globalActions.popup.showPopup( "details" )
          }}
        >
          Ресторан
        </div>

        <div 
          class="add-variant add-variant-checkin"
          title="Добавить пост"
          onClick={() => {
            globalActions.changeState(
              "details", 
              { 
                id: 0, 
                type: "checkin",
                user_name: "",
                dish_name: "",
                restaurant_name: "",
                rating: "",
                comment: "",
                media: []
              }
            );
            globalActions.popup.showPopup( "details" );
          }}
        >
          Check-in
        </div>

      </div>

    </div>

  );
  
  return (

    <div className={`caption ${ variant }`}>

      <div className="caption__item">

        <text>

          { PAGE_NAMES[ window.location.pathname.substring(1) ] }

        </text>

        <AddButton />

      </div>

      <div className="caption__item">

        {( dataViewMode !== 1 && variant !== "feed" && variant !== "checkins" ) && <SortBar variant = { variant } /> }
        <Search />
        <ViewMode />

      </div>

    </div>

  );

}

export default ContentHead;

const SortBar = ({ variant }) => {
  
  const [ globalState, globalActions ] = useGlobal();
  const { dataSortBy, dataSortMode } = globalState;

  const [ showTags, setShowTags ] = useState( false );

  function handleSort( sortBy ) {

    if ( dataSortBy === sortBy ) {

      globalActions.changeState("dataSortMode", dataSortMode === "asc" ? "desc" : "asc");

    } else {

      globalActions.changeState("dataSortBy", sortBy)

    }

  }

  function handleCancelSort() {
    globalActions.changeState("dataSortBy", "");
  }

  const CancelSort = () => (
    
    <div 
      className = "cancel" 
      onClick = { handleCancelSort }
      title = "Отказаться от сортировки"
    />
    
  );

  function toggleTags() { setShowTags( !showTags ); }

  return (

    <div className={`sortbar ${ dataSortBy } ${ dataSortMode }`}>

      <div 
        title = "Сортировать по алфавиту"
        className="item az" 
        onClick={() => handleSort("az")}
      >

        <CancelSort />
        A-Z 
        <div className="sort-arrow" />
        
      </div>

      {( variant !== "restaurants" && variant !== "users" ) &&

        <div 
          title = "Сортировать по дате"
          className="item date" 
          onClick={() => handleSort("date")}
        >

          <CancelSort />
          date 
          <div className="sort-arrow" />
          
        </div>
            
      }

      <div 
        title = "Сортировать по количеству checkin-ов"
        className="item checkins" 
        onClick={() => handleSort("checkins")}
      >

        <CancelSort />
        check-ins 
        <div className="sort-arrow" />
        
      </div>

      {( variant !== "restaurants" && variant !== "users") &&

        <div className="item tags" title={ !showTags ? "Показать тэги" : null }>

          #tags 
          <div onClick = { toggleTags } className = "triangle-arrow"/>
          
          { showTags && 

            <CloudMessage className = "cloud-tags">
              <TagsSelector />
            </CloudMessage>

          }
          
        </div>

      }

    </div>

  );

}

const CloudMessage = ({ children, className }) => (

  <div className="cloud-message">
    <div className={`cloud-message__content ${className}`}>
      { children }
    </div>
  </div>

);

const TagsSelector = () => (

  <div className="tags">

    <div className="tag">#вкусные</div>
    <div className="tag">#мясные</div>
    <div className="tag">#сочные</div>
    <div className="tag">#горячие</div>
    <div className="tag">#холодные</div>
    <div className="tag">#прекрасные</div>
    <div className="tag">#десерт</div>
    <div className="tag">#супы</div>
    <div className="tag">#пицца</div>
    <div className="tag">#завтрак</div>
    <div className="tag">#обед</div>
    <div className="tag">#ужин</div>

  </div>

)

const ViewMode = () => {
  
  const [ globalState, globalActions ] = useGlobal();
  const { dataViewMode } = globalState;

  const variant = getVariant();

  const changeViewMode = ( mode ) => { globalActions.changeState( "dataViewMode", mode ); };

  return (

    ( variant !== "feed" && variant !== "checkins" ) ?
    
      <React.Fragment>

        <div
          onClick={() => dataViewMode !== 0 && changeViewMode(0) }
          className={`view-mode view-mode-grid ${ dataViewMode === 0 ? "active" : ""}`} 
          title="Данные в виде сетки"
        >

          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.55556 0H1.22222C0.898069 0 0.587192 0.128769 0.357981 0.357981C0.128769 0.587192 0 0.898069 0 1.22222V8.55556C0 8.87971 0.128769 9.19059 0.357981 9.4198C0.587192 9.64901 0.898069 9.77778 1.22222 9.77778H8.55556C8.87971 9.77778 9.19059 9.64901 9.4198 9.4198C9.64901 9.19059 9.77778 8.87971 9.77778 8.55556V1.22222C9.77778 0.898069 9.64901 0.587192 9.4198 0.357981C9.19059 0.128769 8.87971 0 8.55556 0ZM7.33333 7.33333H2.44444V2.44444H7.33333V7.33333ZM13.4444 9.77778H20.7778C21.1019 9.77778 21.4128 9.64901 21.642 9.4198C21.8712 9.19059 22 8.87971 22 8.55556V1.22222C22 0.898069 21.8712 0.587192 21.642 0.357981C21.4128 0.128769 21.1019 0 20.7778 0H13.4444C13.1203 0 12.8094 0.128769 12.5802 0.357981C12.351 0.587192 12.2222 0.898069 12.2222 1.22222V8.55556C12.2222 8.87971 12.351 9.19059 12.5802 9.4198C12.8094 9.64901 13.1203 9.77778 13.4444 9.77778ZM14.6667 2.44444H19.5556V7.33333H14.6667V2.44444ZM0 20.7778C0 21.1019 0.128769 21.4128 0.357981 21.642C0.587192 21.8712 0.898069 22 1.22222 22H8.55556C8.87971 22 9.19059 21.8712 9.4198 21.642C9.64901 21.4128 9.77778 21.1019 9.77778 20.7778V13.4444C9.77778 13.1203 9.64901 12.8094 9.4198 12.5802C9.19059 12.351 8.87971 12.2222 8.55556 12.2222H1.22222C0.898069 12.2222 0.587192 12.351 0.357981 12.5802C0.128769 12.8094 0 13.1203 0 13.4444V20.7778ZM2.44444 14.6667H7.33333V19.5556H2.44444V14.6667ZM12.2222 20.7778C12.2222 21.1019 12.351 21.4128 12.5802 21.642C12.8094 21.8712 13.1203 22 13.4444 22H20.7778C21.1019 22 21.4128 21.8712 21.642 21.642C21.8712 21.4128 22 21.1019 22 20.7778V13.4444C22 13.1203 21.8712 12.8094 21.642 12.5802C21.4128 12.351 21.1019 12.2222 20.7778 12.2222H13.4444C13.1203 12.2222 12.8094 12.351 12.5802 12.5802C12.351 12.8094 12.2222 13.1203 12.2222 13.4444V20.7778ZM14.6667 14.6667H19.5556V19.5556H14.6667V14.6667Z" fill="#CACACA"/>
          </svg>

        </div>
      
        
        <div
          onClick={() => dataViewMode !== 1 && changeViewMode(1) }
          className={`view-mode view-mode-table ${ dataViewMode === 1 ? "active" : ""}`} 
          title="Данные в виде таблицы"
        >

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.75C1 3.02065 1.28973 2.32118 1.80546 1.80546C2.32118 1.28973 3.02065 1 3.75 1L20.25 1C20.9793 1 21.6788 1.28973 22.1945 1.80546C22.7103 2.32118 23 3.02065 23 3.75V20.25C23 20.9793 22.7103 21.6788 22.1945 22.1945C21.6788 22.7103 20.9793 23 20.25 23H3.75C3.02065 23 2.32118 22.7103 1.80546 22.1945C1.28973 21.6788 1 20.9793 1 20.25V3.75ZM21.625 6.5H16.125V10.625H21.625V6.5ZM21.625 12H16.125V16.125H21.625V12ZM21.625 17.5H16.125V21.625H20.25C20.6147 21.625 20.9644 21.4801 21.2223 21.2223C21.4801 20.9644 21.625 20.6147 21.625 20.25V17.5ZM14.75 21.625V17.5H9.25V21.625H14.75ZM7.875 21.625V17.5H2.375V20.25C2.375 20.6147 2.51987 20.9644 2.77773 21.2223C3.03559 21.4801 3.38533 21.625 3.75 21.625H7.875ZM2.375 16.125H7.875V12H2.375V16.125ZM2.375 10.625H7.875V6.5H2.375V10.625ZM9.25 6.5V10.625H14.75V6.5H9.25ZM14.75 12H9.25V16.125H14.75V12Z" fill="#CACACA" stroke="#CACACA" strokeWidth="0.6"/>
          </svg>

        </div>

      </React.Fragment> 
      
    : null

  );

}
const Search = () => {

  return (

    <div className="searchbox">

      <div className="icon"/>
      <input type="text" placeholder="Search" />

    </div>

  );

}