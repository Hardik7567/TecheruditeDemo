import { StyleSheet } from 'react-native';

export const loginScreenStyles = StyleSheet.create({});

export const loginHeaderStyles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: 'red',
  },
  imageView: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export const loginBodyStyles = StyleSheet.create({
  container: {
    flex: 0.8,
    gap: 20,
  },
  signIn: {
    alignItems: 'flex-end',
    gap: 10,
  },
  singInText: {
    fontSize: 13,
    color: 'white',
  },
  signInButton: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: 'blue',
  },
  notaMember: {
    fontSize: 13,
  },
});
export const loginFooterStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: 'lightgray',
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
});

export const loginCommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
export const inputStyles = StyleSheet.create({
  container: {
    gap: 5,
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});
