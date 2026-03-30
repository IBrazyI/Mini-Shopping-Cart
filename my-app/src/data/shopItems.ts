import firstAidIcon from '../assets/first-aid-icon.png'
import fuelIcon from '../assets/fuel-icon.png'
import rationsIcon from '../assets/rations-icon.png'
import waterIcon from '../assets/water-icon.png'

export type Item = {
    id: number
    name: string
    image: string
    price: number
    stock: number
}

export const items = [
    { id: 1, name: 'Water Crate', image: waterIcon, price: 9.99, stock: 200},
    { id: 2, name: 'Rations Box', image: rationsIcon, price: 15.99, stock: 200 },
    { id: 3, name: 'First Aid Kit', image: firstAidIcon, price: 10.99, stock: 10  },
    { id: 4, name: 'Fuel Can', image: fuelIcon, price: 24.99, stock: 5 },
]