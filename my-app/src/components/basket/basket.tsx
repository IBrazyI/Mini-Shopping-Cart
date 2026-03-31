import './basket.css'
import type { BasketItem, BasketModalProps } from '../../types/types.ts'

function BasketModal({ items, onClose, onRemoveItem, onUpdateQuantity }: BasketModalProps) {
    const basketTotal = calculateBasketTotal(items)

    const simulateBuy = () => {
        alert("You have purchased your items! Your basket will be reset and the page will refresh.")
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
            <div className="basket-overlay">
                <div className="basket-modal" onClick={(e) => e.stopPropagation()}>
                    <div className='basket-close-button-container'>
                        <button type="button" onClick={() => onClose()}>×</button>
                    </div>
                    <div className="modal-header">
                        <h2>Your Basket</h2>
                    </div>
                    <div className="modal-content">
                        {items.length === 0 ? (
                            <p>Your basket is empty.</p>
                        ) : (
                            items.map((line) => (
                                <div className='basket-item' key={line.item.id}>
                                    <p>{line.item.name} × {line.quantity}</p>
                                    <div className='basket-item-change-quantity'>
                                        <button onClick={() => onUpdateQuantity(line.item.id, line.quantity - 1)}>-</button>
                                        <button onClick={() => onUpdateQuantity(line.item.id, line.quantity + 1)}>+</button>
                                    </div>
                                    <p>£{(line.price * line.quantity).toFixed(2)}</p>
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

// This logic is also exported for unit testing
// TODO - move these functions to a UTILS folder
export const calculateBasketTotal = (items: BasketItem[]) => {
    return items.reduce(
        (sum, line) => sum + line.quantity * line.item.price,
        0
    )
}