import style from './style.module.css'
import logo from '../../public/logo.png'
import Image from 'next/image';
import search from '../../public/search.png'
import user from '../../public/user.png'
import heart from '../../public/heart.png'
import cart from '../../public/cart.png'
import menu from '../../public/menu.png' 
function Header (){
    return (
        <div className={style.wrapper}>
            <Image src={logo} alt="img"/>
            <div className={style.left}>
                <div className={style.links}>
                    <p>Trade In</p>
                    <p>Запчасти</p>
                    <p>Экипировка</p>
                    <p>Аксессуары</p>
                    <p>Велостанки</p>
                </div>
                <div className={style.buttons}>
                    <Image src={search} alt='img'/>
                    <Image src={user} alt='img'/>
                    <Image src={heart} alt='img'/>
                    <Image src={cart} alt='img'/>
                </div>
                {/* <Image src={menu} alt='img'/> */}
            </div>
        </div>
    )
}
export default Header;