import './basket.css'
import type { Item } from "../../data/shopItems"

type BasketItem = {
    item: Item
    quantity: number
    price: number
}

type BasketModalProps = {
    items: BasketItem[]
    onClose: () => void
    onRemoveItem: (itemId: number) => void
}

function BasketModal({ items, onClose, onRemoveItem }: BasketModalProps) {
    const basketTotal = items.reduce(
        (sum, line) => sum + line.quantity * line.item.price,
        0
    )

    const simulateBuy = () => {
        alert("You have purchased your items! Your basket will be reset and the page will refresh.")
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
            <div className="basket-overlay">
                <div className="basket-modal" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2>Your Basket</h2>
                        <button type="button" onClick={() => onClose()}>×</button>
                    </div>
                    <div className="modal-content">
                        {items.length === 0 ? (
                            <p>Your basket is empty.</p>
                        ) : (
                            items.map((line) => (
                                <div key={line.item.id}>
                                    <p>{line.item.name} × {line.quantity}</p>
                                    <p>£{line.price * line.quantity}</p>
                                    <button className='delete-item-from-basket-button' onClick={() => onRemoveItem(line.item.id)}>Delete Item</button>
                                </div>

                            ))
                        )}
                        <div>
                            <h3>Total £{basketTotal.toFixed(2)}</h3>
                            <button onClick={simulateBuy}>Buy Now!</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BasketModal