import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { CustomIcon, CustomIconName } from './src/CustomIcon';

const App = () => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.outlineBox}>
          <View style={styles.iconRow}>
            <CustomIcon
              name={CustomIconName.Watch}
              size={16}
              color={'#1d3557'}
            />
            <CustomIcon
              name={CustomIconName.Smartphone}
              size={32}
              color={'#a8dadc'}
            />
            <CustomIcon
              name={CustomIconName.Laptop}
              size={64}
              color={'#f1faee'}
            />
          </View>
          <View style={styles.vSpace} />
          <Text style={styles.caption}>{'Custom icons rule!'}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  caption: {
    textAlign: 'center',    
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1faee',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#457b9d',
  },
  iconRow: {
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 64,
  },
  outlineBox: {
    marginHorizontal: 16,
    paddingVertical: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f1faee",
    borderRadius: 16,
  },
  vSpace: {height: 8},
});

export default App;
