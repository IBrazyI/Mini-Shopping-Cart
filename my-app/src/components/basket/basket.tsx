import './basket.css'

type BasketModalProps = {
    onClose: () => void
}

function BasketModal({onClose}: BasketModalProps) {
    return(
        <>
            <div className="basket-overlay">
                <div className="basket-modal">
                    <div className="modal-header">
                        <h2>Your Basket</h2>
                        <button type="button" onClick={() => onClose()}>×</button>
                    </div>
                    <div className="modal-content">
                        <p>Your basket is empty.</p>
                        <div>
                            <h3>Total £</h3>
                            <button>Buy Now!</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BasketModal