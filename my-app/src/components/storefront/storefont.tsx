import './storefront.css'
import ShopItem from '../shopItem/shopItem.tsx'
import { items, type Item } from '../../data/shopItems.ts'
import BasketModal from '../basket/basket.tsx'
import { useState, useEffect } from 'react'

type BasketLine = {
    item: Item
    quantity: number
    price: number
}

function Storefront() {
    const handleAddItemToBasket = (item: Item, quantity: number) => {
        if (quantity <= 0) return
        setBasketItems((current) => {
            const existing = current.find((line) => line.item.id === item.id)
            if (existing) {
                return current.map((line) =>
                    line.item.id === item.id
                        ? { ...line, quantity: Math.min(item.stock, line.quantity + quantity) }
                        : line
                )
            }
            return [...current, { item, quantity, price: item.price }]
        })
    }
    const handleRemoveItem = (itemId: number) => {
        setBasketItems((current) =>
            current.filter((line) => line.item.id !== itemId)
        )
    }
    const [isBasketOpen, setIsBasketOpen] = useState(false)
    const [basketItems, setBasketItems] = useState<BasketLine[]>(() => {
        try {
            const stored = localStorage.getItem('basket')
            return stored ? JSON.parse(stored) : []
        } catch {
            return []
        }
    })
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basketItems))
    }, [basketItems])

    const basketCount = basketItems.reduce((sum, line) => sum + line.quantity, 0)

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
                        addItemToBasket={handleAddItemToBasket}
                    />
                ))}
            </div>
            {isBasketOpen && (
                <BasketModal
                    items={basketItems}
                    onClose={() => setIsBasketOpen(false)}
                    onRemoveItem={handleRemoveItem}
                />
            )}
        </>
    )
}

export default Storefront