const { expect } = require('chai');
const CartService = require('../../utils/CartService');

describe('CartService', () => {
    it('should add an item to the cart', () => {
        const cart = [];
        const item = { id: 1, name: 'Test Item', price: 10 };
        CartService.addItem(cart, item);
        expect(cart).to.include(item);
    });

    it('should remove an item from the cart', () => {
        const cart = [{ id: 1, name: 'Test Item', price: 10 }];
        CartService.removeItem(cart, 1);
        expect(cart).to.not.include({ id: 1, name: 'Test Item', price: 10 });
    });

    it('should calculate total price of the cart', () => {
        const cart = [
            { id: 1, name: 'Test Item 1', price: 10 },
            { id: 2, name: 'Test Item 2', price: 20 }
        ];
        const total = CartService.calculateTotal(cart);
        expect(total).to.equal(30);
    });
});