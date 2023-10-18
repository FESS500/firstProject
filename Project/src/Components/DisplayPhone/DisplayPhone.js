import React from 'react';
import displayPhone from './DisplayPhone.module.css';// импортирование модуля css компоненты Display
import phoneHand from '../../Images/phoneHand.png'
const DisplayPhone = () => {
    return (
      <div className={displayPhone.background}>
        <img className={displayPhone.phoneHand} src={phoneHand} alt="phoneHand" />{/*Основной фон компоненты DisplayPhone*/}
        <div className={displayPhone.MainHeader}>
          <div className={displayPhone.buttonWhite}>
            Не нашли то что нужно?
          </div>
          <div className={displayPhone.textCake}>
            Приготовим заказ<br />
            любой сложности <br />по фото или эскизу
          </div>
          <div className={displayPhone.textCold}>
            Загрузите фотографию или эскиз капкейков<br />
            и мы рассчитаем стоимость за 30 минут
          </div>
        <div className={displayPhone.catalog}>
            <div className={displayPhone.buttonCatalog}>
              Загрузить фотографию
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  
export default DisplayPhone;