import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import Cross from './Cross';

const Cell = (props: { cell: string; onPress: () => void }) => {
  const { cell, onPress } = props;

  return (
    <Pressable onPress={onPress} style={styles.cell}>
      {cell === "o" && <View style={styles.circle} />}
      {cell === "x" && <Cross />}
    </Pressable>
  );
};

export default Cell;

const styles = StyleSheet.create({
  circle: {
    flex: 1,
    width: 75,
    height: 75,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderWidth: 10,
    borderColor: "white",
  },
  cell: {
    width: 100,
    height: 100,
    flex: 1,
  },
});
