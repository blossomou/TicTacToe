import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
const bg = require('./assets/bg.jpeg') ;

export default function App() {
  const [map, setMap] = useState([
    ['', '', ''], //1st row
    ['', '', ''], //2nd row
    ['', '', ''] //3rd row
    
  ])

  const [currentTurn, setCurrentTurn] = useState('x')

  const onPress = (rowIndex: number, columnIndex: number) => {
    console.warn('hello', rowIndex, columnIndex)

    if(map[rowIndex][columnIndex] !== ''){
      alert('Position already occupied');
      return;
    }

    setMap((existingMap) => {
      const updatedMap =[...existingMap]
      updatedMap[rowIndex][columnIndex] = currentTurn;
      return updatedMap;
      
    });

    setCurrentTurn(currentTurn === 'x' ? 'o' : 'x');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode='contain'>
        
        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
               {row.map((cell, columnIndex) => (
                <Pressable key={columnIndex} onPress={() => onPress(rowIndex, columnIndex)} style={styles.cell}>
                   {cell === 'o' && <View style={styles.circle} />}
                   {cell === 'x' && (
                      <View style={styles.cross}>
                        <View style={styles.crossLine} />
                        <View style={[styles.crossLine, styles.crossLineReversed]} />
                      </View>
                      )}
                 </Pressable>
                ))}
            </View>
          ))}
        </View>

      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242034'
  },

  bg:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15
  },

  map:{
    width: '80%',
    aspectRatio: 1,

  },
  row:{
    flex: 1,
    flexDirection: 'row',
  },
  cell:{
    width: 100,
    height: 100,
    flex:1,
  },

  circle:{
    flex: 1,
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 10,
    borderColor: 'white'
  },
  cross:{
    flex: 1
  },
  crossLine:{
    position: 'absolute',
    left: '50%',
    width: 10,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 5,
    transform:[
      {
        rotate: '45deg'
      },

    ]
  },
  crossLineReversed:{
    transform: [
      {
        rotate: '-45deg',
      },

    ]

  }
});
