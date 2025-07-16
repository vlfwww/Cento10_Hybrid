import style from './style.module.css'
import Image from 'next/image';
import footer from '../../public/footer.png'
import logo from '../../public/logo.png'
import s from '../../public/s.png'
import n from '../../public/n.png'
import m from '../../public/m.png'
function Footer(){
    return (
        <div className={style.wrapper}>
            <section className={style.subscribe}>
                <div className={style.left}>
                    <h1>Подпишитесь на наши новости</h1>
                    <div className={style.form}>
                        <input type="text" placeholder='E-mail' />
                        <button>Подписаться</button>
                    </div>
                    <div className={style.check}>
                        <input type="checkbox" />
                        <p>Согласен(на) на обработку персональных данных</p>
                    </div>
                </div>
                <div className={style.right}>
                    <Image src={footer} alt='img'/>
                </div>
            </section>
            <section className={style.links}>
                <div className={style.wrapper}>
                    <div className={style.blockFirst}>
                        <Image src={logo} alt='img'/>
                        <p>Компания World-bikes специализируется на продаже товаров для велосипедного спорта.</p>
                    </div>
                    <div className={style.block}>
                        <h1>Каталог</h1>
                        <p>Trade-in</p>
                        <p>Велосипеды</p>
                        <p>Экипировка</p>
                        <p>Запчасти</p>
                        <p>Велостанки</p>
                        <p>Аксессуары</p>
                    </div>
                    <div className={style.block}>
                        <h1>Для клиента</h1>
                        <p>О нас</p>
                        <p>Доставка и оплата</p>
                        <p>Блог</p>
                        <p>Контакты</p>
                        <p>Веломастерская</p>
                        <p>Хранение</p>
                        <p>Гарантии</p>
                    </div>
                    <div className={style.block}>
                        <h1>Контакты</h1>
                        <div className={style.textBlock}>
                            <Image src={s} alt='img'/>
                            <div className={style.text}>
                                <p>+7(495)055-75-86</p>
                                <p>+7(965)142-22-99</p>
                            </div>
                        </div>
                        <div className={style.textBlock}>
                            <Image src={n} alt='img'/>
                            <div className={style.text}>
                                <p>г. Москва, ул. Доватора, 7/8 с1</p>
                            </div>
                        </div>
                        <div className={style.textBlock}>
                            <Image src={m} alt='img'/>
                            <div className={style.text}>
                                <p>order@world-bike.ru</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <p>© 2023 world bike</p>
                    <p>Пользовательское соглашение</p>
                </div>
            </section>
        </div>
    )
}
export default Footer;