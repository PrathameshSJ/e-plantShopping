import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
        numOfItems: 0 // Number of items multiplied by their quantity
    },

    reducers: {
        addItem: (state, action) => {
            const { name, image, cost } = action.payload;
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                // In existing items, quantity is already added as property
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }

            state.numOfItems += 1;
        },

        removeItem: (state, action) => {
            const name = typeof action.payload === 'string' ? action.payload : action.payload?.name;
            const itemToRemove = state.items.find(item => item.name === name);
            if (itemToRemove) {
                state.numOfItems -= itemToRemove.quantity;
                state.items = state.items.filter(item => item.name !== name);
            } else if (action.payload && action.payload.quantity) {
                state.numOfItems -= action.payload.quantity;
                state.items = state.items.filter(item => item.name !== name);
            } else {
                state.items = state.items.filter(item => item.name !== name);
            }

            if (state.numOfItems < 0 || isNaN(state.numOfItems)) {
                state.numOfItems = 0;
            }
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const existingItem = state.items.find(item => item.name === name);

            if (existingItem) {
                const differenceQuantity = quantity - existingItem.quantity;
                state.numOfItems += differenceQuantity;
                existingItem.quantity = quantity;
            }
            if (state.numOfItems < 0 || isNaN(state.numOfItems)) {
                state.numOfItems = 0;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;