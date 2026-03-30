import './shopItem.css'

function ShopItem() {
    return (
        <div>
            <h2>Shop Item Name</h2>
            <p>Image</p>
            <p>Price</p>
            <p>Left in stock</p>
            <div>
                <button>Less</button>
                <input type='number'/>
                <button>More</button>
            </div>
        </div>
    )
}

export default ShopItem