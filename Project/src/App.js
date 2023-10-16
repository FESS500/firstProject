import React from 'react'; //Импорт в Реакт
import Display from './Components/Display/Display';//Импортирование компоненты Display
import Main from './Components/Main/Main';//Импортирование компоненты Main



const App = () => {
  return (
    <div>
      <Display />
      <Main />   
    </div>
  );
}

export default App;  //Экспорт

