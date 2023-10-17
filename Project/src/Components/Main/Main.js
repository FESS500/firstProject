import React from 'react';
import main from './Main.module.css';
import cupcakes from '../../Images/cupcakes.png';
const Main = () => {
    return (
      <div className={main.background}>
        <div className={main.main}>
          <div className={main.title}>
            Для любых событий и дорогих вам людей{/*Верхний заголовок Main*/}
          </div>
          <div className={main.mainFull}>{/*Основное тело Main*/}
            <div >{/*один товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes} alt="cupcakes"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Кремовый замок</div>
                  <div className={main.cremecolor}>Нежный крем любого цвета<br />на выбор, вафельная основа</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonprice}>Заказать</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Main;