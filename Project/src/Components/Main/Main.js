import React from 'react';
import main from './Main.module.css';
import cupcakes from '../../Images/cupcakes.png';
import cupcakes2 from '../../Images/cupcakes2.png';
import cupcakes3 from '../../Images/cupcakes3.png';
import cupcakes4 from '../../Images/cupcakes4.png';
import cupcakes5 from '../../Images/cupcakes5.png';
import cupcakes6 from '../../Images/cupcakes6.png';
import cupcakes7 from '../../Images/cupcakes7.png';
import cupcakes8 from '../../Images/cupcakes8.png';
import cupcakes9 from '../../Images/cupcakes9.png';
const Main = () => {
    return (
      <div className={main.background}>
        <div className={main.main}>
          <div className={main.title}>
            Для любых событий и дорогих вам людей{/*Верхний заголовок Main1*/}
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
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
            <div >{/*второй товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes2} alt="cupcakes2"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Малиновый рай</div>
                  <div className={main.cremecolor}>Воздушный крем, темная<br />основа и ягода малины</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
            <div >{/*третий товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes3} alt="cupcakes3"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Фейерверк</div>
                  <div className={main.cremecolor}>Разноцветный крем<br />с бисквитной основой</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
          </div>
          <div className={main.mainFull}>{/*Основное тело Main2*/}
            <div >{/*один товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes4} alt="cupcakes4"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Шоколадный мир</div>
                  <div className={main.cremecolor}>Ореховая стружка, нежный<br />крем и шоколадная основа</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
            <div >{/*второй товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes5} alt="cupcakes5"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Слезы дракона</div>
                  <div className={main.cremecolor}>Нежный крем любого цвета<br />на выбор, вафельная основа</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
            <div >{/*третий товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes6} alt="cupcakes6"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Летняя фантазия</div>
                  <div className={main.cremecolor}>Украшения в форме сердец, <br />для любимого человека</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
          </div>
          <div className={main.mainFull}>{/*Основное тело Main3*/}
            <div >{/*один товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes7} alt="cupcakes7"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Мыс безумия</div>
                  <div className={main.cremecolor}>Разноцветная основа<br />стружка и нежный крем</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
            <div >{/*второй товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes8} alt="cupcakes8"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Облачная сказка</div>
                  <div className={main.cremecolor}>Светлая основа, нежный<br />крем со стружкой сверху</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
            <div >{/*третий товар*/}
              <div className={main.productPicture}>{/*картинка товара*/}
                <img src={cupcakes9} alt="cupcakes9"/>
              </div>
              <div className={main.overview}>{/*описание товара*/}
                  <div className={main.creme}>Темный рыцарь</div>
                  <div className={main.cremecolor}>Темная основа, нежный<br />крем и вкусные шарики</div>
                  <div className={main.price}>150р/шт.</div>
                  <div className={main.buttonPrice}>Заказать</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Main;