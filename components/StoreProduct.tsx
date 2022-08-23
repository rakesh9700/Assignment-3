import React from 'react';
import useCartStore from '../cartStore';
import {View, Image, Text, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('screen').width / 2 - 10;

const StoreProduct = ({product}) => {
  const addToCart = useCartStore(state => state.addToCart);
  if (product.stats.average_price === 0) {
    product.stats.average_price = Math.floor(Math.random() * 100);
  }
  return (
    <View style={styles.prodContainer}>
      <View>
        <Image
          style={styles.prodImage}
          source={
            product.image_url
              ? {uri: product.image_url}
              : require('../assests/no-image-available.png')
          }
        />
      </View>
      <Text style={styles.prodName}>{product.name}</Text>
      <Text style={styles.prodPriceFree}>
        {'\u20B9'} {product.stats.average_price}
      </Text>
      <TouchableOpacity onPress={() => addToCart(product)}>
        <View style={styles.addToCart}>
          <Text style={styles.addToCartButton}>Add to Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  prodContainer: {
    width,
    backgroundColor: '#c3c3c3',
    borderRadius: 10,
    marginTop: 5,
    marginHorizontal: 5,
    marginBottom: 5,
    padding: 15,
  },
  prodImage: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  prodName: {
    marginBottom: 10,
    fontWeight: '900',
  },
  prodPrice: {
    marginBottom: 10,
  },
  prodPriceFree: {
    color: '#2E8B57',
    fontWeight: '800',
    marginBottom: 10,
  },
  addToCart: {
    backgroundColor: '#0096FF',
    borderRadius: 30,
  },
  addToCartButton: {
    color: '#ffffff',
    textAlign: 'center',
    padding: 10,
    fontWeight: '800',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingImage: {
    marginVertical: 150,
    width: 250,
    height: 250,
  },
});

export default StoreProduct;
