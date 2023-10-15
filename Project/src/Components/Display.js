import React from 'react';
import logo from '../Images/logo.png'
import nav from '../Images/nav.svg'
import phone from '../Images/phone.svg'

const Display = () => {
    return (
      <div className='background'>
        <div className='header'>
          <div className='sweetBox'>
              <img className='logo' src={logo} alt="logo" />
              Sweet Bunny House
          </div>
          <div className='place'>
              <img src={nav} alt="nav" />
              г.Хабаровск <br />ул. Рабочий городок д.6
          </div>
          <div className='phone'>
              <img src={phone} alt="phone" />
              8-999-615-3826
          </div>
        </div>
          
        <div className='MainHeader'>
          <div className='buttonWhite'>
            ВКУСНЕЙШИЕ
          </div>
          <div className='textCake'>
            Пирожные и торты<br />
            от 1700р/кг с доставкой<br />
            по Хабаровску
          </div>
          <div className='textCold'>
            Приготовим к назначенному сроку<br />
            Доставка на авто в холодильнике.
          </div>
        <div className='catalog'>
            <div className='buttonCatalog'>
              Перейти в каталог
            </div>
            <div className='vids'>
              10 видов начинок на выбор
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Display;