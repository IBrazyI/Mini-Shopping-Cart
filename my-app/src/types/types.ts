//TODO split types into separate files

export type Item = {
    id: number;
    name: string;
    image: string;
    price: number,
    stock: number
}

export type Props = {
    item: Item
    addItemToBasket: (item: Item, quantity: number) => void
}
export type BasketLine = {
    item: Item
    quantity: number
    price: number
}

export type BasketItem = {
    item: Item
    quantity: number
    price: number
}

export type BasketModalProps = {
    items: BasketItem[]
    onClose: () => void
    onRemoveItem: (itemId: number) => void
    onUpdateQuantity: (itemId: number, newQuantity: number) => void
}