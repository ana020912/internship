import Image from 'next/image'
import styles from './AddBtn.module.css'
import { ACTIONS, useCartContext, useCartDispatchContext } from '@/contexts/CartContext'
export default function AddBtn(props) {
    const dispatch = useCartDispatchContext();
    // const context = useCartContext();
    function handleClick(e) {
        e.preventDefault();
        dispatch( {
            type: ACTIONS.ADD_ITEM,
            payload: {
                itemId: e.id,
                itemName: e.itemName,
                itemPrice: e.oldPrice 
            }
        }
           
        )
    }
    return (
        <button onClick={handleClick} className={`btnRemoveBorder ${styles.addBtn} ${props.bgColor}`}>
            <Image 
                src={props.imgsrc}
                // className={className}
                width={16}
                height={16}
            />    
        </button>
    )
}