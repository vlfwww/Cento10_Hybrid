import Image from "next/image";
import style from "./page.module.css";
import Header from "../../components/Header/Header";
import partner from "../../public/2.png";
import SaleBlock from "../../components/SaleBlock/index";
import bikes from "../../../bikes";
import catalog1 from "../../public/catalog1.png";
import catalog2 from "../../public/catalog2.png";
import catalog3 from "../../public/catalog3.png";
import catalog4 from "../../public/catalog4.png";
import catalog5 from "../../public/catalog5.png";
import catalog6 from "../../public/catalog6.png";
import about from "../../public/about.png";
import about1 from "../../public/about1.png";
import about2 from "../../public/about2.png";
import about3 from "../../public/about3.png";
import about4 from "../../public/about4.png";
import bike from "../../public/bike.png";
import phone from "../../public/phone.png";
import chain from "../../public/chain.png";
import gear from "../../public/gear.png";
import pic from "../../public/pic.png";
import adv from "../../public/advantages.png";
import equipment from '../../../equipment';
import but from '../../public/but.png';
import ViewBlock from "../../components/ViewBlock";
import views from '../../../views';
import map from '../../public/map.png';
import smartphone from '../../public/smartphone.png'
import navigation from '../../public/navigation.png'
import mail from '../../public/mail.png'
import calendar from '../../public/calendar.png'
import Footer from '../../components/Footer/index'

const arr = [partner, partner, partner, partner, partner, partner, partner];

export default function Home() {
  return (
    <div>
      <div className={style.bacImg}>
        <Header />
        <div className={style.sectionWrap}>
          <section className={style.preview}>
            <h1>Электро велосипеды</h1>
            <p>
              Cento10 Hybrid — это гоночный велосипед с помогающим педалированию
              электроприводом, который устанавливает новый, очень высокий
              стандарт для данной категории
            </p>
            <button>Подробнее</button>
          </section>
        </div>
        <div className={style.sliderWrapper}>
          <div className={style.sliderButtons}>
            <div>Экстремальное вождение на горном велосипеде</div>
            <div>Велосипеды для профессионалов</div>
            <div>Долгая поездка на шоссейном велосипеде</div>
          </div>
        </div>
      </div>
      <section className={style.partners}>
        {arr.map((el, index) => (
          <Image key={`partner-${index}`} src={el} alt="partner logo" />
        ))}
      </section>
      <section className={style.sale}>
        <div className={style.saleWrapper}>
           <p className={style.title}>Новинки</p>
        <div className={style.wrapper}>
          {bikes.map((el, index) => (
            <SaleBlock
              key={el.id || index}
              img={el.img}
              title={el.title}
              price={el.price}
            />
          ))}
        </div>
        <p className={style.showAll}>показать все</p>
        </div>
      </section>
      <section className={style.catalog}>
        <div className={style.catalogWrapper}>
          <h2 className={style.title}>КАТАЛОГ</h2>
          <div className={style.wrapper}>
            <div className={`${style.block} ${style.bikes}`}>
              <p>ВЕЛОСИПЕДЫ</p>
              <Image src={catalog1} alt="Велосипеды" className={style.image} />
            </div>
            <div className={`${style.block} ${style.tradeIn}`}>
              <p>TRADE-IN</p>
              <Image src={catalog2} alt="Trade-in" className={style.image} />
            </div>

            <div className={`${style.block} ${style.parts}`}>
              <p>ЗАПЧАСТИ</p>
              <Image src={catalog3} alt="Запчасти" className={style.image} />
            </div>

            <div className={`${style.block} ${style.equpm}`}>
              <p>ЭКИПИРОВКА</p>
              <Image src={catalog5} alt="Экипировка" className={style.image} />
            </div>

            <div className={`${style.block} ${style.acses}`}>
              <p>АКСЕССУАРЫ</p>
              <Image src={catalog4} alt="Аксессуары" className={style.image} />
            </div>

            <div className={`${style.block} ${style.parts}`}>
              <p>ВЕЛОСТАНКИ</p>
              <Image src={catalog6} alt="Велостанки" className={style.image} />
            </div>
          </div>
        </div>
        <div className={style.addition}>
          <p className={style.title}>Ничего не сможет остановить вас</p>
          <div className={style.right}>
            <p className={style.main}>
              Наша компания специализируется на продаже товаров
              для велосипедного спорта — велосипедов, запасных частей,
              аксессуаров и различного спортивного инвентаря для активного
              спорта и отдыха.
            </p>
            <p className={style.button}>Подробнее</p>
          </div>
        </div>
      </section>
      <section className={style.about}>
        <Image src={about} alt="img" className={style.mainImg} />
        <div className={style.aboutWrapper}>
          <div className={style.block}>
            <div className={style.wrapper}>
              <Image src={about1} alt="img" />
              <p>Европейские бренды</p>
            </div>
            <p className={style.descr}>
              Представляем десятки европейских брендов
            </p>
          </div>
          <div className={style.block}>
            <div className={style.wrapper}>
              <Image src={about2} alt="img" />
              <p>Вечная гарантия</p>
            </div>
            <p className={style.descr}>
              На некоторые бренды предоставляем пожизненную гарантию
            </p>
          </div>
          <div className={style.block}>
            <div className={style.wrapper}>
              <Image src={about3} alt="img" />
              <p>Предпродажная настройка</p>
            </div>
            <p className={style.descr}>
              Специалисты настроят ваш велосипед наилучшим образом
            </p>
          </div>
          <div className={style.block}>
            <div className={style.wrapper}>
              <Image src={about4} alt="img" />
              <p>Доставка за 24 часа</p>
            </div>
            <p className={style.descr}>
              Доставляем товар всеми популярными транспортными компаниями
            </p>
          </div>
        </div>
      </section>
      <section className={style.models}>
        <div className={style.modelWrapper}>
          <p className={style.title}>Лучшие модели для зимней езды</p>
          <div className={style.wrapper}>
            {bikes.map((el, index) => (
              <SaleBlock
                key={el.id || index}
                img={el.img}
                title={el.title}
                price={el.price}
              />
            ))}
          </div>
        </div>
      </section>
      <section className={style.mountain}>
        <div className={style.mountainWrapper}>
          <p className={style.title}>Горные велосипеды</p>
          <div className={style.wrapper}>
            <div className={style.left}>
              <div className={style.block}>
                <div className={style.flex}>
                  <p>Рама</p>
                  <Image src={bike} alt="img" />
                </div>
                <p className={style.descr}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of
                </p>
              </div>
              <div className={style.block}>
                <div className={style.flex}>
                  <p>Бортовой компьютер</p>
                  <Image src={phone} alt="img" />
                </div>
                <p className={style.descr}>
                  The point of using lorem ipsum is that it has a more-or-less
                  normal distribution of letters
                </p>
              </div>
              <div className={style.block}>
                <div className={style.flex}>
                  <p>Трансмиссия</p>
                  <Image src={chain} alt="img" />
                </div>
                <p className={style.descr}>
                  Many desktop publishing packages and web page editors now use
                  lorem ipsum as{" "}
                </p>
              </div>
              <div className={style.block}>
                <div className={style.flex}>
                  <p>Оборудование</p>
                  <Image src={gear} alt="img" />
                </div>
                <p className={style.descr}>
                  Contrary to popular belief, lorem ipsum is not simply random
                  text. It has roots in
                </p>
              </div>
            </div>
            <div className={style.right}>
              <Image src={pic} alt="img" />
              <p>
                Горный велосипед несмотря на свое название часто и активно
                используются в условиях города, так как обладает рядом
                характеристик, позволяющих сделать велопрогулку максимально
                приятной и комфортной
              </p>
              <button>Каталог</button>
            </div>
          </div>
        </div>
      </section>
      <section className={style.advantages}>
        <div className={style.advantagesWrapper}>
          <p className={style.title}>Преимущества</p>
          <div className={style.wrapper}>
            <div className={style.left}>
              <Image src={adv} alt="img" />
            </div>
            <div className={style.right}>
              <div className={style.block}>
                <p className={style.title}>БЕСПЛАТНАЯ ДОСТАВКА</p>
                <p className={style.description}>
                  Мы пользуемся всеми популярными видами доставки
                </p>
                <p className={style.link}>Подробнее</p>
              </div>
              <div className={style.block}>
                <p className={style.title}>ОБМЕН И ВОЗВРАТ</p>
                <p className={style.description}>
                  Все товары обеспечены фирменной гарантией фирм-производителей
                </p>
                <p className={style.link}>Подробнее</p>
              </div>
              <div className={style.block}>
                <p className={style.title}>ДОП. ОБСЛУЖИВАНИЕ</p>
                <p className={style.description}>
                  Мы выполняем ремонт велосипеда любой сложности
                </p>
                <p className={style.link}>Подробнее</p>
              </div>
              <div className={style.block}>
                <p className={style.title}>ОНЛАЙН ОПЛАТА</p>
                <p className={style.description}>
                  Для удобства вы можете оплатить товар банковской картой через
                  сайт
                </p>
                <p className={style.link}>Подробнее</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.equipment}>
        <div className={style.equipmentWrapper}>
          <p className={style.title}>Экипировка</p>
          <div className={style.wrapper}>
            <div className={style.wr}>
            <Image src={but} alt="img" className={`${style.block} ${style.left}`}/>
            </div>
            {equipment.map((el, index) => (
              <SaleBlock
                key={el.id || index}
                img={el.img}
                title={el.title}
                price={el.price}
              />
            ))}
            <div className={style.wr}>
            <Image src={but} alt="img" className={`${style.block} ${style.right}`}/>
          </div>
          </div>
          <p className={style.showAll}>показать все</p>
        </div>
      </section>
      <section className={style.view}>
        <div className={style.viewWrapper}>
          <p className={style.title}>Последние обзоры</p>
          <div className={style.wrapper}>
            {views.map((el, index) => (
              <ViewBlock
                key={el.id || index}
                img={el.img}
                title={el.title}
                date={el.date}
              />
            ))}
          </div>
          <p className={style.showAll}>показать все</p>
        </div>
      </section>
      <section className={style.contacts}>
        <div className={style.contactsWrapper}>
          <div className={style.titleWrapper}>
            <p className={style.title}>Контакты</p>
          </div>
          <Image src={map} alt="map" className={style.map}/>
          <div className={style.wrapper}>
            <div className={style.block}>
              <Image src={smartphone} alt="img"/>
              <div className={style.textWrapper}>
                <p>+7 (495) 055-75-86</p>
                <p>+7 (965) 142-22-99</p>
              </div>
            </div>
            <div className={style.block}>
              <Image src={navigation} alt="img"/>
              <div className={style.textWrapper}>
                <p>г. Москва, ул.</p>
                <p> Доватора, 7/8 с1</p>
              </div>
            </div>
            <div className={style.block}>
              <Image src={mail} alt="img"/>
              <div className={style.textWrapper}>
                <p>order@world-bike.ru</p>
              </div>
            </div>
            <div className={style.block}>
              <Image src={calendar} alt="img"/>
              <div className={style.textWrapper}>
                <p>Без выходных </p>
                <p>10:00-20:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
