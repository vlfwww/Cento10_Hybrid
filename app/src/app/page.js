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
        {arr.map((el) => (
          <Image src={el} alt="img" />
        ))}
      </section>
      <section className={style.sale}>
        <p className={style.title}>Новинки</p>
        <div className={style.wrapper}>
          {bikes.map((el) => (
            <SaleBlock img={el.img} title={el.title} price={el.price} />
          ))}
        </div>
        <p className={style.showAll}>показать все</p>
      </section>
      <section className={style.catalog}>
        <div className={style.catalogWrapper}>
          <p className={style.title}>Каталог</p>
          <div className={style.wrapper}>
            <div className={style.block}>
              <p>Велосипеды</p>
              <Image src={catalog1} />
            </div>
            <div className={style.block}>
              <p>Trade-in</p>
              <Image src={catalog2} />
            </div>
            <div className={style.block}>
              <p>Запчасти</p>
              <Image src={catalog3} />
            </div>
            <div className={style.block}>
              <p>Аксессуары</p>
              <Image src={catalog4} />
            </div>
            <div className={style.block}>
              <p>Экипировка</p>
              <Image src={catalog5} />
            </div>
            <div className={style.block}>
              <p>Велостанки</p>
              <Image src={catalog6} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
