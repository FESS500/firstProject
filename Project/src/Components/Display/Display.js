import React from 'react';
import display from './Display.module.css';// импортирование модуля css компоненты Display
import logo from '../../Images/logo.png'
import nav from '../../Images/nav.svg'
import phone from '../../Images/phone.svg'

const Display = () => {
    return (
      <div className={display.background}>{/*Основной фон компоненты Display*/}
        <div className={display.header}>
          <div className={display.sweetBox}>
              <img className={display.logo} src={logo} alt="logo" />
              Sweet Bunny House
          </div>
          <div className={display.place}>
              <img src={nav} alt="nav" />
              г.Хабаровск <br />ул. Рабочий городок д.6
          </div>
          <div className={display.phone}>
              <img src={phone} alt="phone" />
              8-999-615-3826
          </div>
        </div>
          
        <div className={display.MainHeader}>
          <div className={display.buttonWhite}>
            ВКУСНЕЙШИЕ
          </div>
          <div className={display.textCake}>
            Пирожные и торты<br />
            от 1700р/кг с доставкой<br />
            по Хабаровску
          </div>
          <div className={display.textCold}>
            Приготовим к назначенному сроку<br />
            Доставка на авто в холодильнике.
          </div>
        <div className={display.catalog}>
            <div className={display.buttonCatalog}>
              Перейти в каталог
            </div>
            <div className={display.vids}>
              10 видов начинок на выбор
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Display;