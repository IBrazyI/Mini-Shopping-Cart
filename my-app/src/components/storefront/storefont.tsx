import './storefront.css'
import ShopItem from '../shopItem/shopItem.tsx'
import { items } from '../../data/shopItems.ts'

function Storefront() {
    return (
        <>
            <div>
                <h1>Doomsday Supply Shop</h1>
                <button type="button">Basket</button>
            </div>
            <div className="storefront">
                {items.map(item => (
                    <ShopItem
                        key={item.id}
                        item={item}
                        />
                ))}
            </div>
        </>
    )
}

export default Storefront