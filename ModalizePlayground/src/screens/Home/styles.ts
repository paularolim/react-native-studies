import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    alignItems: 'center',
    width: '100%',
  },
  info: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    padding: 24,
    width: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 10,
    marginBottom: 12,
  },
  buttonLabel: {
    color: '#f5f5f5',
  },
});
