import style from './style.module.css'
import Image from 'next/image';
function ViewBlock(obj){
    return (
        <div className={style.block}>
            <Image src={obj.img} alt='img'/>
            <p className={style.date}>{obj.date}</p>
            <p className={style.view}>#обзор</p>
            <p className={style.title}>{obj.title}</p>
            <p className={style.all}>Подробнее</p>
        </div>
    )
}
export default ViewBlock;