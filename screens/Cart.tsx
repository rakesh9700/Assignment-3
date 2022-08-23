import React from 'react';
import useCartStore from '../cartStore';
import {SafeAreaView, FlatList, Image, Text, StyleSheet} from 'react-native';
import CartProduct from '../components/CartProduct';

const Cart = () => {
  console.log('In CART');
  const cartProducts = useCartStore(state => state.cartProducts);
  console.log(cartProducts);
  if (cartProducts.length) {
    return (
      <SafeAreaView>
        <FlatList
          data={cartProducts}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => <CartProduct product={item} />}
          // horizontal = {false}
          numColumns={1}
        />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.emptyCartContainer}>
      <Image
        source={require('../assests/empty-cart.jpeg')}
        style={styles.emptyCartImage}
      />
      <Text style={styles.emptyCartText}>Your Cart is Empty</Text>
      <Text style={styles.emptyCartText}>Check out our store</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyCartContainer: {
    alignItems: 'center',
  },
  emptyCartImage: {
    width: 350,
    height: 450,
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 4,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export default Cart;
