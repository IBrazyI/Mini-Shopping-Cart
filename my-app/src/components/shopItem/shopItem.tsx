import './shopItem.css'
import { useState } from 'react'
import type { Props } from '../../types/types.ts'

function ShopItem({ item, addItemToBasket }: Props) {
    const [quantity, setQuantity] = useState(0)
    const isAddDisabled = quantity <= 0

    const increment = () =>
        setQuantity((currentQuantity) =>
            Math.min(item.stock, currentQuantity + 1)
        )
    const decrement = () => setQuantity((currentQuantity) =>
        Math.max(0, currentQuantity - 1)
    )
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Number(event.target.value) || 0)
        setQuantity(value)
    }
    const handleAdd = () => {
        addItemToBasket(item, quantity)
        setQuantity(0)
    }
    return (
        <div className="shop-item">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>Price: £{item.price}</p>
            <p>Left in stock: {item.stock}</p>

            <div>
                <button type="button" onClick={decrement}>Less</button>
                <input
                    className="item-input"
                    type="number"
                    value={quantity}
                    min={0}
                    max={item.stock}
                    onChange={handleChange}
                    readOnly
                />
                <button type="button" onClick={increment}>More</button>
            </div>

            <button type='button' disabled={isAddDisabled} onClick={handleAdd}>Add to basket</button>
        </div>
    )
}

export default ShopItem