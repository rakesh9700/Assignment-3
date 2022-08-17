import create from 'zustand';

const useCartStore = create((set) => ({
  cartProducts: [],
  quantity:0,
  addToCart: (product) => {
    set((state) => {
      const alreadyPresent = state.cartProducts.find((item) => item.name === product.name);
      if(alreadyPresent !== undefined){
        alreadyPresent.quantity++;
        return {cartProducts: state.cartProducts, quantity: state.quantity+1};
      }
      else{
        product.quantity=1;
        return {cartProducts: [...state.cartProducts,product], quantity: state.quantity+1};
      }
    })
  }
}))

export default useCartStore;