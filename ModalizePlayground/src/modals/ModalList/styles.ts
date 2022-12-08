import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    width: Dimensions.get('screen').width,
    flex: 1,
  },
  listContent: {
    padding: 24,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    width: '100%',
    padding: 12,
  },
  itemContainerActive: {
    borderColor: '#00ff00',
  },
  separator: {
    height: 24,
  },
});
