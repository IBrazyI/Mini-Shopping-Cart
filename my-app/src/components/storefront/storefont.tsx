import './storefront.css'
import ShopItem from '../shopItem/shopItem.tsx'
import { items } from '../../data/shopItems.ts'
import BasketModal from '../basket/basket.tsx'
import { useState } from 'react'

function Storefront() {
    const [isBasketOpen, setIsBasketOpen] = useState(false)

    return (
        <>
            <div>
                <h1>Doomsday Supply Shop</h1>
                <button type="button" onClick={() => setIsBasketOpen(true)}>Basket</button>
            </div>
            <div className="storefront">
                {items.map(item => (
                    <ShopItem
                        key={item.id}
                        item={item}
                        />
                ))}
            </div>
            {isBasketOpen && (
                <BasketModal
                    onClose={() => setIsBasketOpen(false)}
                />
            )}
        </>
    )
}

export default Storefront