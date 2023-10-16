import React from 'react';
import main from './Main.module.css';
const Main = () => {
    return (
      <div className={main.background}>
        <div className={main.main}>
          <div className={main.title}>
            Для любых событий и дорогих вам людей{/*Верхний заголовок Main*/}
          </div>
          <div>{/*Основное тело Main*/}
            <div>{/*один товар*/}
              <div>{/*картинка товара*/}

              </div>
              <div>{/*описание товара*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Main;