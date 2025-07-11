import Image from "next/image";
import style from "./page.module.css";
import Header from '../../components/Header/Header'
import partner from '../../public/2.png';

const arr =[partner,partner,partner,partner,partner,partner,partner]

export default function Home() {
  return (
    <div>
      <div className={style.bacImg}>
        <Header/>
        <div className={style.sectionWrap}>
          <section className={style.preview}>
          <h1>Электро велосипеды</h1>
          <p>Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом, который устанавливает новый, очень высокий стандарт для данной категории</p>
          <button>Подробнее</button>
        </section>
        </div>
        <div className={style.sliderWrapper}>
           <div className={style.sliderButtons}>
          <div>
            Экстремальное вождение на горном велосипеде
          </div>
          <div>
            Велосипеды для профессионалов
          </div>
          <div>
            Долгая поездка на шоссейном велосипеде
          </div>
        </div>
        </div>
      </div>
      <section className={style.partners}>
        {arr.map(el=><Image src={el} alt="img"/>)}
      </section>
      <section className={style.sale}>
        <p>Новинки</p>
      </section>
    </div>
  );
}
