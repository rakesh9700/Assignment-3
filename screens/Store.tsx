import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Image} from 'react-native';
import StoreProduct from '../components/StoreProduct';

const Store = () => {
  // console.log('In STORE')
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = () => {
    const offset = page * 10;
    const urlAPI = `https://api.opensea.io/api/v1/collections?offset=${offset}&limit=10`;

    fetch(urlAPI)
      .then(response => response.json())
      .then(collections => collections.collections)
      .then(currData => {
        setData([...data, ...currData]);
      })
      .finally(() => {
        console.log('Fetching Completed');
      });
  };

  useEffect(() => {
    // console.log('In USE EFFECT')
    fetchData();
    setPage(page + 1);
    setIsLoading(false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          fetchData();
          setPage(page + 1);
        }}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <StoreProduct product={item} />}
        // horizontal = {false}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
  },
});

export default Store;
