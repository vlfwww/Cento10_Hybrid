import style from './style.module.css';
import Image from 'next/image';

function SaleBlock(obj){
    return (
        <div className={style.block}>
            <Image src={obj.img} alt='bike'/>
            <h1>{obj.title}</h1>
            <p>{obj.price}</p>
        </div>
    )
}
export default SaleBlock;