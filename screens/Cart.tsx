import React, { useLayoutEffect } from 'react';
import useCartStore from '../cartStore';
import { SafeAreaView, FlatList, View, Image, Text, Button, StyleSheet} from 'react-native';

const CartProduct = ({product}) => {
  return(
    <View style={styles.container}>
      <View>
      <Image 
          style={styles.prodImage} 
          source={ 
            product.image_url
              ?{uri: product.image_url}
              :require('../assests/no-image-available.png')
          }
      />
      </View>
      <View>
        <Text style={styles.cartProductName}>{product.name}</Text>
        <Text style={styles.cartProductQuantity}>Qty - {product.quantity}</Text>
        <Text style={styles.cartProductPrice}>
          {'\u20B9'} {product.quantity*product.stats.average_price}
        </Text>
      </View>
    </View>
  )
};

const Cart = () => {
  console.log("In CART")
  const cartProducts = useCartStore((state) => state.cartProducts);
  console.log(cartProducts);
  if(cartProducts.length){
    return(
      <SafeAreaView>
        <FlatList
          data = {cartProducts}
          keyExtractor = {(item,index) => index}
          renderItem = {({item}) => <CartProduct product={item}/>}
          // horizontal = {false}
          numColumns = {1}
        />
    </SafeAreaView>
    );
  }
  return(
    <SafeAreaView style = {styles.emptyCartContainer}>
      <Image 
        source={require('../assests/empty-cart.jpeg')}
        style = {styles.emptyCartImage}
      />
      <Text style = {styles.emptyCartText}>Your Cart is Empty</Text>
      <Text style = {styles.emptyCartText}>Check out our store</Text>
    </SafeAreaView>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: "#c3c3c3",
    margin: 10,
    padding: 10,
  },
  prodImage: {
    width: 75,
    height:75,
    borderRadius: 5,
    marginRight: 15,
  },
  cartProductName: {
    maxWidth: 250,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '400',
  },
  cartProductQuantity: {
    marginBottom: 5,
    fontWeight: '700',
  },
  cartProductPrice: {
    color: '#2E8B57',
    fontWeight: '800',
    marginBottom: 10,
  },
  emptyCartContainer: {
    alignItems: 'center'
  },
  emptyCartImage: {
    width: 350,
    height:450,
    marginTop: 20,
    marginBottom: 25,
    borderRadius: 4,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  }
});

export default Cart;