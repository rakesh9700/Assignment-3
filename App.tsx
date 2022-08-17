import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import useCartStore from './cartStore';
import Store from './screens/Store';
import Cart from './screens/Cart';
import { useState, useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Alert,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  // console.log('Inside App');
  const quantity = useCartStore((state) => state.quantity);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Store">
        <Stack.Screen
          name="Store"
          component={Store}
          options={({navigation}) => ({
            headerLeft: () => 
              <Image 
                source={require('./assests/store-logo.jpeg')}
                style={styles.icon}
              />,
            headerTitle: () => <Text style={styles.header}>Store</Text>,
            headerRight: () => (
              <TouchableOpacity 
                onPress={() => navigation.push('Cart')}
              >
                <Image 
                  source={require('./assests/cart-icon.jpeg')}
                  style={styles.icon}
                />
                {
                  quantity > 0 ? 
                  (
                    <View style={styles.quantityContainer}>
                      <Text style={styles.quantity}>
                        {quantity}
                      </Text>
                    </View>
                  ) : null
                }
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen 
          name="Cart" 
          component={Cart}
          options={() => ({
            headerTitle: () => <Text style={styles.header}>Cart</Text>,
          })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  header:{
    fontWeight:'800',
    fontSize:18,
  },
  icon:{
    width:40,
    height:40,
    backgroundColor: "#ffffff"
  },
  quantityContainer: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 12,
    height: 12,
    borderRadius: 10,
    right: 9,
    top: +9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    alignItems: 'center',
    justifyContent: 'center',
    color: "#FFFFFF",
    fontSize: 8,
    fontWeight:'600',
  }
})

export default App;
