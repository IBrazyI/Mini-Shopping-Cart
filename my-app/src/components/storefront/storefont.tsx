import './storefront.css'
import ShopItem from '../shopItem/shopItem.tsx'
import {items} from '../../data/shopItems.ts'

function Storefront() {
    return (
        <>
            <div>
                <h1>Doomsday Supply Shop</h1>
            </div>
            <div className='storefront'>
                <ShopItem></ShopItem>
            </div>
        </>
    )
}

export default Storefront