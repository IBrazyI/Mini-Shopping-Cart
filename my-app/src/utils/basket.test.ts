import { calculateBasketTotal } from '../components/basket/basket'
import { describe, it, expect}  from 'vitest'
import rationsIcon from '../assets/rations-icon.png'
import waterIcon from '../assets/water-icon.png'
import type { BasketItem } from '../types/types'

describe('calculateBasketTotal', () => {
    it('calculates total correctly', () => {
        const items: BasketItem[] = [
            {
                item: { id: 1, name: 'Water Crate', image: waterIcon,  price: 1.99, stock: 5 },
                quantity: 2,
                price: 1.99
            },
            {
                item: { id: 2, name: 'Rations Crate', image: rationsIcon, price: 2.99, stock: 5 },
                quantity: 3,
                price: 2.99
            }
        ]
        //Using toBeCloseTo as we are dealing with a float
        expect(calculateBasketTotal(items)).toBeCloseTo(12.95)
    })
})